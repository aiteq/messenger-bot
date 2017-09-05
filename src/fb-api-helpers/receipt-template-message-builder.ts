import { Send } from "../fb-api";
import { ReceiptElementBuilder } from "./receipt-element-builder";
import { TemplateMessageBuilder } from "./template-message-builder";

/**
 * Helps to create a Open Graph Template message.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/receipt-template)
 */
export class ReceiptTemplateMessageBuilder extends TemplateMessageBuilder<Send.ReceiptTemplate> {

    /**
     * Creates an instance of ReceiptTemplateMessageBuilder.
     *
     * @param {string} recipientName
     * @param {string} orderNumber
     * @param {string} currency
     * @param {string} paymentMethod
     * @param {number} totalCost
     */
    constructor(recipientName: string, orderNumber: string, currency: string, paymentMethod: string, totalCost: number) {

        super();

        this.template = {
            template_type: Send.TemplateType.RECEIPT,
            recipient_name: recipientName,
            order_number: orderNumber,
            currency,
            payment_method: paymentMethod,
            summary: { total_cost: totalCost }
        };
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
     * Sets a name of the the merchant.
     *
     * @param {string} merchantName
     * @returns {this} - for chaining
     */
    public setMerchantName(merchantName: string): this {
        this.template.merchant_name = merchantName;
        return this;
    }

    /**
     * Sets the timestamp.
     *
     * @param {string} timestamp
     * @returns {this} - for chaining
     */
    public setTimestamp(timestamp: string): this {
        this.template.timestamp = timestamp;
        return this;
    }

    /**
     * Sets a URL of the order.
     *
     * @param {string} orderUrl
     * @returns {this} - for chaining
     */
    public setOrderUrl(orderUrl: string): this {
        this.template.order_url = orderUrl;
        return this;
    }

    /**
     * Adds a Receipt Element representing items of the order. Max number of elements is limited to 100.
     *
     * @param {ReceiptElementBuilder} elementBuilder
     * @returns {this} - for chaining
     */
    public addElement(elementBuilder: ReceiptElementBuilder): this {

        this.template.elements = this.template.elements || new Array<Send.ReceiptElement>();

        if (this.template.elements.length === 100) {
            throw new Error("couldn't add next Receipt Element to Receipt Tepmplate message (only 100 elements is allowed)");
        }

        this.template.elements.push(elementBuilder.build());
        return this;
    }

    /**
     * Sets an address.
     *
     * @param {Send.Address} address
     * @returns {this} - for chaining
     */
    public setAddress(address: Send.Address): this {
        this.template.address = address;
        return this;
    }

    /**
     * Sets receipt's subtotal.
     *
     * @param {number} subtotal
     * @returns {this} - for chaining
     */
    public setSubtotal(subtotal: number): this {
        this.template.summary.subtotal = subtotal;
        return this;
    }

    /**
     * Sets order's shipping cost.
     *
     * @param {number} shippingCost
     * @returns {this} - for chaining
     */
    public setShippingCost(shippingCost: number): this {
        this.template.summary.shipping_cost = shippingCost;
        return this;
    }

    /**
     * Sets receipt's total tax.
     *
     * @param {number} totalTax
     * @returns {this} - for chaining
     */
    public setTotalTax(totalTax: number): this {
        this.template.summary.total_tax = totalTax;
        return this;
    }

    /**
     * Sets payment adjustements.
     *
     * @param {Send.PaymentAdjustments} adjustments
     * @returns {this} - for chaining
     */
    public setPaymentAdjustments(adjustments: Send.PaymentAdjustments): this {
        this.template.adjustments = adjustments;
        return this;
    }
}
