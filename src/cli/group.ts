import { BotUtils } from "../utils/bot-utils";
import { MBUtil } from "./mb-util";

/**
 * A parent class of <i>group plugins</i> for mbutil CLI.
 */
export abstract class Group {

    /**
     * Creates an instance of [[Group]]. The implementator must specify the name.
     * @param {string} name - a name of the group
     */
    constructor(protected name: string) {
    }

    /**
     * Returns the name of this <i>group</i>.
     *
     * @returns {string}
     */
    public getName(): string {
        return this.name;
    }

    public abstract execute(command: string, botUtils: BotUtils, options: any): Promise<string>;

    public usage(): Promise<string> {
        return Promise.reject(this.getUsage());
    }

    protected abstract getUsage(): string;

}
