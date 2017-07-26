import { AbstractBuilder } from "./abstract-builder";
import { Send } from "../fb-api/send";
import { TemplateMessageBuilder } from "./template-message-builder";


export class OgTemplateMessageBuilder extends TemplateMessageBuilder<Send.OpenGraphTemplate> {

	public createMessage(): this {
		this.template = {
			template_type: Send.TemplateType.OPEN_GRAPH,
			elements: new Array<Send.OpenGraphElement>()
		};
		return this;
	}

	public addElement(element: TemplateMessageBuilder.OgElement): this {
		this.template.elements.push(element.getObject());
		return this;
	}
}