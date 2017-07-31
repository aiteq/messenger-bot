import { cliout } from "./cli-logger";
import { MBUtil } from "./mb-util";

(async () => {
    try {
        console.log("\nMessenger Bot Utility by Aiteq Reloaded, s.r.o (MIT licensed)\n");
        await new MBUtil().bootstrap();
    } catch (error) {
        cliout.error((error.message || error) + "\n");
    }
    console.log(" ");
})();
