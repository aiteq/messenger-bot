import { Reusable } from "./reusable";
import { Dao } from "./dao";

export class ReusableDao extends Dao<Reusable> {

    constructor() {
        super("reusables", "url");
    }
}