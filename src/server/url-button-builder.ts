import { Webview } from "../fb-api/webview";
import { Send } from "../fb-api/send";
import { Builder } from "./builder";

/**
 * Helps to create a URL Button.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button)
 */
export class UrlButtonBuilder extends Builder<Send.UrlButton> {

    private button: Send.UrlButton;

    /**
     * Creates an instance of UrlButtonBuilder.
     * 
     * @param {string} title 
     * @param {string} url 
     */
    constructor(title: string, url: string) {

        super();

        this.button = {
            type: Send.ButtonType.WEB_URL,
            title: title,
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
        this.button.webview_height_ratio = webviewHeightRatio;
        return this;
    }

    /**
     * Controls usage of Messenger Extensions.
     * 
     * @param {boolean} messengerExtensions - must be true if using Messenger Extensions
     * @returns {this} - for chaining
     */
    public setMessengerEtensions(messengerExtensions: boolean): this {
        this.button.messenger_extensions = messengerExtensions;
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
        this.button.fallback_url = fallbackUrl;
        return this;
    }

    /**
     * Controls the share button in the Webview.
     * 
     * @param {boolean} webviewShareButton 
     * @returns {this} - for chaining
     */
    public setShowWebviewShareButton(webviewShareButton: boolean): this {
        this.button.webview_share_button = webviewShareButton === true ? Webview.ShareButton.SHOW : Webview.ShareButton.HIDE;
        return this;
    }

    /**
     * Returns built URL Button object.
     * 
     * @returns {Send.UrlButton} 
     */
    public build(): Send.UrlButton {
        return this.button;
    }
}
