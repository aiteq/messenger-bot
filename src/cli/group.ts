import { BotUtils } from "../utils/bot-utils";
import { MBUtil } from "./mb-util";

/* tslint:disable no-console */

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

    public abstract execute(command: string, botUtils: BotUtils, options: any): void;

    public exitWithUsage(): void {
        console.log(this.getUsage());
        console.log(MBUtil.getGlobalOptions());
        process.exit(0);
    }

    protected abstract getUsage(): string;

}
