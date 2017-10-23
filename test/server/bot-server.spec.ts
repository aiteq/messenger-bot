import logger from "../../src/logger";
import { BotServer } from "../../src/server/bot-server";
import { Chat } from "../../src/server/chat";
import { ChatExtension } from "../../src/server/chat-extension";
import { BotConfig } from "../../src/utils/bot-config";
import { Webhook } from "../../src/fb-api";

const config: BotConfig = require("../../work/test-config.json");

describe("BotServer", () => {

    logger.level = "OFF";

    let bot: BotServer;

    test("constructor(config)", () => {
        expect(bot = new BotServer(config)).toBeInstanceOf(BotServer);
    });

    test("hear(regexp, callback)", () => {
        expect(bot.hear(/ahoj/, () => {})).toBe(bot);
    });

    test("hear(string, callback)", () => {
        expect(bot.hear("ahoj", () => {})).toBe(bot);
    });

    test("hear([regexps], callback)", () => {
        expect(bot.hear([/ahoj/, /nazdar/], () => {})).toBe(bot);
    });

    test("hear([strings], callback)", () => {
        expect(bot.hear(["ahoj", "nazdar"], () => {})).toBe(bot);
    });

    test("on(event, callback)", () => {
        expect(bot.on(Webhook.Event.ATTACHMENT, () => {})).toBe(bot);
    });

    test("on(event, id, callback)", () => {
        expect(bot.on(Webhook.Event.POSTBACK, "id", () => {})).toBe(bot);
    });

    test("addChatExtension(extension)", () => {
        expect(bot.addChatExtension(new class implements ChatExtension {
            getData() {
                return {};
            }
            getView() {
                return "view";
            }
        })).toBe(bot);
    });

    test("start()", () => {
        expect(bot.start()).toBeUndefined();
    });

    test("stop()", () => {
        expect(bot.stop()).toBeUndefined();
    });

    test("normalizePort(port)", () => {
        expect(BotServer.normalizePort("8080")).toBe(8080);
        expect(BotServer.normalizePort(8080)).toBe(8080);
        expect(BotServer.normalizePort("abc")).toBe("abc");
    });
});
