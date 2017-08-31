import { OgTemplateMessageBuilder } from "../../src/fb-api-helpers/og-template-message-builder";

describe("OgTemplateMessageBuilder", () => {

    let b: OgTemplateMessageBuilder;

    test("constructor()", () => {
        expect(b = new OgTemplateMessageBuilder()).toBeInstanceOf(OgTemplateMessageBuilder);
    });
});
