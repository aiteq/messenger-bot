import { ShareButtonBuilder } from "../../src/fb-api-helpers/share-button-builder";

describe("ShareButtonBuilder", () => {

    let b: ShareButtonBuilder;

    test("constructor()", () => {
        expect(b = new ShareButtonBuilder()).toBeInstanceOf(ShareButtonBuilder);
    });
});
