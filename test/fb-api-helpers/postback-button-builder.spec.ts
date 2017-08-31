import { PostbackButtonBuilder } from "../../src/fb-api-helpers/postback-button-builder";

describe("PostbackButtonBuilder", () => {

    let b: PostbackButtonBuilder;

    test("constructor(title, id, data)", () => {
        expect(b = new PostbackButtonBuilder("title", "id", "data")).toBeInstanceOf(PostbackButtonBuilder);
    });
});
