import { GreetingGroup } from "../../../src/cli/groups/greeting-group";

describe("GreetingGroup", () => {

    let g: GreetingGroup;

    test("constructor()", () => {
        expect(g = new GreetingGroup()).toBeInstanceOf(GreetingGroup);
    });
});
