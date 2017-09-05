import { GenericTemplateMessageBuilder } from "../../src/fb-api-helpers/generic-template-message-builder";
import { ElementBuilder } from "../../src/fb-api-helpers/element-builder";
import { Send } from "../../src/fb-api";

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";

describe("GenericTemplateMessageBuilder", () => {

    let builder: GenericTemplateMessageBuilder;

    const eb: ElementBuilder = GenericTemplateMessageBuilder.createElement("title")
        .addButton(GenericTemplateMessageBuilder.createUrlButton("title", "https://www.aiteq.com"))
        .setDefaultAction(GenericTemplateMessageBuilder.createDefaultAction("https://www.aiteq.com"))
        .setImageUrl(URL_IMAGE)
        .setSubtitle("subtitle");

    test("constructor()", () => {
        expect(builder = new GenericTemplateMessageBuilder()).toBeInstanceOf(GenericTemplateMessageBuilder);
    });

    test("addElement(element)", () => {
        for (let i = 0; i < 10; i++) {
            expect(builder.addElement(eb)).toBe(builder);
        }
        expect(() => builder.addElement(eb)).toThrow("couldn't add next Element to Generic Tepmplate message (only 10 elements is allowed)");

        builder = new GenericTemplateMessageBuilder().addElement(eb);
    });

    test("setImageAspectRatio(ratio)", () => {
        expect(builder.setImageAspectRatio(Send.ImageAspectRatio.HORIZONTAL)).toBe(builder);
    });

    test("setSherable(boolean)", () => {
        expect(builder.setSherable(true)).toBe(builder);
    });

    test("build()", () => {
        //console.log(JSON.stringify(builder.build(), null, 2));
        expect(builder.build()).toMatchObject({
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "title",
                        "buttons": [{
                            "type": "web_url",
                            "title": "title",
                            "url": "https://www.aiteq.com"
                        }],
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.aiteq.com"
                        },
                        "image_url": URL_IMAGE,
                        "subtitle": "subtitle"
                    }],
                    "image_aspect_ratio": "horizontal",
                    "sherable": true
                }
            }
        });
    });
});
