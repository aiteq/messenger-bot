import logger from "../../src/logger";
import { BotConfig } from "../../src/utils/bot-config";
import { UserProfile } from "../../src/fb-api";

const config: BotConfig = require("../../work/test-config.json");

describe("UserProfile", () => {

    logger.level = "OFF";

    let api: UserProfile.Api;

    test("constructor(accessToken)", () => {
        expect(api = new UserProfile.Api(config.accessToken)).toBeInstanceOf(UserProfile.Api);
    });

    test("getUserProfile()", async () => {
        const up: jest.Matchers<void> = expect(await api.getUserProfile((config as any).recipientId));
        up.toHaveProperty("id", (config as any).recipientId);
    });
});
