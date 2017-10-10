import logger from "../logger";
import { cliout } from "./cli-logger";
import { MBUtil } from "./mb-util";

/* tslint:disable no-console */

(async () => {

    try {

        console.log("\nMessenger Bot Utility by Aiteq\n");
        const usage: string = await new MBUtil().bootstrap(process.argv.slice(2));
        usage && console.log(usage);

    } catch (error) {

        cliout.error(error.message || error);
        if (logger.level.levelStr === "ALL") {
            logger.error(error);
            logger.error(error.stack);
        }
    }

    console.log(" ");
})();
