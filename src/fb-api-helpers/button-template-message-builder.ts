import { AbstractBuilder } from "./abstract-builder";
import { Send } from "../fb-api/send";
import { TemplateMessageBuilder } from "./template-message-builder";


export class ButtonTemplateMessageBuilder extends TemplateMessageBuilder<Send.ButtonTemplate> {

	public createMessage(text: string): this {
		this.template = {
			template_type: Send.TemplateType.BUTTON,
			text: text,
			buttons: new Array<Send.Button>()
		};
		return this;
	}

	public setText(text: string): this {
		this.template.text = text;
		return this;
	}

	public addButton(button: TemplateMessageBuilder.Button<Send.Button>): this {
		this.template.buttons.push(button.getOject());
		return this;
	}
}