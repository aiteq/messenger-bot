import { CallButtonBuilder } from "../../src/fb-api-helpers/call-button-builder";

describe("CallButtonBuilder", () => {

    let b: CallButtonBuilder;

    test("constructor(title, payload)", () => {
        expect(b = new CallButtonBuilder("Title", "payload")).toBeInstanceOf(CallButtonBuilder);
    });
});
