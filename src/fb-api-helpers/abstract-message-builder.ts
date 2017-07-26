import { AbstractBuilder } from "./abstract-builder";
import { Send } from "../fb-api/send";


export abstract class AbstractMessageBuilder<T extends Send.Message> extends AbstractBuilder<T> {

	protected message: T;


	public addTextQuickReply(title: string, id: string, data?: string | any, imageUrl?: string): this {

		this.message.quick_replies = this.message.quick_replies || new Array<Send.QuickReply>();

		let payload: any = { id: id };
		data && (payload.data = typeof data === "string" ? data : JSON.stringify(data));

		let qr: Send.TextQuickReply = {
			content_type: Send.ContentType.TEXT,
			title: title,
			payload: JSON.stringify(payload)
		};
		imageUrl && (qr.image_url = imageUrl);

		this.message.quick_replies.push(qr);

		return this;
	}

	public addLocationQuickReply(): this {

		this.message.quick_replies = this.message.quick_replies || new Array<Send.QuickReply>();

		this.message.quick_replies.push({ content_type: Send.ContentType.LOCATION });

		return this;
	}

	public build(): T {

		return this.message;
	}
}