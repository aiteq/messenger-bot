import { OgElementBuilder } from "../../src/fb-api-helpers/og-element-builder";
import { OgTemplateMessageBuilder } from "../../src/fb-api-helpers/og-template-message-builder";

describe("OgElementBuilder", () => {

    let builder: OgElementBuilder;

    test("constructor(url)", () => {
        expect(builder = new OgElementBuilder("http://www.aiteq.com")).toBeInstanceOf(OgElementBuilder);
    });

    test("addButton(button)", () => {
        const btn = OgTemplateMessageBuilder.createUrlButton("title", "https://www.aiteq.com");

        for (let i = 0; i < 3; i++) {
            expect(builder.addButton(btn)).toBe(builder);
        }
        expect(() => builder.addButton(btn)).toThrow("couldn't add next Button to Open Graph Element (only 3 buttons is allowed)");

        builder = new OgElementBuilder("http://www.aiteq.com").addButton(btn);
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
