import { Send } from "../fb-api";
import { ButtonHoldingBuilder } from "./button-holding-builder";

/**
 * Helps to create an Open Graph Element.
 */
export class OgElementBuilder extends ButtonHoldingBuilder<Send.OpenGraphElement> {

    private element: Send.OpenGraphElement;

    /**
     * Creates an instance of ElementBuilder.
     *
     * @param {string} url
     */
    constructor(url: string) {

        super();

        this.element = { url };
    }

    /**
     * Returns built Open Graph Element object.
     *
     * @returns {Send.OpenGraphElement}
     */
    public build(): Send.OpenGraphElement {
        return this.element;
    }

    /**
     * Adds a Button.
     *
     * @param {Send.Button} button
     */
    protected addButton(button: Send.Button): void {

        this.element.buttons = this.element.buttons || new Array<Send.Button>();

        if (this.element.buttons.length === 3) {
            throw new Error("couldn't add next Button to Open Graph Element (only 3 buttons is allowed)");
        }

        this.element.buttons.push(button);
    }
}
