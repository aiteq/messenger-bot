import * as fs from "fs";
import * as minimist from "minimist";
import logger from "../logger";
import { BotUtils } from "../utils/bot-utils";
import { cliout } from "./cli-logger";
import { Group } from "./group";

/* tslint:disable no-console */

/**
 * The entrypoint of the mbutil CLI.
 */
export class MBUtil {

    private static readonly USAGE_GLOBAL_OPTIONS: string = `
Global options:
    --config <path> - config json file
    --accessToken <token> - Page Access Token (overrides config file)
    --help - display usage for the group`;

    private botUtils: BotUtils;
    private groups: Map<string, Group> = new Map<string, Group>();

    public async bootstrap(args: string[]): Promise<string> {

        this.registerGroups();

        const options: any = minimist(args);

        logger.level = options.debug ? "ALL" : "OFF";

        const [group, command] = options._;

        const groupHandler: Group = this.groups.get(group);

        if (!groupHandler) {
            return Promise.resolve(`Usage: mbutil <group> [command] [options]
Groups: ${Array.from(this.groups.keys()).join(", ")}

Type 'mbutil <group> --help' to display usage for the group`);
        }

        if (options.help) {
            try {
                await groupHandler.usage();
            } catch (error) {
                return Promise.resolve(error + MBUtil.USAGE_GLOBAL_OPTIONS);
            }
        }

        let accessToken: string;

        options.config && (accessToken = JSON.parse(fs.readFileSync(options.config, "utf8")).accessToken);

        accessToken = options.accessToken || accessToken;

        if (!accessToken) {
            return Promise.reject("no accessToken");
        }

        this.botUtils = new BotUtils(accessToken);

        try {
            cliout.info(await groupHandler.execute(command, this.botUtils, options));
        } catch (error) {
            return error;
        }
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
