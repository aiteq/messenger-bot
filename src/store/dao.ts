import Lowdb = require("lowdb");

export class Dao<T> {

    private db: Lowdb;
    private table: Lowdb;

    constructor(private path: string, private idProperty: string = "id") {

        if (!path) {
            throw new Error("path not specified");
        }
        
        this.db = new Lowdb("./bot-db.json", {
            storage: require("lowdb/lib/storages/file-async")
        })
        .defaults({
            [path]: []
        });

        this.table = this.db.get(path);
    }

    public get(id: any): T {
        return this.table.find({ [this.idProperty]: id }).value<T>();
    }

    public async save(entity: T): Promise<void> {

        if (!entity || !entity[this.idProperty]) {
            return Promise.reject(`couldn't save undefined or entity without ${this.idProperty} property`);
        }

        let existing: Lowdb = this.table.find({ [this.idProperty]: entity[this.idProperty] });

        if (existing.value()) {

            // update existing
            return existing.assign(entity).write();

        } else {

            // save new
            return this.table.push(entity).write();
        }
    }
}
