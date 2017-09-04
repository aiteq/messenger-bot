import { TextMessageBuilder } from "../../src/fb-api-helpers/text-message-builder";

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";

describe("TextMessageBuilder", () => {

    let builder: TextMessageBuilder;

    test("constructor(text)", () => {
        expect(builder = new TextMessageBuilder("text")).toBeInstanceOf(TextMessageBuilder);
    });

    test("addLocationQuickReply()", () => {
        expect(builder.addLocationQuickReply()).toBe(builder);
    });

    test("addQuickReply()", () => {
        expect(builder.addQuickReply("title", "id", "data", URL_IMAGE)).toBe(builder);
    });

    test("build()", () => {
        //console.log(JSON.stringify(builder.build(), null, 2));
        expect(builder.build()).toMatchObject({
            "text": "text",
            "quick_replies": [
                {
                    "content_type": "location"
                },
                {
                    "content_type": "text",
                    "title": "title",
                    "payload": "{\"id\":\"id\",\"data\":\"data\"}",
                    "image_url": "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png"
                }
            ]
        });
    });
});
