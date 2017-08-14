import { cliout } from "./cli-logger";
import { logger } from "../logger";
import { MBUtil } from "./mb-util";

(async () => {
    try {
        console.log("\nMessenger Bot Utility by Aiteq\n");
        await new MBUtil().bootstrap();
    } catch (error) {
        cliout.error((error.message || error) + "\n");
        if (logger.level.levelStr === "ALL") {
            logger.error(error);
            logger.error(error.stack);
        }
    }
    console.log(" ");
})();
