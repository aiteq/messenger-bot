import { Send, Webview } from "../fb-api";
import { ChatExtension } from "../index";
import { ButtonHoldingBuilder } from "./button-holding-builder";

/**
 * Helps to create an Element.
 */
export class ElementBuilder extends ButtonHoldingBuilder<Send.Element> {

    private element: Send.Element;

    /**
     * Creates an instance of ElementBuilder.
     *
     * @param {string} title
     */
    constructor(title: string) {

        super();

        this.element = { title };
    }

    /**
     * Sets a text for Element's subtitle.
     *
     * @param {string} subtitle
     * @returns {this} - for chaining
     */
    public setSubtitle(subtitle: string): this {
        this.element.subtitle = subtitle;
        return this;
    }

    /**
     * Sets Element's image.
     *
     * @param {string} imageUrl
     * @returns {this} - for chaining
     */
    public setImageUrl(imageUrl: string): this {
        this.element.image_url = imageUrl;
        return this;
    }

    /**
     * Set a Default Action for the Element.
     *
     * The Default Action behaves like a URL Button and contains the same fields except that the title field is not allowed.
     * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button)
     *
     * @param {string} url
     * @param {webviewHeightRatio?: Webview.HeightRatio, messengerExtensions?: boolean, fallbackUrl?: string, webviewShareButton?: boolean } [options]
     * @returns {this} - for chaining
     */
    public setDefaultAction(url: string, options?: {
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        fallbackUrl?: string,
        webviewShareButton?: boolean
    }): this {

        this.element.default_action = {
            type: Send.ButtonType.WEB_URL,
            url
        };

        if (options) {
            options.fallbackUrl && (this.element.default_action.fallback_url = options.fallbackUrl);
            typeof options.messengerExtensions === "boolean" && (this.element.default_action.messenger_extensions = options.messengerExtensions);
            options.webviewHeightRatio && (this.element.default_action.webview_height_ratio = options.webviewHeightRatio);
            typeof options.webviewShareButton === "boolean" && (this.element.default_action.webview_share_button = options.webviewShareButton === true ? Webview.ShareButton.SHOW : Webview.ShareButton.HIDE);
        }

        return this;
    }

    /**
     * Set a Default Action that linking Chat Extension.
     *
     * @param {ChatExtension} extension
     * @param {webviewHeightRatio?: Webview.HeightRatio, fallbackUrl?: string, webviewShareButton?: boolean } [options]
     * @returns {this} - for chaining
     */
    public setExtensionDefaultAction(extension: ChatExtension, options?: {
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        fallbackUrl?: string,
        webviewShareButton?: boolean
    }): this {

        this.element.default_action = {
            type: Send.ButtonType.WEB_URL,
            url: extension.getUrl()
        };

        if (options) {
            options.fallbackUrl && (this.element.default_action.fallback_url = options.fallbackUrl);
            this.element.default_action.messenger_extensions = true;
            options.webviewHeightRatio && (this.element.default_action.webview_height_ratio = options.webviewHeightRatio);
            typeof options.webviewShareButton === "boolean" && (this.element.default_action.webview_share_button = options.webviewShareButton === true ? Webview.ShareButton.SHOW : Webview.ShareButton.HIDE);
        }

        return this;
    }

    /**
     * Returns built Element object.
     *
     * @returns {Send.Element}
     */
    public build(): Send.Element {
        return this.element;
    }

    /**
     * Adds a Button.
     *
     * @param {Send.Button} button
     */
    protected addButton(button: Send.Button): void {

        this.element.buttons = this.element.buttons || new Array<Send.Button>();
        this.element.buttons.push(button);
    }
}
