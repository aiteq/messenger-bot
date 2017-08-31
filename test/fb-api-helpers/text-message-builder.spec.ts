import { TextMessageBuilder } from "../../src/fb-api-helpers/text-message-builder";

describe("TextMessageBuilder", () => {

    let b: TextMessageBuilder;

    test("constructor(text)", () => {
        expect(b = new TextMessageBuilder("text")).toBeInstanceOf(TextMessageBuilder);
    });
});
