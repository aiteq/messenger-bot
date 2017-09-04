import { ReceiptElementBuilder } from "../../src/fb-api-helpers/receipt-element-builder";

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";

describe("ReceiptElementBuilder", () => {

    let builder: ReceiptElementBuilder;

    test("constructor(title, price)", () => {
        expect(builder = new ReceiptElementBuilder("title", 10)).toBeInstanceOf(ReceiptElementBuilder);
    });

    test("setCurrency(currency)", () => {
        expect(builder.setCurrency("CZK")).toBe(builder);
    });

    test("setImageUrl(url)", () => {
        expect(builder.setImageUrl(URL_IMAGE)).toBe(builder);
    });

    test("setQuantity(quantity)", () => {
        expect(builder.setQuantity(5)).toBe(builder);
    });

    test("setSubtitle(subtitle)", () => {
        expect(builder.setSubtitle("subtitle")).toBe(builder);
    });

    test("build()", () => {
        //console.log(JSON.stringify(builder.build(), null, 2));
        expect(builder.build()).toMatchObject({
            "title": "title",
            "price": 10,
            "currency": "CZK",
            "image_url": "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png",
            "quantity": 5,
            "subtitle": "subtitle"
        });
    });
});
