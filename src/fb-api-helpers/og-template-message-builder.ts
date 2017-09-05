import { Send } from "../fb-api";
import { OgElementBuilder } from "./og-element-builder";
import { TemplateMessageBuilder } from "./template-message-builder";

/**
 * Helps to create a Open Graph Template message.
 * (see https://developers.facebook.com/docs/messenger-platform/open-graph-template)
 */
export class OgTemplateMessageBuilder extends TemplateMessageBuilder<Send.OpenGraphTemplate> {

    constructor() {

        super();

        this.template = {
            template_type: Send.TemplateType.OPEN_GRAPH,
            elements: new Array<Send.OpenGraphElement>()
        };
    }

    /**
     * Sets an Open Graph Element.
     *
     * @param {OgElementBuilder} elementBuilder
     * @returns {this} - for chaining
     */
    public setElement(elementBuilder: OgElementBuilder): this {

        this.template.elements = [elementBuilder.build()];
        return this;
    }
}
