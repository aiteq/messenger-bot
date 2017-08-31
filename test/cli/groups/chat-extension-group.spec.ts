import { ChatExtensionGroup } from "../../../src/cli/groups/chat-extension-group";

describe("ChatExtensionGroup", () => {

    let g: ChatExtensionGroup;

    test("constructor()", () => {
        expect(g = new ChatExtensionGroup()).toBeInstanceOf(ChatExtensionGroup);
    });
});
