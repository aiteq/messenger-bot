import { Send } from "../fb-api";
import { Builder } from "./builder";
import { ElementBuilder } from "./element-builder";
import { TemplateMessageBuilder } from "./template-message-builder";

/**
 * Helps to create a Generic Template message.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template)
 */
export class GenericTemplateMessageBuilder extends TemplateMessageBuilder<Send.GenericTemplate> {

    /**
     * Creates an instance of GenericTemplateMessageBuilder.
     */
    constructor() {

        super();

        this.template = {
            template_type: Send.TemplateType.GENERIC,
            elements: new Array<Send.Element>()
        };
    }

    /**
     * Sets image aspect ratio. The aspect ratio is used to render images specified by image_url in element objects.
     *
     * @param {Send.ImageAspectRatio} imageAspectRatio - Send.ImageAspectRatio.HORIZONTAL or Send.ImageAspectRatio.SQUARE
     * @returns {this} - for chaining
     */
    public setImageAspectRatio(imageAspectRatio: Send.ImageAspectRatio): this {
        this.template.image_aspect_ratio = imageAspectRatio;
        return this;
    }

    /**
     * Controls native share button.
     *
     * @param {boolean} sherable - set to false to disable the native share button in Messenger
     * @returns {this} - for chaining
     */
    public setSherable(sherable: boolean): this {
        this.template.sherable = sherable;
        return this;
    }

    /**
     * Adds an Element. Number of Elements is limited to 10.
     *
     * @param {ElementBuilder} elementBuilder
     * @returns {this} - for chaining
     */
    public addElement(elementBuilder: ElementBuilder): this {

        if (this.template.elements.length === 10) {
            throw new Error("couldn't add next Element to Generic Tepmplate message (only 10 elements is allowed)");
        }

        this.template.elements.push(elementBuilder.build());
        return this;
    }
}
