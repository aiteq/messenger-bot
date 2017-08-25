import * as Send from "../fb-api/send";
import { Builder } from "./builder";
import { DefaultActionBuilder } from "./default-action-builder";

/**
 * Helps to create an Open Graph Element.
 */
export class OgElementBuilder extends Builder<Send.OpenGraphElement> {

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
     * Adds a Button.
     *
     * @param {Builder<T>} buttonBuilder
     * @returns {this} - for chaining
     */
    public addButton<T extends Send.Button>(buttonBuilder: Builder<T>): this {

        this.element.buttons || (this.element.buttons = new Array<T>());

        if (this.element.buttons.length === 3) {
            throw new Error("couldn't add next Button to Open Graph Element (only 3 buttons is allowed)");
        }

        this.element.buttons.push(buttonBuilder.build());

        return this;
    }

    /**
     * Returns built Open Graph Element object.
     *
     * @returns {Send.OpenGraphElement}
     */
    public build(): Send.OpenGraphElement {
        return this.element;
    }
}
