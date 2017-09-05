import { Send, Webhook, Webview } from "../fb-api";
import { CallButtonBuilder } from "./call-button-builder";
import { DefaultActionBuilder } from "./default-action-builder";
import { ElementBuilder } from "./element-builder";
import { LoginButtonBuilder } from "./login-button-builder";
import { LogoutButtonBuilder } from "./logout-button-builder";
import { MessageBuilder } from "./message-builder";
import { OgElementBuilder } from "./og-element-builder";
import { PostbackButtonBuilder } from "./postback-button-builder";
import { ReceiptElementBuilder } from "./receipt-element-builder";
import { ShareButtonBuilder } from "./share-button-builder";
import { UrlButtonBuilder } from "./url-button-builder";

/**
 * An abstract parent class for template message builders.
 */
export abstract class TemplateMessageBuilder<T> extends MessageBuilder<Send.AttachmentMessage> {

    /**
     * Creates a new Element builder.
     *
     * @param {string} title - a title of the Element
     * @returns {ElementBuilder}
     */
    public static createElement(title: string): ElementBuilder {
        return new ElementBuilder(title);
    }

    /**
     * Creates a new Open Graph Element builder.
     *
     * @param {string} url
     * @returns {ElementBuilder}
     */
    public static createOgElement(url: string): OgElementBuilder {
        return new OgElementBuilder(url);
    }

    /**
     * Creates a new Receipt Element builder.
     *
     * @param {string} title - a title of the Element
     * @param {number} price
     * @returns {ElementBuilder}
     */
    public static createReceiptElement(title: string, price: number): ReceiptElementBuilder {
        return new ReceiptElementBuilder(title, price);
    }

    /**
     * Creates a new Default Action builder.
     *
     * @param {string} url
     * @returns {DefaultActionBuilder}
     */
    public static createDefaultAction(url: string): DefaultActionBuilder {
        return new DefaultActionBuilder(url);
    }

    /**
     * Creates a new URL Button builder.
     *
     * @param {string} title
     * @param {string} url
     * @returns {UrlButtonBuilder}
     */
    public static createUrlButton(title: string, url: string): UrlButtonBuilder {
        return new UrlButtonBuilder(title, url);
    }

    /**
     * Creates a new Postback Button builder.
     *
     * @param {string} title
     * @param {string} id
     * @param {string} data
     * @returns {PostbackButtonBuilder}
     */
    public static createPostbackButton(title: string, id: string, data: string): PostbackButtonBuilder {
        return new PostbackButtonBuilder(title, id, data);
    }

    /**
     * Creates a new Call Button builder.
     *
     * @param {string} title
     * @param {string} phoneNumber
     * @returns {CallButtonBuilder}
     */
    public static createCallButton(title: string, phoneNumber: string): CallButtonBuilder {
        return new CallButtonBuilder(title, phoneNumber);
    }

    /**
     * Creates a new Share Butoon builder.
     *
     * @returns {ShareButtonBuilder}
     */
    public static createShareButton(): ShareButtonBuilder {
        return new ShareButtonBuilder();
    }

    /**
     * Creates a new Login Button builder.
     *
     * @param {string} url
     * @returns {LoginButtonBuilder}
     */
    public static createLoginButton(url: string): LoginButtonBuilder {
        return new LoginButtonBuilder(url);
    }

    /**
     * Creates a new Logout Button builder.
     *
     * @returns {LogoutButtonBuilder}
     */
    public static createLogoutButton(): LogoutButtonBuilder {
        return new LogoutButtonBuilder();
    }

    protected template: T;

    constructor() {

        super();

        this.message = {
            attachment: {
                type: Send.AttachmentType.TEMPLATE,
                payload: null
            }
        };
    }

    /**
     * Builds the template message
     *
     * @returns {Send.AttachmentMessage}
     */
    public build(): Send.AttachmentMessage {

        this.message.attachment.payload = this.template;
        return super.build();
    }
}
