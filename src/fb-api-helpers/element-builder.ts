import { AbstractBuilder } from "./abstract-builder";
import { Send } from "../fb-api/send";
import { DefaultActionBuilder } from "./default-action-builder";

/**
 * Helps to create an Element.
 */
export class ElementBuilder extends AbstractBuilder<Send.Element> {

    private element: Send.Element;

    /**
     * Creates an instance of ElementBuilder.
     * 
     * @param {string} title 
     */
    constructor(title: string) {

        super();

        this.element = {
            title: title
        }
    }

    /**
     * Sets a text for Element's subtitle.
     * 
     * @param {string} subtitle 
     * @returns {this} - for chaining
     */
    public setSubtitle(subtitle: string): this {
        this.element.subtitle = subtitle;
        return this;
    }

    /**
     * Sets Element's image.
     * 
     * @param {string} imageUrl 
     * @returns {this} - for chaining
     */
    public setImageUrl(imageUrl: string): this {
        this.element.image_url = imageUrl;
        return this;
    }

    /**
     * Set a Default Action for the Element.
     * 
     * @param {DefaultActionBuilder} defaultActionBuilder 
     * @returns {this} - for chaining
     */
    public setDefaultAction(defaultActionBuilder: DefaultActionBuilder): this {
        this.element.default_action = defaultActionBuilder.build();
        return this;
    }

    /**
     * Adds a Button.
     * 
     * @param {AbstractBuilder<T>} buttonBuilder 
     */
    public addButton<T extends Send.Button>(buttonBuilder: AbstractBuilder<T>): void {

        this.element.buttons || (this.element.buttons = new Array<T>());

		this.element.buttons.push(buttonBuilder.build());
    }

    /**
     * Returns built Element object.
     * 
     * @returns {Send.Element} 
     */
    public build(): Send.Element {
        return this.element;
    }
}
