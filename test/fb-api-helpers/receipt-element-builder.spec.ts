import { ReceiptElementBuilder } from "../../src/fb-api-helpers/receipt-element-builder";

describe("ReceiptElementBuilder", () => {

    let b: ReceiptElementBuilder;

    test("constructor(title, price)", () => {
        expect(b = new ReceiptElementBuilder("title", 10)).toBeInstanceOf(ReceiptElementBuilder);
    });
});
