import * as fs from "fs";
import { Dao } from "../../src/store/dao";

const FILE: string = "./bot-db.json";
const ENCODING: string = "utf8";
const A: string = "aaa";
const B: string = "bbb";
const BAlt: string = "ccc";

class TestEntityAltId {
    a: string;
    b: string;
}

class TestEntityId {
    id: string;
    b: string;
}

describe("Dao", () => {

    let dao: Dao<TestEntityId | TestEntityAltId>;

    function clean() {
        try { fs.unlinkSync(FILE); } catch (error) { }
    }

    beforeEach(function () {
        clean();
    });

    afterAll(function () {
        clean();
    });

    describe("for entity with implicit id property 'id'", () => {

        test("constructor(path)", () => {
            expect(dao = new Dao<TestEntityId>("test1")).toBeInstanceOf(Dao);
        });

        describe("save", () => {

            test("save(new-entity)", async () => {
                let e = { id: A, b: B };
                await expect(dao.save(e)).resolves.toBe(e);
                expect(JSON.parse(fs.readFileSync(FILE, ENCODING)).test1).toMatchObject([e]);
            });

            test("save(existing-entity)", async () => {
                let e = { id: A, b: BAlt };
                await expect(dao.save(e)).resolves.toMatchObject(e);
                expect(JSON.parse(fs.readFileSync(FILE, ENCODING)).test1).toMatchObject([e]);
            });
        });

        describe("get", () => {

            test("get(unknown-id)", () => {
                expect(dao.get(A + B)).toBeUndefined();
            });

            test("get(existing-id)", () => {
                let e: TestEntityId = <TestEntityId>dao.get(A);
                expect(e).toHaveProperty("id", A);
                expect(e).toHaveProperty("b", BAlt);
            });
        });
    });

    describe("for entity with explicit id property", () => {

        test("constructor(path, idProperty)", () => {
            expect(dao = new Dao<TestEntityAltId>("test2", "a")).toBeInstanceOf(Dao);
        });

        describe("save", () => {

            test("save(new-entity)", async () => {
                let e = { a: A, b: B };
                await expect(dao.save(e)).resolves.toBe(e);
                expect(JSON.parse(fs.readFileSync(FILE, ENCODING)).test2).toMatchObject([e]);
            });

            test("save(existing-entity)", async () => {
                let e = { a: A, b: BAlt };
                await expect(dao.save(e)).resolves.toMatchObject(e);
                expect(JSON.parse(fs.readFileSync(FILE, ENCODING)).test2).toMatchObject([e]);
            });
        });

        describe("get", () => {

            test("get(unknown-id)", () => {
                expect(dao.get(A + B)).toBeUndefined();
            });

            test("get(existing-id)", () => {
                let e: TestEntityAltId = <TestEntityAltId>dao.get(A);
                expect(e).toHaveProperty("a", A);
                expect(e).toHaveProperty("b", BAlt);
            });
        });
    });

    describe("invalid calling", () => {

        test("constructor(undefined)", () => {
            expect(() => new Dao<{}>(undefined)).toThrowError("path not specified");
        });

        test("constructor(null)", () => {
            expect(() => new Dao<{}>(null)).toThrow("path not specified");
        });

        test("constructor(undefined, undefined)", () => {
            expect(() => new Dao<{}>(undefined, undefined)).toThrow("path not specified");
        });

        test("constructor(undefined, null)", () => {
            expect(() => new Dao<{}>(undefined, null)).toThrow("path not specified");
        });

        test("constructor(null, null)", () => {
            expect(() => new Dao<{}>(null, null)).toThrow("path not specified");
        });

        test("constructor(null, undefined)", () => {
            expect(() => new Dao<{}>(null, undefined)).toThrow("path not specified");
        });

        test("save(undefined)", async () => {
            await expect(dao.save(undefined)).rejects.toBe("couldn't save undefined or entity without a property");
        });

        test("save(null)", async () => {
            await expect(dao.save(null)).rejects.toBe("couldn't save undefined or entity without a property");
        });

        test("get(undefined)", () => {
            expect(dao.get(undefined)).toBeUndefined();
        });

        test("get(null) returns undefined", () => {
            expect(dao.get(null)).toBeUndefined();
        });
    });
});