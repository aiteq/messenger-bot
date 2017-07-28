import { MBUtil } from "./mb-util";

(async () => {
    try {
        await new MBUtil().bootstrap();
    } catch (error) {
        console.error("Error: ", error.message || error);
    }
})();
