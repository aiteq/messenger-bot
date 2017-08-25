/**
 * Types for Webhook interface.
 * (see https://developers.facebook.com/docs/messenger-platform/webhook-reference)
 */
export interface Request {
    object: "page";
    entry: MessageEntry[];
}

export interface MessageEntry {
    id: string; // page id
    time: number;
    messaging: MessagingItem[];
}

export interface MessagingItem {
    sender: Sender;
    recipient: Recipient;
    timestamp: number;
    message?: Message;
    postback?: Postback;
    delivery?: DeliveryInfo;
    read?: ReadInfo;
    optin?: PluginOptin;
}

export interface Sender {
    id: string; // user id
}

export interface Recipient {
    id: string; // page id
}

export interface Message {
    mid: string;
    text?: string;
    attachments?: Attachment[];
    quick_reply?: QuickReply;
    is_echo?: boolean;
    app_id?: number;
    metadata?: string;
}

export type Attachment = MediaAttachment | LocationAttachment;

export interface MediaAttachment {
    type: AttachmentType;
    payload: MediaAttachmentPayload;
}

export interface LocationAttachment {
    type: AttachmentType.LOCATION;
    payload: LocationAttachmentPayload;
    title: string;
    url: string;
}

export interface MediaAttachmentPayload {
    url: string;
}

export interface LocationAttachmentPayload {
    coordinates: Coordinates;
}

export interface Coordinates {
    lat: number;
    long: number;
}

export interface QuickReply {
    payload: string;
}

export interface QuickReplyPayload {
    id: string;
    data?: any;
}

export interface Postback {
    payload: string;
    referral?: Referral;
}

export interface PostbackPayload {
    src: PostbackSource;
    data: any;
    id?: string;
}

export interface DeliveryInfo {
    mids: string[];
    watermark: number;
    seq: number;
}

export interface ReadInfo {
    watermark: number;
    seq: number;
}

export interface Referral {
    ref?: string;
    source: ReferralSource;
    type: string;
    ad_id?: string;
}

export interface PluginOptin {
    ref: string;
}

export enum PostbackSource {
    GET_STARTED_BUTTON = "get-started-button",
    POSTBACK_BUTTON = "postback-button",
    PERSISTENT_MENU = "persistent-menu"
}

export enum AttachmentType {
    IMAGE = "image",
    AUDIO = "audio",
    VIDEO = "video",
    FILE = "file",
    LOCATION = "location",
    FALLBACK = "fallback"
}

export enum ReferralSource {
    SHORTLINK = "SHORTLINK",
    ADS = "ADS",
    MESSENGER_CODE = "MESSENGER_CODE",
    DISCOVER_TAB = "DISCOVER_TAB"
}

export enum Event {
    TEXT_MESSAGE = "message",
    MESSAGE_DELIVERED = "delivery",
    MESSAGE_READ = "read",
    MESSAGE_ECHO = "echo",
    POSTBACK = "postback",
    ATTACHMENT = "attachment",
    ATTACHMENT_IMAGE = "attachment:image",
    ATTACHMENT_AUDIO = "attachment:audio",
    ATTACHMENT_VIDEO = "attachment:video",
    ATTACHMENT_FILE = "attachment:file",
    ATTACHMENT_FALLBACK = "attachment:fallback",
    ATTACHMENT_LOCATION = "attachment:location",
    GET_STARTED_BUTTON = "postback:get",
    POSTBACK_BUTTON = "postback:get-started-button",
    PERSISTENT_MENU = "postback:persistent-menu",
    TEXT_QUICK_REPLY = "qr:text",
    LOCATION_QUICK_REPLY = "qr:location"
}
