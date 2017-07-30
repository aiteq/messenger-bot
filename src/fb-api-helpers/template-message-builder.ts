import { Webview } from "../fb-api/webview";
import { Webhook } from "../fb-api/webhook";
import { AbstractMessageBuilder } from "./abstract-message-builder";
import { Send } from "../fb-api/send";
import { logger } from "../logger";
import { ElementBuilder } from "./element-builder";
import { OgElementBuilder } from "./og-element-builder";
import { ReceiptElementBuilder } from "./receipt-element-builder";
import { DefaultActionBuilder } from "./default-action-builder";
import { UrlButtonBuilder } from "./url-button-builder";
import { PostbackButtonBuilder } from "./postback-button-builder";
import { ShareButtonBuilder } from "./share-button-builder";
import { CallButtonBuilder } from "./call-button-builder";
import { LoginButtonBuilder } from "./login-button-builder";
import { LogoutButtonBuilder } from "./logout-button-builder";

/**
 * An abstract parent class for template message builders.
 */
export abstract class TemplateMessageBuilder<T> extends AbstractMessageBuilder<Send.AttachmentMessage> {

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
     * @param {string} payload 
     * @returns {CallButtonBuilder} 
     */
    public static createCallButton(title: string, payload: string): CallButtonBuilder {
        return new CallButtonBuilder(title, payload);
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
}

/*
export namespace TemplateMessageBuilder {

	export abstract class Template<T extends Send.Template> {
		public abstract getTemplateObject(): T;
	}
}
*/