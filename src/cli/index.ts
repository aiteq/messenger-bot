import { logger } from "../logger";
import { cliout } from "./cli-logger";
import { MBUtil } from "./mb-util";

/* tslint:disable no-console */

(async () => {
    try {
        console.log("\nMessenger Bot Utility by Aiteq\n");
        await new MBUtil().bootstrap();
    } catch (error) {

        if (error.message === "exit") { return; }

        cliout.error((error.message || error) + "\n");
        if (logger.level.levelStr === "ALL") {
            logger.error(error);
            logger.error(error.stack);
        }
    }
    console.log(" ");
})();
