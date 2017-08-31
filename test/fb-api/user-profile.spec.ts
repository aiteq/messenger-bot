import { logger } from "../../src/logger";
import * as UserProfile from "../../src/fb-api/user-profile";

const config = require("../../work/test-config.json");
const ACCESS_TOKEN: string = config.accessToken;

describe("UserProfile.Api", () => {

    logger.level = "OFF";

    let api: UserProfile.Api;

    describe("valid accessCode", () => {

        test("constructor(valid-access-code)", () => {
            expect(api = new UserProfile.Api(ACCESS_TOKEN)).toBeInstanceOf(UserProfile.Api);
        });
    });
});
