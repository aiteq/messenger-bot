import { Webview } from "../fb-api/webview";
import { Send } from "../fb-api/send";
import { AbstractBuilder } from "./abstract-builder";

/**
 * Helps to create a Default Action.
 * The Default Action behaves like a URL Button and contains the same fields except that the title field is not allowed.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button)
 */
export class DefaultActionBuilder extends AbstractBuilder<Send.DefaultAction> {

    private action: Send.DefaultAction;

    /**
     * Creates an instance of DefaultActionBuilder.
     * 
     * @param {string} url 
     */
    constructor(url: string) {

        super();
        this.action = {
            type: Send.ButtonType.WEB_URL,
            url: url
        };
    }

    /**
     * Sets a height of the Webview.
     * 
     * @param {Webview.HeightRatio} webviewHeightRatio - Webview.HeightRatio.COMPACT or Webview.HeightRatio.FULL or Webview.HeightRatio.TALL
     * @returns {this} - for chaining
     */
    public setWebviewHeightRatio(webviewHeightRatio: Webview.HeightRatio): this {
        this.action.webview_height_ratio = webviewHeightRatio;
        return this;
    }

    /**
     * Controls usage of Messenger Extensions.
     * 
     * @param {boolean} messengerExtensions - must be true if using Messenger Extensions
     * @returns {this} - for chaining
     */
    public setMessengerExtensions(messengerExtensions: boolean): this {
        this.action.messenger_extensions = messengerExtensions;
        return this;
    }

    /**
     * Sets the URL to use on clients that don't support Messenger Extensions.
     * If this is not defined, the <code>url</code> will be used as the fallback.
     * It may only be specified if messenger_extensions is true.
     * 
     * @param {string} fallbackUrl - a fallback URL
     * @returns {this} - for chaining
     */
    public setFallbackUrl(fallbackUrl: string): this {
        this.action.fallback_url = fallbackUrl;
        return this;
    }

    /**
     * Controls the share button in the Webview.
     * 
     * @param {boolean} webviewShareButton 
     * @returns {this} - for chaining
     */
    public setShowWebviewShareButton(webviewShareButton: boolean): this {
        this.action.webview_share_button = webviewShareButton === true ? Webview.ShareButton.SHOW : Webview.ShareButton.HIDE;
        return this;
    }

    /**
     * Returns built Default Action object.
     * 
     * @returns {Send.DefaultAction} 
     */
    public build(): Send.DefaultAction {
        return this.action;
    }
}
