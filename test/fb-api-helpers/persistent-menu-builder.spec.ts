import { PersistentMenuBuilder } from "../../src/fb-api-helpers/persistent-menu-builder";

describe("PersistentMenuBuilder", () => {

    let b: PersistentMenuBuilder;

    test("constructor()", () => {
        expect(b = new PersistentMenuBuilder()).toBeInstanceOf(PersistentMenuBuilder);
    });
});
