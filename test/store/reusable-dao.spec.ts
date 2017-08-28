import * as fs from "fs";
import { ReusableDao } from "../../src/store/reusable-dao";

const FILE: string = "./bot-db.json";

describe("ReusableDao", () => {

    beforeAll(function () {
        try { fs.unlinkSync(FILE); } catch (error) { }
    });

    afterAll(function () {
        try { fs.unlinkSync(FILE); } catch (error) { }
    });

    test("constructor()", () => {
        expect(new ReusableDao()).toBeInstanceOf(ReusableDao);
    });
});