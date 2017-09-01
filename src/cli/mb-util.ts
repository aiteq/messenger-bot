import * as fs from "fs";
import * as minimist from "minimist";
import { logger } from "../logger";
import { BotUtils } from "../utils/bot-utils";
import { cliout } from "./cli-logger";
import { Group } from "./group";

/* tslint:disable no-console */

/**
 * The entrypoint of the mbutil CLI.
 */
export class MBUtil {

    public static getGlobalOptions(): string {
        return `Global options:
    --config <path> - config json file
    --accessToken <token> - Page Access Token (overrides config file)
    --help - display usage for the group

`;
    }

    private botUtils: BotUtils;
    private groups: Map<string, Group> = new Map<string, Group>();

    public async bootstrap(): Promise<void> {

        this.registerGroups();

        const options: any = minimist(process.argv.slice(2));

        logger.level = options.debug ? "ALL" : "OFF";

        const [group, command] = options._;

        const groupHandler: Group = this.groups.get(group);

        groupHandler || this.exitWithUsage();

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

    private exitWithUsage(): void {
        console.log("Usage: mbutil <group> [command] [options]");
        console.log("Groups: ", Array.from(this.groups.keys()).join(", "));
        console.log("\nType 'mbutil <group> --help' to display usage for the group\n");
        process.exit(0);
    }

    private registerGroups() {

        // read all groups from groups/index.js
        const groups = require("./groups/");

        Object.keys(groups).forEach((key) => {
            const group: Group = new groups[key]();
            this.groups.set(group.getName(), group);
        });
    }
}
