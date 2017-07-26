import { logger } from "../utils/logger";
import { Webview } from "./webview";
import { GraphApi } from "./graph-api";
import { AbstractMessageBuilder } from "../fb-api-helpers/abstract-message-builder";


export namespace Send {

  export class Api extends GraphApi<Request> {

    private static reusableAttachments: Map<string, string> = new Map<string, string>();


    constructor(protected accessToken: string) {
      super(accessToken, GraphApi.Endpoint.MESSAGES);
    }

    public async sendText(recipientId: string, text: string): Promise<any> {
      return await this.send(recipientId, { text: text });
    }

    public sendImage(recipientId: string, url: string, reusable: boolean = false): Promise<string> {
      return this.sendMediaAttachment(AttachmentType.IMAGE, recipientId, url, reusable);
    }

    public sendAudio(recipientId: string, url: string, reusable: boolean = false): Promise<string> {
      return this.sendMediaAttachment(AttachmentType.AUDIO, recipientId, url, reusable);
    }

    public sendVideo(recipientId: string, url: string, reusable: boolean = false): Promise<string> {
      return this.sendMediaAttachment(AttachmentType.VIDEO, recipientId, url, reusable);
    }

    public sendFile(recipientId: string, url: string, reusable: boolean = false): Promise<string> {
      return this.sendMediaAttachment(AttachmentType.FILE, recipientId, url, reusable);
    }

    public typingOn(recipientId: string): void {
      this.sendRequest({
        recipient: JSON.stringify({
          id: recipientId
        }),
        sender_action: SenderAction.TYPING_ON
      });
    }

    public typingOff(recipientId: string): void {
      this.sendRequest({
        recipient: JSON.stringify({
          id: recipientId
        }),
        sender_action: SenderAction.TYPING_OFF
      });
    }

    public markSeen(recipientId: string): void {
      this.sendRequest({
        recipient: JSON.stringify({
          id: recipientId
        }),
        sender_action: SenderAction.MARK_SEEN
      });
    }

    private async sendMediaAttachment(type: MediaAttachmentType, recipientId: string, url: string, reusable: boolean): Promise<string> {

      // first check reusable attachments
      if (Api.reusableAttachments.has(url)) {

        // re-use the attachment

        let attachmentId: string = Api.reusableAttachments.get(url);

        logger.info(`Send.Api: re-using attachment '{url}' (attachmentId=${attachmentId})`);

        this.send(recipientId, {
          attachment: <Attachment>{
            type: type,
            payload: {
              attachment_id: attachmentId
            }
          }
        });

        return attachmentId;
      }

      let response: Response = await this.send(recipientId, {
        attachment: <Attachment>{
          type: type,
          payload: {
            url: url,
            is_reusable: reusable
          }
        }
      });

      if (reusable && response) {
        // save attachmentId to re-use later
        Api.reusableAttachments.set(url, response.attachment_id);
        return response.attachment_id;
      }

      return undefined;
    }

    public send(recipientId: string, messageOrBuilder: Message | AbstractMessageBuilder<Message>): Promise<any> {

      return this.sendRequest({
        recipient: JSON.stringify({
          id: recipientId
        }),
        message: JSON.stringify(messageOrBuilder instanceof AbstractMessageBuilder ? messageOrBuilder.build() : messageOrBuilder)
      });
    }
  }

  export interface Name {
    first_name: string;
    last_name: string;
  }

  export interface Recipient {
    id: string;
    phone_number: string;
    name: Name;
  }

  export namespace ContentType {
    export const TEXT = "text";
    export const LOCATION = "location";
  }

  export interface TextQuickReply {
    content_type: typeof ContentType.TEXT;
    title: string;
    payload: string;
    image_url?: string;
  }

  export interface LocationQuickReply {
    content_type: typeof ContentType.LOCATION;
  }

  export type QuickReply = TextQuickReply | LocationQuickReply;

  export namespace TemplateType {
    export const GENERIC = "generic";
    export const BUTTON = "button";
    export const LIST = "list";
    export const OPEN_GRAPH = "open_graph";
    export const RECEIPT = "receipt";
  }

  export namespace ImageAspectRatio {
    export const HORIZONTAL = "horizontal";
    export const SQUARE = "square";
  }

  export type ImageAspectRatio = typeof ImageAspectRatio.HORIZONTAL | typeof ImageAspectRatio.SQUARE;

  export namespace ButtonType {
    export const WEB_URL = "web_url";
    export const POSTBACK = "postback";
    export const CALL = "phone_number";
    export const SHARE = "element_share";
    export const LOGIN = "account_link";
    export const LOGOUT = "account_unlink";
  }

  export interface UrlButton {
    type: typeof ButtonType.WEB_URL;
    title: string;
    url: string;
    webview_height_ratio?: Webview.HeightRatio;
    messenger_extensions?: boolean;
    fallback_url?: string;
    webview_share_button?: Webview.ShareButton;
  }

  export interface PostbackButton {
    type: typeof ButtonType.POSTBACK;
    title: string;
    payload: string;
  }

  export interface CallButton {
    type: typeof ButtonType.CALL;
    title: string;
    payload: string;
  }

  export interface ShareButton {
    type: typeof ButtonType.SHARE;
    share_contents?: any;
  }

  export interface LoginButton {
    type: typeof ButtonType.LOGIN;
    url: string;
  }

  export interface LogoutButton {
    type: typeof ButtonType.LOGOUT;
  }

  export type Button = UrlButton | PostbackButton | CallButton | ShareButton | LoginButton | LogoutButton;

  export interface DefaultAction {
    type: typeof ButtonType.WEB_URL;
    url: string;
    webview_height_ratio?: Webview.HeightRatio;
    messenger_extensions?: boolean;
    fallback_url?: string;
    webview_share_button?: Webview.ShareButton;
  }

