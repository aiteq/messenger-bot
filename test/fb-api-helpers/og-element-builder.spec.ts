import { OgElementBuilder } from "../../src/fb-api-helpers/og-element-builder";
import { OgTemplateMessageBuilder } from "../../src/fb-api-helpers/og-template-message-builder";

describe("OgElementBuilder", () => {

    let builder: OgElementBuilder;

    test("constructor(url)", () => {
        expect(builder = new OgElementBuilder("http://www.aiteq.com")).toBeInstanceOf(OgElementBuilder);
    });

    test("addButton(button)", () => {

        for (let i = 0; i < 3; i++) {
            expect(builder.addUrlButton("title", "https://www.aiteq.com")).toBe(builder);
        }
        expect(() => builder.addUrlButton("title", "https://www.aiteq.com")).toThrow("couldn't add next Button to Open Graph Element (only 3 buttons is allowed)");

        builder = new OgElementBuilder("http://www.aiteq.com").addUrlButton("title", "https://www.aiteq.com");
    });

    test("build()", () => {
        //console.log(JSON.stringify(builder.build(), null, 2));
        expect(builder.build()).toMatchObject({
            "url": "http://www.aiteq.com",
            "buttons": [
                {
                    "type": "web_url",
                    "title": "title",
                    "url": "https://www.aiteq.com"
                }
            ]
        });
    });
});
