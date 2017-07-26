import { AbstractMessageBuilder } from "./abstract-message-builder";
import { Send } from "../fb-api/send";


export class TextMessageBuilder extends AbstractMessageBuilder<Send.TextMessage> {

	constructor(text: string) {
		super();
		this.message = {
			text: text
		}
	}
}