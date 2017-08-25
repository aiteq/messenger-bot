import { NextFunction, Request, Response } from "express";
import * as Send from "../fb-api/send";
import * as UserProfile from "../fb-api/user-profile";
import * as Webhook from "../fb-api/webhook";
import { logger } from "../logger";
import { Chat } from "./chat";
import { RouterService } from "./router-service";

/**
 * A main middleware handling all webhook requests.
 */
export class ResponderService extends RouterService {

    // handlers installed using BotServer.hear
    private hearHandlers: Array<{ hook: RegExp, func: (chat: Chat, text: string, matches: string[]) => void }>;

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

        this.hearHandlers = new Array<{ hook: RegExp, func: () => void }>();
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

            (req.body as Webhook.Request).entry.forEach((entry: Webhook.MessageEntry) => {

                logger.info(`received meesage for page https://www.facebook.com/${entry.id}`);

                entry.messaging.forEach((item: Webhook.MessagingItem) => {

                    // get cached or create new Chat
                    const chat: Chat = this.chats.get(item.sender.id) || (() => {
                        const newChat: Chat = new Chat(item.sender.id, this.sendApi, this.userProfileApi);
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
     * @param {RegExp[]} hooks - an array of regular expressions
     * @param {(chat: Chat, text: string, matches: string[]) => void} handler - a callback function
     * @returns {this}
     */
    public hear(hooks: RegExp[], handler: (chat: Chat, text: string, matches: string[]) => void): this {

        hooks.forEach((hook) => {
            logger.info("subscribing to text", hook);
            this.hearHandlers.push({ hook, func: handler });
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

        // check if the incoming message is an answer to previously asked question
        // in that case no hear handlers will be called and no events will be fired

        if (!chat.answer(message.text, this)) {

            // call all hear handlers according matching hooks

            this.hearHandlers.forEach((handler: { hook: RegExp, func: (chat: Chat, text: string, captured: string[]) => void }) => {

                const matches: RegExpExecArray = handler.hook.exec(message.text);

                if (matches) {

                    logger.debug("calling hearing handler", handler.hook);
                    handler.func(chat, message.text, matches.slice(1));
                }
            });

            // emit the TEXT_MESSAGE event to call installed handlers
            this.emit(Webhook.Event.TEXT_MESSAGE, chat, message.text);
        }
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

                    logger.debug("received LOCATION message", (attachment as Webhook.LocationAttachment).title, (attachment as Webhook.LocationAttachment).payload.coordinates);
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

        const payload: Webhook.PostbackPayload = JSON.parse(postback.payload);

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

        const payload: Webhook.QuickReplyPayload = JSON.parse(message.quick_reply.payload);

        // check if the incoming message is an answer to previously asked question
        // in that case no events will be fired

        if (!chat.answer(payload.data ? payload : payload.id, this)) {
            // emit IDENTIFIED QUICK REPLY event
            this.emit(`${Webhook.Event.TEXT_QUICK_REPLY}:${payload.id}`, chat, payload.data);

            // finally emit general QUICK REPLY event
            this.emit(Webhook.Event.TEXT_QUICK_REPLY, chat, payload.data);
        }
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
