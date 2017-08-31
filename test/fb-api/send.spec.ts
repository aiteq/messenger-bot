import { logger } from "../../src/logger";
import * as Send from "../../src/fb-api/send";

const config = require("../../work/test-config.json");
const ACCESS_TOKEN: string = config.accessToken;

describe("Send.Api", () => {

    logger.level = "OFF";

    let api: Send.Api;

    describe("valid accessCode", () => {

        test("constructor(valid-access-code)", () => {
            expect(api = new Send.Api(ACCESS_TOKEN)).toBeInstanceOf(Send.Api);
        });
    });
});
