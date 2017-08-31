import { ButtonTemplateMessageBuilder } from "../../src/fb-api-helpers/button-template-message-builder";

describe("ButtonTemplateMessageBuilder", () => {

    let b: ButtonTemplateMessageBuilder;

    test("constructor(text)", () => {
        expect(b = new ButtonTemplateMessageBuilder("Text")).toBeInstanceOf(ButtonTemplateMessageBuilder);
    });
});
