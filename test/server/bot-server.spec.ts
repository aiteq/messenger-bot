import { logger } from "../../src/logger";
import { BotServer } from "../../src/server/bot-server";
import { BotConfig } from "../../src/utils/bot-config";

const config = require("../../work/test-config.json");

describe("BotServer", () => {

    logger.level = "OFF";

    let bot: BotServer;

    test("constructor(config)", () => {
        expect(bot = new BotServer(config)).toBeInstanceOf(BotServer);
    });
});
