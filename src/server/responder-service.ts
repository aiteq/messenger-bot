import { Request, Response, NextFunction } from "express";
import { Send } from "../fb-api/send";
import { Webhook } from "../fb-api/webhook";
import { UserProfile } from "../fb-api/user-profile";
import { logger } from "../logger";
import { RouterService } from "./router-service";
import { Chat } from "./chat";


/**
 * A main middleware handling all webhook requests.
 */
export class ResponderService extends RouterService {

    // handlers installed using BotServer.hear
    private hearHandlers: Array<{ hook: RegExp, func: Function }>;

    // cached chats - necessary for holding conversation contexts
    private chats: Map<string, Chat>;

    private sendApi: Send.Api;
    private userProfileApi: UserProfile.Api;


    /**
     * Creates an instance of ResponderService.
     * @param {string} accessToken 
     */
    constructor(private accessToken: string) {

        super();

        this.hearHandlers = new Array<{ hook: RegExp, func: Function }>();
        this.chats = new Map<string, Chat>();

        this.sendApi = new Send.Api(accessToken);
        this.userProfileApi = new UserProfile.Api(accessToken);

        // install webhook request handler
        this.post("/", (req: Request, res: Response, next: NextFunction) => {

            logger.debug("webhook post request received:", JSON.stringify(req.body));
            logger.debug("returning 200 OK");

            // returning 200 OK back prevents FB from retrying to send the message
            res.status(200).end();

            if (!req.body.object || req.body.object !== "page" || !req.body.entry) {
                throw new Error("unknown request");
            }

            // parse webhook request data according to common format
            // see https://developers.facebook.com/docs/messenger-platform/webhook-reference#format

            (<Webhook.Request>req.body).entry.forEach((entry: Webhook.MessageEntry) => {

                logger.info(`received meesage for page https://www.facebook.com/${entry.id}`);

                entry.messaging.forEach((item: Webhook.MessagingItem) => {

                    // get cached or create new Chat
                    let chat: Chat = this.chats.get(item.sender.id) || (() => {
                        let newChat: Chat = new Chat(item.sender.id, this.sendApi, this.userProfileApi);
                        this.chats.set(item.sender.id, newChat);
                        return newChat;
                    })();

                    if (item.message) {

                        if (item.message.quick_reply) {

                            // a QUICK REPLY message received
                            // it must be checked before TEXT MESSAGE because it contains text property too

                            this.processQuickReply(item.message, chat);

                        } else if (item.message.text) {

                            // a TEXT message received

                            this.processTextMessage(item.message, chat);

                        } else if (item.message.attachments) {

                            // an ATTACHMENT received

                            this.processAttachment(item.message, chat);

                        } else if (item.message.is_echo) {

                            // an ECHO received

                            this.processEcho(item.message, chat);

                        } else {

                            logger.warn("received an unknown message item", item);
                        }

                    } else if (item.delivery) {

                        // a message DELIVERY CONFIRMATION received

                        this.processDelivery(item.delivery, chat);

                    } else if (item.read) {

                        // a message READ CONFIRMATION received

                        this.processRead(item.read, chat);

                    } else if (item.postback) {

                        // a POSTBACK request received

                        this.processPostback(item.postback, chat);

                    } else {

                        logger.warn("received an unknown message item", item);
                    }
                });
            });
        });
    }

    /**
     * Install a hear listener for specified regular expressions testing against incoming text messages.
     * It is called only by BotServer.hear().
     * 
     * @param {Array<RegExp>} hooks - an array of regular expressions
     * @param {Function} handler - a callback function
     * @returns {this} 
     */
    public hear(hooks: Array<RegExp>, handler: Function): this {

        hooks.forEach(hook => {
            logger.info("subscribing to text", hook);
            this.hearHandlers.push({ hook: hook, func: handler });
        });

        return this;
    }

    /**
     * Process an incoming TEXT message.
     * 
     * @param {Webhook.Message} message 
     * @param {Chat} chat 
     */
    private processTextMessage(message: Webhook.Message, chat: Chat): void {

        logger.debug("received TEXT message", message.mid);

        if (chat.isConversationActive()) {

            // if the message is part of an active conversation, don't call any hear handler
            // just resume the conversation with the message text

            logger.debug("..as a part of CONVERSATION");
            chat.getConversation().resume(message.text, this);

        } else {

            // call all hear handlers according matching hooks

            this.hearHandlers.forEach((handler: { hook: RegExp, func: Function }) => {

                let matches: RegExpExecArray = handler.hook.exec(message.text);

                if (matches) {

                    logger.debug("calling hearing handler", handler.hook);
                    handler.func(chat, message.text, matches.slice(1));
                }
            });
        }

        // finally emit the TEXT_MESSAGE event to call installed handlers

        this.emit(Webhook.Event.TEXT_MESSAGE, chat, message.text);
    }

