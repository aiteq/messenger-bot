import { UrlButtonBuilder } from "../../src/fb-api-helpers/url-button-builder";

describe("UrlButtonBuilder", () => {

    let b: UrlButtonBuilder;

    test("constructor(title, url)", () => {
        expect(b = new UrlButtonBuilder("title", "url")).toBeInstanceOf(UrlButtonBuilder);
    });
});
