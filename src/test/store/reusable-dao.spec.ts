import * as assert from "assert";
import * as fs from "fs";
import { ReusableDao } from "../../store/reusable-dao";
import { Reusable } from "../../store/reusable";

const FILE: string = "./bot-db.json";

describe("ReusableDao", () => {

    before(function () {
        try { fs.unlinkSync(FILE); } catch (error) { }
    });

    after(function () {
        try { fs.unlinkSync(FILE); } catch (error) { }
    });

    describe("constructor", () => {
        it("constructor() creates an instance", () => {
            assert.doesNotThrow(() => new ReusableDao(), "throws error");
        });
    });
});