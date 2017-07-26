import { AbstractBuilder } from "./abstract-builder";
import { Send } from "../fb-api/send";
import { TemplateMessageBuilder } from "./template-message-builder";


export class GenericTemplateMessageBuilder extends TemplateMessageBuilder<Send.GenericTemplate> {

	public createMessage(): this {
		this.template = {
			template_type: Send.TemplateType.GENERIC,
			elements: new Array<Send.Element>()
		};
		return this;
	}

	public setImageAspectRatio(imageAspectRatio: Send.ImageAspectRatio): this {
		this.template.image_aspect_ratio = imageAspectRatio;
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
}