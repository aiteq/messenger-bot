import { ReceiptElementBuilder } from "../../src/fb-api-helpers/receipt-element-builder";
import { ReceiptTemplateMessageBuilder } from "../../src/fb-api-helpers/receipt-template-message-builder";

describe("ReceiptTemplateMessageBuilder", () => {

    let builder: ReceiptTemplateMessageBuilder;

    const reb: ReceiptElementBuilder = new ReceiptElementBuilder("title", 20);

    test("constructor(recipientName, orderNumber, currency, paymentMethod, totalCost)", () => {
        expect(builder = new ReceiptTemplateMessageBuilder("name", "order", "CZK", "method", 100)).toBeInstanceOf(ReceiptTemplateMessageBuilder);
    });

    test("addElement(element)", () => {
        for (let i = 0; i < 100; i++) {
            expect(builder.addElement(reb)).toBe(builder);
        }
        expect(() => builder.addElement(reb)).toThrow("couldn't add next Receipt Element to Receipt Tepmplate message (only 100 elements is allowed)");

        builder = new ReceiptTemplateMessageBuilder("name", "order", "CZK", "method", 100).addElement(reb);
    });

    test("setAddress(address)", () => {
        expect(builder.setAddress({
            street_1: "ulice",
            city: "praha",
            postal_code: "12345",
            state: "Cechia",
            country: "Czech Republic",
        })).toBe(builder);
    });

    test("setMerchantName(name)", () => {
        expect(builder.setMerchantName("merchantName")).toBe(builder);
    });

    test("setOrderUrl(url)", () => {
        expect(builder.setOrderUrl("https://www.aiteq.com")).toBe(builder);
    });

    test("setPaymentAdjustments(adjustments)", () => {
        expect(builder.setPaymentAdjustments({name:"name", amount:10})).toBe(builder);
    });

    test("setSherable(boolean)", () => {
        expect(builder.setSherable(true)).toBe(builder);
    });

    test("setShippingCost(cost)", () => {
        expect(builder.setShippingCost(10)).toBe(builder);
    });

    test("setSubtotal(subtotal)", () => {
        expect(builder.setSubtotal(15)).toBe(builder);
    });

    test("setTimestamp(timestamp)", () => {
        expect(builder.setTimestamp("timestamp")).toBe(builder);
    });

    test("setTotalTax(tax)", () => {
        expect(builder.setTotalTax(5)).toBe(builder);
    });

    test("build()", () => {
        //console.log(JSON.stringify(builder.build(), null, 2));
        expect(builder.build()).toMatchObject({
            "attachment": {
              "type": "template",
              "payload": {
                "template_type": "receipt",
                "recipient_name": "name",
                "order_number": "order",
                "currency": "CZK",
                "payment_method": "method",
                "summary": {
                  "total_cost": 100,
                  "shipping_cost": 10,
                  "subtotal": 15,
                  "total_tax": 5
                },
                "elements": [
                  {
                    "title": "title",
                    "price": 20
                  }
                ],
                "address": {
                  "street_1": "ulice",
                  "city": "praha",
                  "postal_code": "12345",
                  "state": "Cechia",
                  "country": "Czech Republic"
                },
                "merchant_name": "merchantName",
                "order_url": "https://www.aiteq.com",
                "adjustments": {
                  "name": "name",
                  "amount": 10
                },
                "sherable": true,
                "timestamp": "timestamp"
              }
            }
          });
    });
});
