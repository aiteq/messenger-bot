import { Webview } from "../fb-api/webview";
import { Send } from "../fb-api/send";
import { Webhook } from "../fb-api/webhook";
import { Builder } from "./builder";

/**
 * Helps to create a Postback Button.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/postback-button)
 */
export class PostbackButtonBuilder extends Builder<Send.PostbackButton> {

    private button: Send.PostbackButton;

    /**
     * Creates an instance of PostbackButtonBuilder.
     * 
     * @param {string} title 
     * @param {string} id 
     * @param {string} data 
     */
    constructor(title: string, id: string, data: string) {

        super();

        this.button = {
            type: Send.ButtonType.POSTBACK,
            title: title,
            payload: JSON.stringify({
                src: Webhook.PostbackSource.POSTBACK_BUTTON,
                id: id,
                data: data
            })
        };
    }

    /**
     * Returns built Postback Button object.
     * 
     * @returns {Send.PostbackButton} 
     */
    public build(): Send.PostbackButton {
        return this.button;
    }
}
