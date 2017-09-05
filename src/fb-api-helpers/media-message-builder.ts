import { Send } from "../fb-api";
import { MessageBuilder } from "./message-builder";

/**
 * Helps to create a message with media attachment.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/contenttypes)
 */
export class MediaMessageBuilder extends MessageBuilder<Send.AttachmentMessage> {

    /**
     * Creates an instance of MediaMessageBuilder.
     *
     * @param {Send.MediaAttachmentType} type
     */
    constructor(type: Send.AttachmentType) {

        super();

        this.message = {
            attachment: {
                type,
                payload: {}
            } as Send.MediaAttachment
        };
    }

    /**
     * Sets a URL of the media file.
     *
     * @param {string} url
     * @returns {this} - for chaining
     */
    public setUrl(url: string): this {
        (this.message.attachment.payload as Send.MediaPayload).url = url;
        return this;
    }

    /**
     * Controls attachment's reusability.
     *
     * @param {boolean} reusable
     * @returns {this} - for chaining
     */
    public setReusable(reusable: boolean): this {
        (this.message.attachment.payload as Send.MediaPayload).is_reusable = reusable;
        return this;
    }
}
