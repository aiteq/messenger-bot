import * as fs from "fs";
import * as minimist from "minimist";
import { logger } from "../logger";
import { BotUtils } from "../utils/bot-utils";
import { cliout } from "./cli-logger";
import { Group } from "./group";
import * as groups from "./groups/";

/* tslint:disable no-console */

/**
 * The entrypoint of the mbutil CLI.
 */
export class MBUtil {

    public static registerGroup(group: Group): void {

        MBUtil.groups.set(group.getName(), group);
    }

    public static getGlobalOptions(): string {
        return `Global options:
    --config <path> - config json file
    --accessToken <token> - Page Access Token (overrides config file)
    --help - display usage for the group

`;
    }

    private static groups: Map<string, Group> = new Map<string, Group>();

    private static exitWithUsage(): void {
        console.log("Usage: mbutil <group> [command] [options]");
        console.log("Groups: ", Array.from(MBUtil.groups.keys()).join(", "));
        console.log("\nType 'mbutil <group> --help' to display usage for the group\n");
        process.exit(0);
    }

    private botUtils: BotUtils;

    constructor() {
        Object.keys(groups).forEach((key) => new groups[key]());
    }

    public async bootstrap(): Promise<void> {

        const options: any = minimist(process.argv.slice(2));

        logger.level = options.debug ? "ALL" : "OFF";

        const [group, command] = options._;

        const groupHandler: Group = MBUtil.groups.get(group);

        groupHandler || MBUtil.exitWithUsage();

        options.help && groupHandler.exitWithUsage();

        let config: any = {};

        options.config && (config = JSON.parse(fs.readFileSync(options.config, "utf8")));

        options.accessToken && (config.accessToken = options.accessToken);

        if (!config.accessToken) {
            return Promise.reject("no accessToken");
        }

        this.botUtils = new BotUtils(config);

        cliout.info(await groupHandler.execute(command, this.botUtils, options) + "\n");
    }
}
