import { GenericTemplateMessageBuilder } from "../../src/fb-api-helpers/generic-template-message-builder";
import { ShareButtonBuilder } from "../../src/fb-api-helpers/share-button-builder";

describe("ShareButtonBuilder", () => {

    let builder: ShareButtonBuilder;

    test("constructor()", () => {
        expect(builder = new ShareButtonBuilder()).toBeInstanceOf(ShareButtonBuilder);
    });

    test("setGenericTemplate(builder)", () => {
        expect(builder.setGenericTemplate(new GenericTemplateMessageBuilder())).toBe(builder);
    });

    test("build()", () => {
        //console.log(JSON.stringify(builder.build(), null, 2));
        expect(builder.build()).toMatchObject({
            "type": "element_share",
            "share_contents": {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": []
                    }
                }
            }
        });
    });
});
