import { AbstractBuilder } from "./abstract-builder";
import { Send } from "../fb-api/send";
import { TemplateMessageBuilder } from "./template-message-builder";


export class ReceiptTemplateMessageBuilder extends TemplateMessageBuilder<Send.ReceiptTemplate> {

	public createMessage(recipientName: string, orderNumber: string, currency: string, paymentMethod: string, totalCost: number): this {
		this.template = {
			template_type: Send.TemplateType.RECEIPT,
			recipient_name: recipientName,
			order_number: orderNumber,
			currency: currency,
			payment_method: paymentMethod,
			summary: { total_cost: totalCost }
		};
		return this;
	}

	public setSherable(sherable: boolean): this {
		this.template.sherable = sherable;
		return this;
	}

	public setMerchantName(merchantName: string): this {
		this.template.merchant_name = merchantName;
		return this;
	}

	public setTimestamp(timestamp: string): this {
		this.template.timestamp = timestamp;
		return this;
	}

	public setOrderUrl(orderUrl: string): this {
		this.template.order_url = orderUrl;
		return this;
	}

	public addElement(element: TemplateMessageBuilder.ReceiptElement): this {
		this.template.elements.push(element.getObject());
		return this;
	}

	public setAddress(address: Send.Address): this {
		this.template.address = address;
		return this;
	}

	public setSubtotal(subtotal: number): this {
		this.template.summary.subtotal = subtotal;
		return this;
	}

	public setShippingCost(shippingCost: number): this {
		this.template.summary.shipping_cost = shippingCost;
		return this;
	}

	public setTotalTax(totalTax: number): this {
		this.template.summary.total_tax = totalTax;
		return this;
	}

	public setPaymentAdjustments(adjustments: Send.PaymentAdjustments): this {
		this.template.adjustments = adjustments;
		return this;
	}
}