    /**
     * Process an incoming ATTACHMENT.
     * 
     * @param {Webhook.Message} message 
     * @param {Chat} chat 
     */
    private processAttachment(message: Webhook.Message, chat: Chat): void {

        logger.debug("received ATTACHMENT message", message.mid);

        message.attachments.forEach((attachment: Webhook.Attachment) => {

            let data: any;

            switch (attachment.type) {

                case Webhook.AttachmentType.IMAGE:
                case Webhook.AttachmentType.AUDIO:
                case Webhook.AttachmentType.VIDEO:
                case Webhook.AttachmentType.FILE:

                    logger.debug("received MEDIA message", attachment.payload.url);
                    data = attachment.payload.url;
                    break;

                case Webhook.AttachmentType.LOCATION:

                    logger.debug("received LOCATION message", attachment.title, attachment.payload.coordinates);
                    data = attachment;
                    break;

                default:

                    data = attachment;
                    break;
            }

            // emit TYPED ATTACHMENT event
            this.emit(`${Webhook.Event.ATTACHMENT}:${attachment.type}`, chat, data);

            // finally emit general ATTACHMENT event
            this.emit(Webhook.Event.ATTACHMENT, chat, data);
        });
    }

    /**
     * Process an incoming POSTBACK.
     * 
     * @param {Webhook.Postback} postback 
     * @param {Chat} chat 
     */
    private processPostback(postback: Webhook.Postback, chat: Chat): void {

        let payload: Webhook.PostbackPayload = JSON.parse(postback.payload);

        logger.debug("recieved POSTBACK from", payload.src, payload.id);

        // emit IDENTIFIED POSTBACK event
        payload.id && this.emit(`${Webhook.Event.POSTBACK}:${payload.src}:${payload.id}`, chat, payload.data);

        // emit SOURCE TYPED POSTBACK event
        this.emit(`${Webhook.Event.POSTBACK}:${payload.src}`, chat, payload.data);

        // finally emit general POSTBACK event
        this.emit(Webhook.Event.POSTBACK, chat, payload.data);
    }

    /**
     * Process an incoming QUICK REPLY.
     * 
     * @param {Webhook.Message} message 
     * @param {Chat} chat 
     */
    private processQuickReply(message: Webhook.Message, chat: Chat): void {

        logger.debug("received QUICK REPLY message", message.mid);

        let payload: Webhook.QuickReplyPayload = JSON.parse(message.quick_reply.payload);

        if (chat.isConversationActive()) {

            // if the message is a part of conversation, resume it with data or id

            logger.debug("..as a part of CONVERSATION");
            chat.getConversation().resume(payload.data ? payload : payload.id, this);
        }

        // emit IDENTIFIED QUICK REPLY event
        this.emit(`${Webhook.Event.TEXT_QUICK_REPLY}:${payload.id}`, chat, payload.data);

        // finally emit general QUICK REPLY event
        this.emit(Webhook.Event.TEXT_QUICK_REPLY, chat, payload.data);
    }

    /**
     * Process an incoming ECHO message.
     * 
     * @param {Webhook.Message} message 
     * @param {Chat} chat 
     */
    private processEcho(message: Webhook.Message, chat: Chat): void {

        logger.debug("received ECHO for", message.mid);
        this.emit(Webhook.Event.MESSAGE_ECHO, chat, message);
    }

    /**
     * Process an incoming DELIVERY NOTIFICATION.
     * 
     * @param {Webhook.DeliveryInfo} delivery 
     * @param {Chat} chat 
     */
    private processDelivery(delivery: Webhook.DeliveryInfo, chat: Chat): void {

        logger.debug("received DELIVERY confirmations for", (delivery.mids || []).join(","));
        this.emit(Webhook.Event.MESSAGE_DELIVERED, chat, delivery);
    }

    /**
     * Process an incoming READ CONFIRMATION.
     * 
     * @param {Webhook.ReadInfo} read 
     * @param {Chat} chat 
     */
    private processRead(read: Webhook.ReadInfo, chat: Chat): void {

        logger.debug("received READ confirmation to time", read.watermark);
        this.emit(Webhook.Event.MESSAGE_READ, chat, read);
    }
}
