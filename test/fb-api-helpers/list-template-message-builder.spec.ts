import { ElementBuilder } from "../../src/fb-api-helpers/element-builder";
import { ListTemplateMessageBuilder } from "../../src/fb-api-helpers/list-template-message-builder";
import * as Send from "../../src/fb-api/send";

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";

describe("ListTemplateMessageBuilder", () => {

    let builder: ListTemplateMessageBuilder;

    const eb: ElementBuilder = ListTemplateMessageBuilder.createElement("title")
        .addButton(ListTemplateMessageBuilder.createUrlButton("title", "https://www.aiteq.com"))
        .setDefaultAction(ListTemplateMessageBuilder.createDefaultAction("https://www.aiteq.com"))
        .setImageUrl(URL_IMAGE)
        .setSubtitle("subtitle");

    test("constructor()", () => {
        expect(builder = new ListTemplateMessageBuilder()).toBeInstanceOf(ListTemplateMessageBuilder);
    });

    test("addElement(element)", () => {
        for (let i = 0; i < 4; i++) {
            expect(builder.addElement(eb)).toBe(builder);
        }
        expect(() => builder.addElement(eb)).toThrow("couldn't add next Element to List Tepmplate message (only 2-4 elements is allowed)");

        builder = new ListTemplateMessageBuilder().addElement(eb);
    });

    test("setButton(button)", () => {
        expect(builder.setButton(ListTemplateMessageBuilder.createPostbackButton("title", "id", "data"))).toBe(builder);
    });

    test("setTopElementStyle(style)", () => {
        expect(builder.setTopElementStyle(Send.ListTopElementStyle.COMPACT)).toBe(builder);
    });

    test("build()", () => {
        expect(builder.build()).toMatchObject({
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "list",
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
                        "image_url": "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png",
                        "subtitle": "subtitle"
                    }],
                    "buttons": [{
                        "type": "postback",
                        "title": "title",
                        "payload": "{\"src\":\"postback-button\",\"id\":\"id\",\"data\":\"data\"}"
                    }],
                    "top_element_style": "compact"
                }
            }
        });
    });
});
