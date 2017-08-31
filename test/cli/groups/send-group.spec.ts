import { SendGroup } from "../../../src/cli/groups/send-group";

describe("SendGroup", () => {

    let g: SendGroup;

    test("constructor()", () => {
        expect(g = new SendGroup()).toBeInstanceOf(SendGroup);
    });
});