  export interface Element {
    title: string;
    subtitle?: string;
    image_url?: string;
    default_action?: DefaultAction;
    buttons?: Array<Button>;
  }

  export interface GenericTemplate {
    template_type: typeof TemplateType.GENERIC;
    sherable?: boolean;
    image_aspect_ratio?: ImageAspectRatio;
    elements: Array<Element>;
  }

  export interface ButtonTemplate {
    template_type: typeof TemplateType.BUTTON;
    text: string;
    buttons: Array<Button>;
  }

  export namespace ListTopElementStyle {
    export const LARGE = "large";
    export const COMPACT = "compact";
  }

  export type ListTopElementStyle = typeof ListTopElementStyle.LARGE | typeof ListTopElementStyle.COMPACT;

  export interface ListTemplate {
    template_type: typeof TemplateType.LIST;
    sherable?: boolean;
    top_element_style?: ListTopElementStyle;
    elements: Array<Element>;
    buttons?: Array<Button>;
  }

  export interface OpenGraphElement {
    url: string;
    buttons?: Array<Button>;
  }

  export interface OpenGraphTemplate {
    template_type: typeof TemplateType.OPEN_GRAPH;
    elements: Array<OpenGraphElement>;
  }

  export interface ReceiptElement {
    title: string;
    subtitle?: string;
    quantity?: number;
    price: number;
    currency?: string;
    image_url?: string;
  }

  export interface Address {
    street_1: string;
    street_2?: string;
    city: string;
    postal_code: string;
    state: string;
    country: string;    
  }

  export interface PaymentSummary {
    subtotal?: number;
    shipping_cost?: number;
    total_tax?: number;
    total_cost: number;
  }

  export interface PaymentAdjustments {
    name: string;
    amount: number;
  }

  export interface ReceiptTemplate {
    template_type: typeof TemplateType.RECEIPT;
    sherable?: boolean;
    recipient_name: string;
    merchant_name?: string;
    order_number: string;
    currency: string;
    payment_method: string;
    timestamp?: string;
    order_url?: string;
    elements?: Array<ReceiptElement>;
    address?: Address;
    summary: PaymentSummary;
    adjustments?: PaymentAdjustments;
  }

  export type Template = GenericTemplate | ButtonTemplate | ListTemplate | ReceiptTemplate | OpenGraphTemplate;

  export namespace AttachmentType {
    export const IMAGE = "image";
    export const AUDIO = "audio";
    export const VIDEO = "video";
    export const FILE = "file";
    export const TEMPLATE = "template";
  }

  export type AttachmentType = typeof AttachmentType.IMAGE | typeof AttachmentType.AUDIO | typeof AttachmentType.VIDEO | typeof AttachmentType.FILE | typeof AttachmentType.TEMPLATE;
  export type MediaAttachmentType = typeof AttachmentType.IMAGE | typeof AttachmentType.AUDIO | typeof AttachmentType.VIDEO | typeof AttachmentType.FILE;

  export interface MediaPayload {
    url?: string;
    is_reusable?: boolean;
    attachment_id?: string;
  }

  export interface ImageAttachment {
    type: typeof AttachmentType.IMAGE;
    payload: MediaPayload;
  }

  export interface AudioAttachment {
    type: typeof AttachmentType.AUDIO;
    payload: MediaPayload;
  }

  export interface VideoAttachment {
    type: typeof AttachmentType.VIDEO;
    payload: MediaPayload;
  }

  export interface FileAttachment {
    type: typeof AttachmentType.FILE;
    payload: MediaPayload;
  }

  export interface TemplateAttachment {
    type: typeof AttachmentType.TEMPLATE;
    payload: Template;
  }

  export type MediaAttachment = ImageAttachment | AudioAttachment | VideoAttachment | FileAttachment;

  export type Attachment = MediaAttachment | TemplateAttachment;

  export interface AbstractMessage {
    quick_replies?: Array<QuickReply>;
    metadata?: string;
  }

  export interface TextMessage extends AbstractMessage {
    text: string;
  }

  export interface AttachmentMessage extends AbstractMessage {
    attachment: Attachment;
  }

  export type Message = TextMessage | AttachmentMessage;

  export namespace SenderAction {
    export const TYPING_ON = "typing_on";
    export const TYPING_OFF = "typing_off";
    export const MARK_SEEN = "mark_seen";
  }

  export type SenderAction = typeof SenderAction.TYPING_ON | typeof SenderAction.TYPING_OFF | typeof SenderAction.MARK_SEEN;

  export namespace NotificationType {
    export const REGULAR = "REGULAR";
    export const SILENT_PUSH = "SILENT_PUSH";
    export const NO_PUSH = "NO_PUSH";
  }

  export type NotificationType = typeof NotificationType.REGULAR | typeof NotificationType.SILENT_PUSH | typeof NotificationType.NO_PUSH;

  export namespace Tag {
    export const SHIPPING_UPDATE = "SHIPPING_UPDATE";
    export const RESERVATION_UPDATE = "RESERVATION_UPDATE";
    export const ISSUE_RESOLUTION = "ISSUE_RESOLUTION";
  }

  export type Tag = typeof Tag.SHIPPING_UPDATE | typeof Tag.RESERVATION_UPDATE | typeof Tag.ISSUE_RESOLUTION;

  export interface Request extends GraphApi.Request {
    recipient: string;
    message?: string;
    sender_action?: SenderAction;
    notification_type?: NotificationType;
    tag?: Tag;
  }

  export interface Response {
    recipient_id: string;
    message_id: string;
    attachment_id?: string;
  }

  export interface Error {
    message: string;
    type: string;
    code: number;
    error_subcode: number;
    fbtrace_id: string;
  }
}