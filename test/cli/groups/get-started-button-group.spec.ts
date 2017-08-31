import { GetStartedButtonGroup } from "../../../src/cli/groups/get-started-button-group";

describe("GetStartedButtonGroup", () => {

    let g: GetStartedButtonGroup;

    test("constructor()", () => {
        expect(g = new GetStartedButtonGroup()).toBeInstanceOf(GetStartedButtonGroup);
    });
});
