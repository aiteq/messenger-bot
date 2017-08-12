import { MessageBuilder } from "./message-builder";
import { Send } from "../fb-api/send";

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
    constructor(type: Send.MediaAttachmentType) {

        super();
        
		this.message = {
			attachment: <Send.MediaAttachment>{
				type: type,
				payload: {}
			}
		}
	}

	/**
     * Sets a URL of the media file.
     * 
     * @param {string} url 
     * @returns {this} - for chaining
     */
    public setUrl(url: string): this {
		(<Send.MediaPayload>this.message.attachment.payload).url = url;
		return this;
	}

	/**
     * Controls attachment's reusability.
     * 
     * @param {boolean} reusable 
     * @returns {this} - for chaining
     */
    public setReusable(reusable: boolean): this {
		(<Send.MediaPayload>this.message.attachment.payload).is_reusable = reusable;
		return this;
	}
}