import { DomainsGroup } from "../../../src/cli/groups/domains-group";

describe("DomainsGroup", () => {

    let g: DomainsGroup;

    test("constructor()", () => {
        expect(g = new DomainsGroup()).toBeInstanceOf(DomainsGroup);
    });
});
