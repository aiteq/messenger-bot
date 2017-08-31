import { DefaultActionBuilder } from "../../src/fb-api-helpers/default-action-builder";

describe("DefaultActionBuilder", () => {

    let b: DefaultActionBuilder;

    test("constructor(valid-url)", () => {
        expect(b = new DefaultActionBuilder("http://www.aiteq.com")).toBeInstanceOf(DefaultActionBuilder);
    });
});
