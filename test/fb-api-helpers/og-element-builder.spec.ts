import { OgElementBuilder } from "../../src/fb-api-helpers/og-element-builder";

describe("OgElementBuilder", () => {

    let b: OgElementBuilder;

    test("constructor(valid-url)", () => {
        expect(b = new OgElementBuilder("http://www.aiteq.com")).toBeInstanceOf(OgElementBuilder);
    });
});
