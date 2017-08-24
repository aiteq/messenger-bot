import { Dao } from "./dao";
import { Reusable } from "./reusable";

export class ReusableDao extends Dao<Reusable> {

    constructor() {
        super("reusables", "url");
    }
}
