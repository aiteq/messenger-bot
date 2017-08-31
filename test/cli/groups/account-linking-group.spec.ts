import { AccountLinkingGroup } from "../../../src/cli/groups/account-linking-group";

describe("AccountLinkingGroup", () => {

    let g: AccountLinkingGroup;

    test("constructor()", () => {
        expect(g = new AccountLinkingGroup()).toBeInstanceOf(AccountLinkingGroup);
    });
});
