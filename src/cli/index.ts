import { cliout } from "./cli-logger";
import { MBUtil } from "./mb-util";

(async () => {
    try {
        await new MBUtil().bootstrap();
    } catch (error) {
        cliout.error(error.message || error);
    }
})();
