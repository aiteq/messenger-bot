import { MBUtil } from "../../src/cli/mb-util";

describe("MBUtil", () => {

    let mbu: MBUtil;

    test("constructor()", () => {
        expect(mbu = new MBUtil()).toBeInstanceOf(MBUtil);
    });
});
