import { ElementBuilder } from "../../src/fb-api-helpers/element-builder";

describe("ElementBuilder", () => {

    let b: ElementBuilder;

    test("constructor(title)", () => {
        expect(b = new ElementBuilder("title")).toBeInstanceOf(ElementBuilder);
    });
});
