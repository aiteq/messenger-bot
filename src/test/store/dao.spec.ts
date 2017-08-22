import * as assert from "assert";
import * as fs from "fs";
import { Dao } from "../../store/dao";

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

    before(function () {
        try { fs.unlinkSync(FILE); } catch (error) { }
    });

    after(function () {
        try { fs.unlinkSync(FILE); } catch (error) { }
    });

    describe("for entity with implicit id property 'id'", () => {

        it("constructor(path) creates an instance", () => {
            assert.doesNotThrow(() => dao = new Dao<TestEntityId>("test1"), "throws error");
        });

        describe("save", () => {
            it("save(new-entity) saves the entity", async () => {
                await dao.save({ id: A, b: B });
                let ea: TestEntityId[] = JSON.parse(fs.readFileSync(FILE, ENCODING)).test1;
                assert.notEqual(ea, undefined, "no entity saved");
                assert.strictEqual(ea.length, 1, "wrong number of entities saved");
                assert.strictEqual(ea[0].id, A, "wrong id property saved");
                assert.strictEqual(ea[0].b, B, "wrong b property saved");
            });

            it("save(existing-entity) updates the entity", async () => {
                await dao.save({ id: A, b: BAlt });
                let ea: TestEntityId[] = JSON.parse(fs.readFileSync(FILE, ENCODING)).test1;
                assert.notEqual(ea, undefined, "no entity saved");
                assert.strictEqual(ea.length, 1, "wrong number of entities saved");
                assert.strictEqual(ea[0].id, A, "wrong id property saved");
                assert.strictEqual(ea[0].b, BAlt, "wrong b property saved");
            });
        });

        describe("get", () => {
            it("get(unknown-id) returns undefined", () => {
                let r = dao.get(A + B);
                assert.strictEqual(r, undefined, "doesn't return undefined");
            });

            it("get(existing-id) returns the saved entity", () => {
                let e: TestEntityId = <TestEntityId>dao.get(A);
                assert.notEqual(e, undefined, "no entity read");
                assert.strictEqual(e.id, A, "wrong id property read");
                assert.strictEqual(e.b, BAlt, "wrong b property read");
            });
        });
    });

    describe("for entity with explicit id property", () => {

        it("constructor(path, idProperty) creates an instance", () => {
            assert.doesNotThrow(() => dao = new Dao<TestEntityAltId>("test2", "a"), "throws error");
        });

        describe("save", () => {
            it("save(new-entity) saves the entity", async () => {
                await dao.save({ a: A, b: B });
                let ea: TestEntityAltId[] = JSON.parse(fs.readFileSync(FILE, ENCODING)).test2;
                assert.notEqual(ea, undefined, "no entity saved");
                assert.strictEqual(ea.length, 1, "wrong number of entities saved");
                assert.strictEqual(ea[0].a, A, "wrong a property saved");
                assert.strictEqual(ea[0].b, B, "wrong b property saved");
            });

            it("save(existing-entity) updates the entity", async () => {
                await dao.save({ a: A, b: BAlt });
                let ea: TestEntityAltId[] = JSON.parse(fs.readFileSync(FILE, ENCODING)).test2;
                assert.notEqual(ea, undefined, "no entity saved");
                assert.strictEqual(ea.length, 1, "wrong number of entities saved");
                assert.strictEqual(ea[0].a, A, "wrong a property saved");
                assert.strictEqual(ea[0].b, BAlt, "wrong b property saved");
            });
        });

        describe("get", () => {
            it("get(unknown-id) returns undefined", () => {
                let r = dao.get(A + B);
                assert.strictEqual(r, undefined, "doesn't return undefined");
            });

            it("get(existing-id) returns the saved entity", () => {
                let e: TestEntityAltId = <TestEntityAltId>dao.get(A);
                assert.notEqual(e, undefined, "no entity read");
                assert.strictEqual(e.a, A, "wrong id property read");
                assert.strictEqual(e.b, BAlt, "wrong b property read");
            });
        });
    });

    describe("invalid calling", () => {
        it("constructor(undefined) throws error", () => {
            assert.throws(() => new Dao<TestEntityId>(undefined), /path not specified/);
        });

        it("constructor(null) throws error", () => {
            assert.throws(() => new Dao<TestEntityId>(null), /path not specified/);
        });

        it("constructor(undefined, undefined) throws error", () => {
            assert.throws(() => new Dao<TestEntityId>(undefined, undefined), /path not specified/);
        });

        it("constructor(undefined, null) throws error", () => {
            assert.throws(() => new Dao<TestEntityId>(undefined, null), /path not specified/);
        });

        it("constructor(null, null) throws error", () => {
            assert.throws(() => new Dao<TestEntityId>(null, null), /path not specified/);
        });

        it("constructor(null, undefined) throws error", () => {
            assert.throws(() => new Dao<TestEntityId>(null, undefined), /path not specified/);
        });

        it("save(undefined) rejects", async () => {
            try {
                await dao.save(undefined);
                assert.fail("not rejected");
            } catch (error) {
                assert.strictEqual(error, "couldn't save undefined or entity without a property", "throws wrong error");
            }
        });

        it("save(null) rejects", async () => {
            try {
                await dao.save(undefined);
                assert.fail("not rejected");
            } catch (error) {
                assert.strictEqual(error, "couldn't save undefined or entity without a property", "throws wrong error");
            }
        });

        it("get(undefined) returns undefined", () => {
            assert.strictEqual(dao.get(undefined), undefined, "get(undefined) doesn't return undefined");
        });

        it("get(null) returns undefined", () => {
            assert.strictEqual(dao.get(null), undefined, "get(null) doesn't return undefined");
        });
    });
});