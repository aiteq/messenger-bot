import { Send, Webview } from "../fb-api";
import { ChatExtension } from "../server/chat-extension";
import { GenericTemplateMessageBuilder } from "./generic-template-message-builder";

/**
 * Interface for message builders producing message components containing buttons.
 */
export interface ButtonHolder {

    /**
     * Creates and adds a Call Button.
     * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/call-button)
     *
     * @param {string} title - a title of the Button, max length is 20 characters
     * @param {string} phoneNumber - a phone number, format must have "+" prefix followed by the country code, area code and local number (e.g. +16505551234)
     * @returns {this} - for chaining
     */
    addCallButton(title: string, phoneNumber: string): this;

    /**
     * Creates and adds a Login Button.
     * (see https://developers.facebook.com/docs/messenger-platform/account-linking/link-account)
     *
     * @param {string} url - authentication callback URL (must use HTTPS protocol)
     * @returns {this} - for chaining
     */
    addLoginButton(url: string): this;

    /**
     * Creates and adds a Logout Button.
     * (see https://developers.facebook.com/docs/messenger-platform/account-linking/unlink-account)
     *
     * @returns {this} - for chaining
     */
    addLogoutButton(): this;

    /**
     * Creates and adds a Postback Button.
     * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/postback-button)
     *
     * @param {string} title
     * @param {string} id
     * @param {string} data
     * @returns {this} - for chaining
     */
    addPostbackButton(title: string, id: string, data: string): this;

    /**
     * Creates and adds a Share Button.
     * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/share-button)
     *
     * @param {GenericTemplateMessageBuilder} builder - optional share content, actually a complete Generic Template Message
     * @returns {this} - for chaining
     */
    addShareButton(builder: GenericTemplateMessageBuilder): this;

    /**
     * Creates and adds a URL Button.
     * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button)
     *
     * @param {string} title
     * @param {string} url
     * @param {webviewHeightRatio?: Webview.HeightRatio, messengerExtensions?: boolean, fallbackUrl?: string, webviewShareButton?: boolean} [options]
     * @returns {this} - for chaining
     */
    addUrlButton(title: string, url: string, options?: {
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        fallbackUrl?: string,
        webviewShareButton?: boolean
    }): this;

    /**
     * Creates and adds a URL Button for Chat Extension.
     *
     * @param {string} title
     * @param {ChatExtension} extension
     * @param {webviewHeightRatio?: Webview.HeightRatio, fallbackUrl?: string, webviewShareButton?: boolean } [options]
     * @returns {this} - for chaining
     */
    addExtensionButton(title: string, extension: ChatExtension, options?: {
        webviewHeightRatio?: Webview.HeightRatio,
        fallbackUrl?: string,
        webviewShareButton?: boolean
    }): this;
}
