import { logger } from "../../src/logger";
import * as MessengerProfile from "../../src/fb-api/messenger-profile";

const config = require("../../work/test-config.json");
const ACCESS_TOKEN: string = config.accessToken;

describe("MessengerProfile.Api", () => {

    logger.level = "OFF";

    let api: MessengerProfile.Api;

    describe("valid accessCode", () => {

        test("constructor(valid-access-code)", () => {
            expect(api = new MessengerProfile.Api(ACCESS_TOKEN)).toBeInstanceOf(MessengerProfile.Api);
        });
    });
});
