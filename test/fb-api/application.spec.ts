import { logger } from "../../src/logger";
import { BotConfig } from "../../src/utils/bot-config";
import { Application } from "../../src/fb-api";

const config: BotConfig = require("../../work/test-config.json");

describe("Application", () => {

    logger.level = "OFF";

    let api: Application.Api;

    test("constructor(accessToken)", () => {
        expect(api = new Application.Api(config.accessToken)).toBeInstanceOf(Application.Api);
    });

    test("getAppInfo()", async () => {
        const appInfo: jest.Matchers<void> = expect(await api.getAppInfo());
        appInfo.toHaveProperty("link", "https://www.facebook.com/games/?app_id=120927044650395");
        appInfo.toHaveProperty("id", "120927044650395");
        appInfo.toHaveProperty("name");
        appInfo.toHaveProperty("namespace");
    });
});
