import { AbstractBuilder } from "./abstract-builder";
import { Send } from "../fb-api/send";
import { TemplateMessageBuilder } from "./template-message-builder";


export class ListTemplateMessageBuilder extends TemplateMessageBuilder<Send.ListTemplate> {

	public createMessage(): this {
		this.template = {
			template_type: Send.TemplateType.LIST,
			elements: new Array<Send.Element>()
		};
		return this;
	}

	public setTopElementStyle(topElementStyle: Send.ListTopElementStyle): this {
		this.template.top_element_style = topElementStyle;
		return this;
	}

	public setSherable(sherable: boolean): this {
		this.template.sherable = sherable;
		return this;
	}

	public addElement(element: TemplateMessageBuilder.Element): this {
		this.template.elements.push(element.getObject());
		return this;
	}

	public addButton(button: TemplateMessageBuilder.Button<Send.Button>): this {
		this.template.buttons = this.template.buttons || new Array<Send.Button>();
		this.template.buttons.push(button.getOject());
		return this;
	}
}