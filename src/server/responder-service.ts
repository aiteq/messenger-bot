import { Webhook } from "../fb-api/webhook";
import { Request, Response, NextFunction } from "express";
import { Trace } from "@aiteq/trace";
import { RouterService } from "./router-service";
import { Send } from "../fb-api/send";
import { UserProfile } from "../fb-api/user-profile";
import { Chat } from "./chat";
import { logger } from "../utils/logger";


@Trace()
export class ResponderService extends RouterService {

  private hearHandlers: Array<{ hook: RegExp, func: ResponderService.HearHandler }>;
  private eventHandlers: Map<string, Array<ResponderService.EventHandler>>;

  private chats: Map<string, Chat>;
  
  private sendApi: Send.Api;
  private userProfileApi: UserProfile.Api;


  constructor(private accessToken: string) {
    super();

    this.hearHandlers = new Array<{ hook: RegExp, func: ResponderService.HearHandler }>();
    this.eventHandlers = new Map<string, Array<ResponderService.EventHandler>>();

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

  public on(event: ResponderService.Event, handler: ResponderService.EventHandler): this;
  public on(event: ResponderService.Event, id: string, handler: ResponderService.EventHandler): this;
  public on(event: ResponderService.Event, idOrHandler: string | ResponderService.EventHandler, handler?: ResponderService.EventHandler): this {

    let key: string = event;

    if (typeof idOrHandler === "string") {
      key = key.concat(":", idOrHandler);
    } else {
      handler = idOrHandler;
    }

    logger.info("registering event handler for", key);

    if (this.eventHandlers.has(key)) {

      this.eventHandlers.get(key).push(handler);

    } else {

      let handlers: Array<ResponderService.EventHandler> = new Array<ResponderService.EventHandler>();
      handlers.push(handler);
      this.eventHandlers.set(key, handlers);
    }

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

    // call general message event handlers
    this.callEventHandlers(ResponderService.Event.TEXT_MESSAGE, senderId, message.text, chat);
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

      // call media specific attachment handlers
      this.callEventHandlers(`${ResponderService.Event.ATTACHMENT}:${attachment.type}`, senderId, data, chat);

      // call general attachment handlers
      this.callEventHandlers(ResponderService.Event.ATTACHMENT, senderId, data, chat);
    });
  }

  private processPostback(senderId: string, postback: Webhook.Postback, chat: Chat): void {

    let payload: Webhook.PostbackPayload = JSON.parse(postback.payload);

    logger.info("recieved POSTBACK from", payload.src, payload.id);

    // call postback handlers by postback source and id (if exists)
    payload.id && this.callEventHandlers(`${payload.src}:${payload.id}`, senderId, payload.data, chat);

    // call postback handlers by postback source (e.g. Get Started button)
    this.callEventHandlers(`${ResponderService.Event.POSTBACK}:${payload.src}`, senderId, payload.data, chat);

    // call general postback handlers
    this.callEventHandlers(ResponderService.Event.POSTBACK, senderId, payload.data, chat);
  }

  private processQuickReply(senderId: string, message: Webhook.Message, chat: Chat): void {

    logger.info("received QUICK REPLY message", message.mid);
    
    let payload: Webhook.QuickReplyPayload = JSON.parse(message.quick_reply.payload);

    if (chat.isConversationActive()) {

      logger.info("..as a part of CONVERSATION");

      chat.getConversation().resume(payload.data ? payload : payload.id);

      return;
    }

    // call quick reply handlers
    this.callEventHandlers(`${ResponderService.Event.TEXT_QUICK_REPLY}:${payload.id}`, senderId, payload.data, chat);

    // call general quick reply handlers
    this.callEventHandlers(ResponderService.Event.TEXT_QUICK_REPLY, senderId, payload.data, chat);
  }

  private processEcho(senderId: string, message: Webhook.Message, chat: Chat): void {

    logger.info("received ECHO for", message.mid);

    // call echo handlers
    this.callEventHandlers(ResponderService.Event.MESSAGE_ECHO, senderId, message, chat);
  }

  private processDelivery(senderId: string, delivery: Webhook.DeliveryInfo, chat: Chat): void {

    logger.info("received DELIVERY confirmations for", (delivery.mids || []).join(","));
    
    // call delivery handlers
    this.callEventHandlers(ResponderService.Event.MESSAGE_DELIVERED, senderId, delivery, chat);
  }

  private processRead(senderId: string, read: Webhook.ReadInfo, chat: Chat): void {

    logger.info("received READ confirmation to time", read.watermark);
    
    // call delivery handlers
    this.callEventHandlers(ResponderService.Event.MESSAGE_READ, senderId, read, chat);
  }

  private callEventHandlers(key: string | Webhook.PostbackSource, senderId: string, data: any, chat: Chat, context?: Map<string, any>): void {

    logger.debug("searching event handler for", key);

    (this.eventHandlers.get(key) || []).forEach((handler: ResponderService.EventHandler) => {

      logger.info("calling event handler for", key);

      handler(chat, senderId, data, context);              
    });
  }
}

