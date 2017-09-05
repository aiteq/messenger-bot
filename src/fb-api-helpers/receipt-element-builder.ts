import { Send } from "../fb-api";
import { Builder } from "./builder";

/**
 * Helps to create a Receipt Element.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/receipt-template)
 */
export class ReceiptElementBuilder extends Builder<Send.ReceiptElement> {

    private element: Send.ReceiptElement;

    /**
     * Creates an instance of ReceiptBuilder.
     *
     * @param {string} title
     */
    constructor(title: string, price: number) {

        super();

        this.element = { title, price };
    }

    /**
     * Sets a text for Receipt Element's subtitle.
     *
     * @param {string} subtitle
     * @returns {this} - for chaining
     */
    public setSubtitle(subtitle: string): this {
        this.element.subtitle = subtitle;
        return this;
    }

    /**
     * Sets a number of quantity.
     *
     * @param {number} quantity
     * @returns {this} - for chaining
     */
    public setQuantity(quantity: number): this {
        this.element.quantity = quantity;
        return this;
    }

    /**
     * Sets receipt's currency.
     *
     * @param {string} currency
     * @returns {this} - for chaining
     */
    public setCurrency(currency: string): this {
        this.element.currency = currency;
        return this;
    }

    /**
     * Sets Recipient Element's image.
     *
     * @param {string} imageUrl
     * @returns {this} - for chaining
     */
    public setImageUrl(imageUrl: string): this {
        this.element.image_url = imageUrl;
        return this;
    }

    /**
     * Returns built Receipt Element object.
     *
     * @returns {Send.ReceiptElement}
     */
    public build(): Send.ReceiptElement {
        return this.element;
    }
}
