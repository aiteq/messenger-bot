import { ListTemplateMessageBuilder } from "../../src/fb-api-helpers/list-template-message-builder";

describe("ListTemplateMessageBuilder", () => {

    let b: ListTemplateMessageBuilder;

    test("constructor()", () => {
        expect(b = new ListTemplateMessageBuilder()).toBeInstanceOf(ListTemplateMessageBuilder);
    });
});
