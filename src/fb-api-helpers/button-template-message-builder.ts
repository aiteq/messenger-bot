import { Send, Webview } from "../fb-api";
import { ChatExtension } from "../server/chat-extension";
import { Builder } from "./builder";
import { ButtonHoldingTemplateMessageBuilder } from "./button-holding-template-message-builder";
import { GenericTemplateMessageBuilder } from "./generic-template-message-builder";

/**
 * Helps to create a Button Template message.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/button-template)
 */
export class ButtonTemplateMessageBuilder extends ButtonHoldingTemplateMessageBuilder<Send.ButtonTemplate> {

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
     * @param {Send.Button} button
     * @returns {this} - for chaining
     */
    protected addButton(button: Send.Button): void {

        if (this.template.buttons.length === 3) {
            throw new Error("couldn't add next Button to Button Tepmlate message (only 1-3 buttons is allowed)");
        }

        this.template.buttons.push(button);
    }
}
