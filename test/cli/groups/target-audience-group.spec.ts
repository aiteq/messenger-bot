import { TargetAudienceGroup } from "../../../src/cli/groups/target-audience-group";

describe("TargetAudienceGroup", () => {

    let g: TargetAudienceGroup;

    test("constructor()", () => {
        expect(g = new TargetAudienceGroup()).toBeInstanceOf(TargetAudienceGroup);
    });
});
