import * as Send from "../fb-api/send";
import { Builder } from "./builder";
import { GenericTemplateMessageBuilder } from "./generic-template-message-builder";

/**
 * Helps to create a Share Button.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/share-button)
 */
export class ShareButtonBuilder extends Builder<Send.ShareButton> {

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
     * Sets optional share contents, actually a complete Generic Template Message.
     * (See https://developers.facebook.com/docs/messenger-platform/send-api-reference/share-button#implementation)
     *
     * @param {GenericTemplateMessageBuilder} builder
     * @returns {this} - for chaining
     */
    public setGenericTemplate(builder: GenericTemplateMessageBuilder): this {
        this.button.share_contents = builder.build() as { attachment: Send.GenericTemplateAttachment };
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
