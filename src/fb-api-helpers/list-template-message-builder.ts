import { Send } from "../fb-api";
import { Builder } from "./builder";
import { ButtonHoldingTemplateMessageBuilder } from "./button-holding-template-message-builder";
import { ElementBuilder } from "./element-builder";

/**
 * Helps to create a List Template message.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/list-template)
 */
export class ListTemplateMessageBuilder extends ButtonHoldingTemplateMessageBuilder<Send.ListTemplate> {

    constructor() {

        super();

        this.template = {
            template_type: Send.TemplateType.LIST,
            elements: new Array<Send.Element>()
        };
    }

    /**
     * Sets a style for the first list item.
     *
     * @param {Send.ListTopElementStyle} topElementStyle - Send.ListTopElementStyle.COMPACT or Send.ListTopElementStyle.LARGE
     * @returns {this} - for chaining
     */
    public setTopElementStyle(topElementStyle: Send.ListTopElementStyle): this {
        this.template.top_element_style = topElementStyle;
        return this;
    }

    /**
     * Adds an Element. Number of Elements must be 2-4.
     *
     * @param {ElementBuilder} elementBuilder
     * @returns {this} - for chaining
     */
    public addElement(elementBuilder: ElementBuilder): this {

        if (this.template.elements.length === 4) {
            throw new Error("couldn't add next Element to List Tepmplate message (only 2-4 elements is allowed)");
        }

        this.template.elements.push(elementBuilder.build());
        return this;
    }

    protected addButton(button: Send.Button): void {
        this.template.buttons = [button];
    }
}
