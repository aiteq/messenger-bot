import { Reusable } from "./reusable";
import { Dao } from "./dao";

export class ReusableDao extends Dao {

    public get(url: string): Reusable {
        return this.db.get("reusables").find({ url: url }).value<Reusable>();
    }

    public async save(reusable: Reusable): Promise<void> {
        return this.db.get("reusables").push(reusable).write();
    }
}