import { Send, Webhook, Webview } from "../fb-api";
import { ChatExtension } from "../server/chat-extension";
import { ButtonHolder } from "./button-holder";
import { GenericTemplateMessageBuilder } from "./generic-template-message-builder";
import { MessageBuilder } from "./message-builder";

/**
 * An abstract parent class for builders producing button-holding messages.
 */
export abstract class ButtonHoldingTemplateMessageBuilder<T> extends MessageBuilder<Send.AttachmentMessage> implements ButtonHolder {

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
     * Creates and adds a Call Button.
     * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/call-button)
     *
     * @param {string} title - a title of the Button, max length is 20 characters
     * @param {string} phoneNumber - a phone number, format must have "+" prefix followed by the country code, area code and local number (e.g. +16505551234)
     * @returns {this} - for chaining
     */
    public addCallButton(title: string, phoneNumber: string): this {

        this.addButton({
            type: Send.ButtonType.CALL,
            title,
            payload: phoneNumber
        });

        return this;
    }

    /**
     * Creates and adds a Login Button.
     * (see https://developers.facebook.com/docs/messenger-platform/account-linking/link-account)
     *
     * @param {string} url
     * @returns {this} - for chaining
     */
    public addLoginButton(url: string): this {

        this.addButton({
            type: Send.ButtonType.LOGIN,
            url
        });

        return this;
    }

    /**
     * Creates and adds a Logout Button.
     * (see https://developers.facebook.com/docs/messenger-platform/account-linking/unlink-account)
     *
     * @returns {this} - for chaining
     */
    public addLogoutButton(): this {

        this.addButton({
            type: Send.ButtonType.LOGOUT
        });

        return this;
    }

    /**
     * Creates and adds a Postback Button.
     * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/postback-button)
     *
     * @param {string} title
     * @param {string} id
     * @param {string} [data]
     * @returns {this} - for chaining
     */
    public addPostbackButton(title: string, id: string, data?: string): this {

        this.addButton({
            type: Send.ButtonType.POSTBACK,
            title,
            payload: JSON.stringify({
                src: Webhook.PostbackSource.POSTBACK_BUTTON,
                id,
                data
            })
        });

        return this;
    }

    /**
     * Creates and adds a Share Button.
     * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/share-button)
     *
     * @param {GenericTemplateMessageBuilder} builder - optional share content, actually a complete Generic Template Message
     * @returns {this} - for chaining
     */
    public addShareButton(builder: GenericTemplateMessageBuilder): this {

        this.addButton({
            type: Send.ButtonType.SHARE
        });

        return this;
    }

    /**
     * Creates and adds a URL Button.
     * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button)
     *
     * Note if you are using messenger extensions you must whitelist its domain.
     *
     * @param {string} title
     * @param {string} url
     * @param {webviewHeightRatio?: Webview.HeightRatio, messengerExtensions?: boolean, fallbackUrl?: string, webviewShareButton?: boolean } [options]
     * @returns {this} - for chaining
     */
    public addUrlButton(title: string, url: string, options?: {
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        fallbackUrl?: string,
        webviewShareButton?: boolean
    }): this {

        const button: Send.UrlButton = {
            type: Send.ButtonType.WEB_URL,
            title,
            url
        };

        if (options) {
            options.fallbackUrl && (button.fallback_url = options.fallbackUrl);
            typeof options.messengerExtensions === "boolean" && (button.messenger_extensions = options.messengerExtensions);
            options.webviewHeightRatio && (button.webview_height_ratio = options.webviewHeightRatio);
            typeof options.webviewShareButton === "boolean" && (button.webview_share_button = options.webviewShareButton === true ? Webview.ShareButton.SHOW : Webview.ShareButton.HIDE);
        }

        this.addButton(button);

        return this;
    }

    /**
     * Creates and adds a URL Button for Chat Extension.
     *
     * @param {string} title
     * @param {ChatExtension} extension
     * @param {webviewHeightRatio?: Webview.HeightRatio, fallbackUrl?: string, webviewShareButton?: boolean } [options]
     * @returns {this} - for chaining
     */
    public addExtensionButton(title: string, extension: ChatExtension, options?: {
        webviewHeightRatio?: Webview.HeightRatio,
        fallbackUrl?: string,
        webviewShareButton?: boolean
    }): this {

        const button: Send.UrlButton = {
            type: Send.ButtonType.WEB_URL,
            title,
            url: extension.getUrl()
        };

        if (options) {
            button.messenger_extensions = true;
            options.fallbackUrl && (button.fallback_url = options.fallbackUrl);
            options.webviewHeightRatio && (button.webview_height_ratio = options.webviewHeightRatio);
            typeof options.webviewShareButton === "boolean" && (button.webview_share_button = options.webviewShareButton === true ? Webview.ShareButton.SHOW : Webview.ShareButton.HIDE);
        }

        this.addButton(button);

        return this;
    }

    protected abstract addButton(button: Send.Button): void;
}
