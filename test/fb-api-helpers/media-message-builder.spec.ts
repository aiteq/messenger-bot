import { MediaMessageBuilder } from "../../src/fb-api-helpers/media-message-builder";
import { Send } from "../../src/fb-api";

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";

describe("MediaMessageBuilder", () => {

    let builder: MediaMessageBuilder;

    test("constructor()", () => {
        expect(builder = new MediaMessageBuilder(Send.AttachmentType.IMAGE)).toBeInstanceOf(MediaMessageBuilder);
    });

    test("addQuickReply(title, id, data, url)", () => {
        expect(builder.addQuickReply("title", "id", "data", URL_IMAGE)).toBe(builder);
    });

    test("addLocationQuickReply()", () => {
        expect(builder.addLocationQuickReply()).toBe(builder);
    });

    test("setReusable(boolean)", () => {
        expect(builder.setReusable(true)).toBe(builder);
    });

    test("setUrl(url)", () => {
        expect(builder.setUrl(URL_IMAGE)).toBe(builder);
    });

    test("build()", () => {
        //console.log(JSON.stringify(builder.build(), null, 2));
        expect(builder.build()).toMatchObject({
            "attachment": {
                "type": "image",
                "payload": {
                    "is_reusable": true,
                    "url": "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png"
                }
            },
            "quick_replies": [{
                "content_type": "text",
                "title": "title",
                "payload": "{\"id\":\"id\",\"data\":\"data\"}",
                "image_url": "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png"
            }, {
                "content_type": "location"
            }]
        });
    });
});