export namespace ResponderService {
  export namespace Event {
    export const TEXT_MESSAGE = "message";
    export const MESSAGE_DELIVERED = "delivery";
    export const MESSAGE_READ = "read";
    export const MESSAGE_ECHO = "echo";
    export const CONVERSATION = "conversation";
    export const POSTBACK = "postback";
    export const ATTACHMENT = "attachment";
    export const ATTACHMENT_IMAGE = ATTACHMENT + ":" + Webhook.AttachmentType.IMAGE;
    export const ATTACHMENT_AUDIO = ATTACHMENT + ":" + Webhook.AttachmentType.AUDIO;
    export const ATTACHMENT_VIDEO = ATTACHMENT + ":" + Webhook.AttachmentType.VIDEO;
    export const ATTACHMENT_FILE = ATTACHMENT + ":" + Webhook.AttachmentType.FILE;
    export const ATTACHMENT_FALLBACK = ATTACHMENT + ":" + Webhook.AttachmentType.FALLBACK;
    export const ATTACHMENT_LOCATION = ATTACHMENT + ":" + Webhook.AttachmentType.LOCATION;
    export const GET_STARTED_BUTTON = POSTBACK + ":" + Webhook.PostbackSource.GET_STARTED_BUTTON;
    export const POSTBACK_BUTTON = POSTBACK + ":" + Webhook.PostbackSource.POSTBACK_BUTTON;
    export const PERSISTENT_MENU = POSTBACK + ":" + Webhook.PostbackSource.PERSISTENT_MENU;
    export const TEXT_QUICK_REPLY = "qr:" + Send.ContentType.TEXT;
    export const LOCATION_QUICK_REPLY = "qr:" + Send.ContentType.LOCATION;
  }

  export type Event =
    typeof Event.TEXT_MESSAGE |
    typeof Event.MESSAGE_DELIVERED |
    typeof Event.MESSAGE_READ |
    typeof Event.MESSAGE_ECHO |
    typeof Event.CONVERSATION |
    typeof Event.POSTBACK |
    typeof Event.ATTACHMENT |
    typeof Event.ATTACHMENT_IMAGE |
    typeof Event.ATTACHMENT_AUDIO |
    typeof Event.ATTACHMENT_VIDEO |
    typeof Event.ATTACHMENT_FILE |
    typeof Event.ATTACHMENT_FALLBACK |
    typeof Event.ATTACHMENT_LOCATION |
    typeof Event.GET_STARTED_BUTTON |
    typeof Event.PERSISTENT_MENU |
    typeof Event.TEXT_QUICK_REPLY |
    typeof Event.LOCATION_QUICK_REPLY;

  export type HearHandler = (chat: Chat, senderId: string, text: string) => void;
  export type EventHandler = (chat: Chat, senderId: string, data: any, context?: Map<string, any>) => void;
}