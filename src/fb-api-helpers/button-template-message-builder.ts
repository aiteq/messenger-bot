import { Send } from "../fb-api";
import { Builder } from "./builder";
import { TemplateMessageBuilder } from "./template-message-builder";

/**
 * Helps to create a Button Template message.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/button-template)
 *
 * Example of use:
 * <code>
 *    new ButtonTemplateMessageBuilder("What do you want to do next?")
 *        .addButton(ButtonTemplateMessageBuilder.createUrlButton("Show Website", http://www.aiteq.com"));
 * </code>
 */
export class ButtonTemplateMessageBuilder extends TemplateMessageBuilder<Send.ButtonTemplate> {

    /**
     * Creates a new ButtonTemplateMessageBuilder instance.
     *
     * @param {string} text - text of the message
     */
    constructor(text: string) {

        super();

        this.template = {
            template_type: Send.TemplateType.BUTTON,
            text,
            buttons: new Array<Send.Button>()
        };
    }

    /**
     * Adds a Button. Number of Buttons must be 1-3.
     *
     * @param {Builder<T>} buttonBuilder
     * @returns {this} - for chaining
     */
    public addButton<T extends Send.Button>(buttonBuilder: Builder<T>): this {

        if (this.template.buttons.length === 3) {
            throw new Error("couldn't add next Button to Button Tepmlate message (only 1-3 buttons is allowed)");
        }

        this.template.buttons.push(buttonBuilder.build());

        return this;
    }
}
