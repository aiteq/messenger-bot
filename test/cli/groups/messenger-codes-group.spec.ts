import { MessengerCodeGroup } from "../../../src/cli/groups/messenger-codes-group";

describe("MessengerCodeGroup", () => {

    let g: MessengerCodeGroup;

    test("constructor()", () => {
        expect(g = new MessengerCodeGroup()).toBeInstanceOf(MessengerCodeGroup);
    });
});
