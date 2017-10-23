import logger from "../../src/logger";
import { BotConfig } from "../../src/utils/bot-config";
import { Subscriptions } from "../../src/fb-api";

const config: BotConfig = require("../../work/test-config.json");

describe("Subscriptions", () => {

    logger.level = "OFF";

    let api: Subscriptions.Api;

    test("constructor(invalidAccessToken)", () => {
        expect(new Subscriptions.Api("invalid-token", config.appSecret)).toBeInstanceOf(Subscriptions.Api);
    });

    test("constructor(accessToken)", () => {
        expect(api = new Subscriptions.Api(config.accessToken, config.appSecret)).toBeInstanceOf(Subscriptions.Api);
    });

    test("getWebhookSubscriptions()", async () => {
        expect(await api.getWebhookSubscriptions()).toHaveLength(1);
    });

    test("getSubscription(PAGE)", async () => {
        expect(await api.getSubscription(Subscriptions.SubscriptionTopic.PAGE)).toHaveProperty("callback_url");
    });

    test("getSubscription(USER)", async () => {
        await expect(api.getSubscription(Subscriptions.SubscriptionTopic.USER)).rejects.toMatch("no subscription for topic 'user'");
    });

    test("getCallbackUrl(PAGE)", async () => {
        expect(await api.getCallbackUrl(Subscriptions.SubscriptionTopic.PAGE)).toMatch(/^https\:\/\/.*/);
    });

    test("getCallbackUrl(USER)", async () => {
        await expect(api.getCallbackUrl(Subscriptions.SubscriptionTopic.USER)).rejects.toMatch("no subscription for topic 'user'");
    });
});
