import { GenericTemplateMessageBuilder } from "../../src/fb-api-helpers/generic-template-message-builder";

describe("GenericTemplateMessageBuilder", () => {

    let b: GenericTemplateMessageBuilder;

    test("constructor()", () => {
        expect(b = new GenericTemplateMessageBuilder()).toBeInstanceOf(GenericTemplateMessageBuilder);
    });
});
