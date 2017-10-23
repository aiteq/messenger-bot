import { OgTemplateMessageBuilder } from "../../src/fb-api-helpers/og-template-message-builder";
import { OgElementBuilder } from "../../src/fb-api-helpers/og-element-builder";

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";

describe("OgTemplateMessageBuilder", () => {

    let builder: OgTemplateMessageBuilder;

    test("constructor()", () => {
        expect(builder = new OgTemplateMessageBuilder()).toBeInstanceOf(OgTemplateMessageBuilder);
    });

    test("setElement(element)", () => {
        expect(builder.setElement(
            new OgElementBuilder("https://www.aiteq.com")
            .addUrlButton("title", "https://www.aiteq.com"))
        ).toBe(builder);
    });

    test("build()", () => {
        //console.log(JSON.stringify(builder.build(), null, 2));
        expect(builder.build()).toMatchObject({
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "open_graph",
                    "elements": [{
                        "url": "https://www.aiteq.com",
                        "buttons": [{
                            "type": "web_url",
                            "title": "title",
                            "url": "https://www.aiteq.com"
                        }]
                    }]
                }
            }
        });
    });
});
