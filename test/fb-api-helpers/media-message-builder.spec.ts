import { MediaMessageBuilder } from "../../src/fb-api-helpers/media-message-builder";

describe("MediaMessageBuilder", () => {

    let b: MediaMessageBuilder;

    test("constructor()", () => {
        expect(b = new MediaMessageBuilder()).toBeInstanceOf(MediaMessageBuilder);
    });
});
