import Lowdb = require("lowdb");

export abstract class Dao {

    protected db: Lowdb;

    constructor() {
        this.db = new Lowdb("./bot-db.json", {
            storage: require("lowdb/lib/storages/file-async")
        });
    }
}
