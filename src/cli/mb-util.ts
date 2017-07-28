import * as inquirer from "inquirer";
import * as minimist from "minimist";
import { Inquirer } from "inquirer";
import * as fs from "fs";
import { BotUtils } from "../utils/bot-utils";
import { logger } from "../logger";
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

        console.log("Messenger Bot Utility by Aiteq Reloaded, s.r.o (MIT licensed)");

        logger.level = "OFF";

        let options: any = minimist(process.argv.slice(2));

        let [group, command] = options._;

        (MBUtil.groups.has(group) && command) || MBUtil.printUsage();

        let config: any = {};

        options.config && (config = JSON.parse(fs.readFileSync(options.config, "utf8")));

        options.accessToken && (config.accessToken = options.accessToken);

        if (!config.accessToken) {
            return Promise.reject("accessToken must be specified");
        }

        options.logLevel && (logger.level = options.logLevel);

        this.botUtils = new BotUtils(config);

        await MBUtil.groups.get(group).execute(command, this.botUtils, options);
    }

    private static printUsage(): void {
        console.log("Usage: mbutil <group>");
        console.log("Groups: ", Array.from(MBUtil.groups.keys()).join(", "));
        process.exit(1);
    }

    public static getGlobalOptions(): string {
        return `
Global options:
--config <filename> - config json file
--accessToken <token> - Page Access Token (overrides config file)
--logLevel <level> - set log4js log level (default: OFF)
`;
    }

    public static registerGroup(group: Group): void {

        MBUtil.groups.set(group.getName(), group);
    }
}