import { MBUtil } from "./mb-util";

try {
    new MBUtil().bootstrap();
} catch (error) {
    console.error("Error: ", error.message);
}
