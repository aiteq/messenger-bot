import { Webhook } from "../fb-api/webhook";
import { Request, Response, NextFunction } from "express";
import { RouterService } from "./router-service";
import { Send } from "../fb-api/send";
import { UserProfile } from "../fb-api/user-profile";
import { Chat } from "./chat";
import { logger } from "../utils/logger";


export class ResponderService extends RouterService {

  private hearHandlers: Array<{ hook: RegExp, func: ResponderService.HearHandler }>;

  private chats: Map<string, Chat>;
  
  private sendApi: Send.Api;
  private userProfileApi: UserProfile.Api;


  constructor(private accessToken: string) {
    super();

    this.hearHandlers = new Array<{ hook: RegExp, func: ResponderService.HearHandler }>();

    this.chats = new Map<string, Chat>();

    this.sendApi = new Send.Api(accessToken);
    this.userProfileApi = new UserProfile.Api(accessToken);
    
    this.post("/", (req: Request, res: Response, next: NextFunction) => {

      logger.debug("webhook post request received:", JSON.stringify(req.body));
      logger.debug("returning 200 OK");
      // returning 200 OK back prevents FB from retrying to send the message
      res.status(200).end();

      if (!req.body.object || req.body.object !== "page" || !req.body.entry) {
        throw new Error("unknown request");
      }

      (<Webhook.Request>req.body).entry.forEach((entry: Webhook.MessageEntry) => {

        logger.info(`received meesage for page https://www.facebook.com/${entry.id}`);

        entry.messaging.forEach((item: Webhook.MessagingItem) => {

          let chat: Chat = this.chats.get(item.sender.id) || (() => {
            let newChat: Chat = new Chat(item.sender.id, this.sendApi, this.userProfileApi);
            this.chats.set(item.sender.id, newChat);
            return newChat;
          })();

          if (item.message) {

            if (item.message.quick_reply) {

              this.processQuickReply(item.sender.id, item.message, chat);

            } else if (item.message.text) {

              this.processTextMessage(item.sender.id, item.message, chat);

            } else if (item.message.attachments) {

              this.processAttachment(item.sender.id, item.message, chat);

            } else if (item.message.is_echo) {

              this.processEcho(item.sender.id, item.message, chat);

            } else {

              logger.warn("received an unknown message item", item);
            }

          } else if (item.delivery) {

            this.processDelivery(item.sender.id, item.delivery, chat);

          } else if (item.read) {

            this.processRead(item.sender.id, item.read, chat);

          } else if (item.postback) {

            this.processPostback(item.sender.id, item.postback, chat);

          } else {

            logger.warn("received an unknown message item", item);
          }

        });
      });
    });
  }

  public hear(hooks: Array<RegExp>, handler: ResponderService.HearHandler): this {

    hooks.forEach(hook => {
      logger.info("registering hearing hook", hook);
      this.hearHandlers.push({ hook: hook, func: handler });
    });

    return this;
  }

  private processTextMessage(senderId: string, message: Webhook.Message, chat: Chat): void {

    logger.info("received TEXT message", message.mid);

    if (chat.isConversationActive()) {

      logger.info("..as a part of CONVERSATION");

      chat.getConversation().resume(message.text);

      return;
    }

    this.hearHandlers.forEach((handler: { hook: RegExp, func: ResponderService.HearHandler }) => {

      if (handler.hook.test(message.text)) {

        logger.debug("calling hearing handler", handler.hook);

        handler.func(chat, senderId, message.text);
      }
    });

    this.emit(ResponderService.Event.TEXT_MESSAGE, senderId, message.text, chat);
  }

  private processAttachment(senderId: string, message: Webhook.Message, chat: Chat): void {

    logger.info("received ATTACHMENT message", message.mid);
    
    message.attachments.forEach((attachment: Webhook.Attachment) => {

      let data: any;

      switch (attachment.type) {

        case Webhook.AttachmentType.IMAGE:
        case Webhook.AttachmentType.AUDIO:
        case Webhook.AttachmentType.VIDEO:
        case Webhook.AttachmentType.FILE:

          logger.info("received MEDIA message", attachment.payload.url);
          data = attachment.payload.url;
          break;

        case Webhook.AttachmentType.LOCATION:

          logger.info("received LOCATION message", attachment.title, attachment.payload.coordinates);
          data = attachment;
          break;

        default:

          data = attachment;
          break;
      }

      this.emit(`${ResponderService.Event.ATTACHMENT}:${attachment.type}`, senderId, data, chat);
      this.emit(ResponderService.Event.ATTACHMENT, senderId, data, chat);
    });
  }

  private processPostback(senderId: string, postback: Webhook.Postback, chat: Chat): void {

    let payload: Webhook.PostbackPayload = JSON.parse(postback.payload);

    logger.info("recieved POSTBACK from", payload.src, payload.id);

    payload.id && this.emit(`${payload.src}:${payload.id}`, senderId, payload.data, chat);
    this.emit(`${ResponderService.Event.POSTBACK}:${payload.src}`, senderId, payload.data, chat);
    this.emit(ResponderService.Event.POSTBACK, senderId, payload.data, chat);
  }

  private processQuickReply(senderId: string, message: Webhook.Message, chat: Chat): void {

    logger.info("received QUICK REPLY message", message.mid);
    
    let payload: Webhook.QuickReplyPayload = JSON.parse(message.quick_reply.payload);

    if (chat.isConversationActive()) {

      logger.info("..as a part of CONVERSATION");

      chat.getConversation().resume(payload.data ? payload : payload.id);

      return;
    }

    this.emit(`${ResponderService.Event.TEXT_QUICK_REPLY}:${payload.id}`, senderId, payload.data, chat);
    this.emit(ResponderService.Event.TEXT_QUICK_REPLY, senderId, payload.data, chat);
  }

  private processEcho(senderId: string, message: Webhook.Message, chat: Chat): void {

    logger.info("received ECHO for", message.mid);

    this.emit(ResponderService.Event.MESSAGE_ECHO, senderId, message, chat);
  }

  private processDelivery(senderId: string, delivery: Webhook.DeliveryInfo, chat: Chat): void {

    logger.info("received DELIVERY confirmations for", (delivery.mids || []).join(","));
    
    this.emit(ResponderService.Event.MESSAGE_DELIVERED, senderId, delivery, chat);
  }

  private processRead(senderId: string, read: Webhook.ReadInfo, chat: Chat): void {

    logger.info("received READ confirmation to time", read.watermark);
    
    this.emit(ResponderService.Event.MESSAGE_READ, senderId, read, chat);
  }
}

export namespace ResponderService {

  export type HearHandler = (chat: Chat, senderId: string, text: string) => void;
}