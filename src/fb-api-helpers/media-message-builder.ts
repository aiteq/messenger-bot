import { AbstractMessageBuilder } from "./abstract-message-builder";
import { Send } from "../fb-api/send";


export class MediaMessageBuilder extends AbstractMessageBuilder<Send.AttachmentMessage> {

	constructor(type: Send.MediaAttachmentType) {
		super();
		this.message = {
			attachment: <Send.MediaAttachment>{
				type: type,
				payload: {}
			}
		}
	}

	public setUrl(url: string): this {
		(<Send.MediaPayload>this.message.attachment.payload).url = url;
		return this;
	}

	public setReusable(reusable: boolean): this {
		(<Send.MediaPayload>this.message.attachment.payload).is_reusable = reusable;
		return this;
	}
}