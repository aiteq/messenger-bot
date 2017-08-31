import { ReceiptTemplateMessageBuilder } from "../../src/fb-api-helpers/receipt-template-message-builder";

describe("ReceiptTemplateMessageBuilder", () => {

    let b: ReceiptTemplateMessageBuilder;

    test("constructor(recipientName, orderNumber, currency, paymentMethod, totalCost)", () => {
        expect(b = new ReceiptTemplateMessageBuilder("name", "order", "CZK", "method", 100)).toBeInstanceOf(ReceiptTemplateMessageBuilder);
    });
});
