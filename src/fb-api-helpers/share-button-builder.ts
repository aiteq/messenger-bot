import { Send } from "../fb-api/send";
import { AbstractBuilder } from "./abstract-builder";

/**
 * Helps to create a Share Button.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/share-button)
 */
export class ShareButtonBuilder extends AbstractBuilder<Send.ShareButton> {

    private button: Send.ShareButton;

    /**
     * Creates an instance of ShareButtonBuilder.
     */
    constructor() {

        super();

        this.button = {
            type: Send.ButtonType.SHARE
        };
    }

    /**
     * Sets share contents.
     * 
     * @param {*} shareContents 
     * @returns {this} - for chaining
     */
    public setShareContents(shareContents: any): this {
        this.button.share_contents = shareContents;
        return this;
    }

    /**
     * Returns built Share Button object.
     * 
     * @returns {Send.ShareButton} 
     */
    public build(): Send.ShareButton {
        return this.button;
    }
}
