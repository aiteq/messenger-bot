import { PersistentMenuGroup } from "../../../src/cli/groups/persistent-menu-group";

describe("PersistentMenuGroup", () => {

    let g: PersistentMenuGroup;

    test("constructor()", () => {
        expect(g = new PersistentMenuGroup()).toBeInstanceOf(PersistentMenuGroup);
    });
});
