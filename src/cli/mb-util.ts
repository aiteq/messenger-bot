import * as minimist from "minimist";
import * as fs from "fs";
import { BotUtils } from "../utils/bot-utils";
import { logger } from "../logger";
import { cliout } from "./cli-logger";
import { Group } from "./group";
import * as groups from "./groups/";


/**
 * The entrypoint of the mbutil CLI.
 */
export class MBUtil {

    private static groups: Map<string, Group> = new Map<string, Group>();

    private botUtils: BotUtils;


    constructor() {
        Object.keys(groups).forEach((key) => new groups[key]());
    }

    public async bootstrap(): Promise<void> {

        let options: any = minimist(process.argv.slice(2));

        logger.level = options.logLevel || "OFF";

        let [group, command] = options._;

        let groupHandler: Group = MBUtil.groups.get(group);

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

    private static exitWithUsage(): void {
        console.log("Usage: mbutil <group> [command] [options]");
        console.log("Groups: ", Array.from(MBUtil.groups.keys()).join(", "));
        console.log("\nType 'mbutil <group> --help' to display usage for the group\n")
        process.exit(0);
    }

    public static getGlobalOptions(): string {
        return `Global options:
    --config <path> - config json file
    --accessToken <token> - Page Access Token (overrides config file)
    --logLevel <level> - set log level for package @aiteq/messenger-bot (default: OFF)
    --help - display usage for the group

`;
    }

    public static registerGroup(group: Group): void {

        MBUtil.groups.set(group.getName(), group);
    }
}