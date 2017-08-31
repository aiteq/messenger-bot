import * as fs from "fs";
import { logger } from "../../src/logger";
import { BotUtils } from "../../src/utils/bot-utils";
import * as MessengerProfile from "../../src/fb-api/messenger-profile";
import { PersistentMenuDef } from "../../src/fb-api-helpers/persistent-menu-def";
import * as Send from "../../src/fb-api/send";
import * as Webhook from "../../src/fb-api/webhook";

const config = require("../../work/test-config.json");
const ACCESS_TOKEN: string = config.accessToken;
const RECIPIENT_ID: string = config.recipientId;

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";
const URL_AUDIO: string = "https://ssl.gstatic.com/dictionary/static/sounds/de/0/croissant.mp3";
const URL_VIDEO: string = "https://static.videezy.com/system/resources/previews/000/005/499/original/Earth_Spin_In_Hands.mp4";
const URL_FILE: string = "https://gradcollege.okstate.edu/sites/default/files/PDF_linking.pdf";
const FILE: string = "./bot-db.json";
const RESPONSE_SUCCESS = { result: "success" };
const PERSISTENT_MENU: PersistentMenuDef[] = [{
    locale: "default",
    composerInputDisabled: false,
    items: [{
        title: "Web",
        url: "http://www.rubicoin.cz"
    }, {
        title: "Test postback",
        data: "test postback",
        id: "TEST-ITEM"
    }, {
        title: "Submenu",
        items: [{
            title: "Web",
            url: "http://www.rubicoin.cz"
        }]
    }]
}, {
    locale: "en_US",
    composerInputDisabled: false,
    items: [{
        title: "Web",
        url: "http://www.aiteq.com"
    }, {
        title: "Test postback",
        data: "test postback",
        id: "TEST-ITEM"
    }, {
        title: "Submenu",
        items: [{
            title: "Web",
            url: "http://www.aiteq.com"
        }]
    }]
}];
const SORT_MENU_FN: (a: any, b: any) => number = (a, b) => a.locale.localeCompare(b.locale);
const PERSISTENT_MENU_CHECK = [{
    locale: "en_US",
    composer_input_disabled: false,
    call_to_actions: [{
        type: "web_url",
        title: "Web",
        url: "http://www.aiteq.com/",
        webview_share_button: "show"
    }, {
        type: "postback",
        title: "Test postback",
        payload: "{\"src\":\"persistent-menu\",\"id\":\"TEST-ITEM\",\"data\":\"test postback\"}",
        webview_share_button: "show"
    }, {
        type: "nested",
        title: "Submenu",
        call_to_actions: [{
            type: "web_url",
            title: "Web",
            url: "http://www.aiteq.com/",
            webview_share_button: "show"
        }]
    }]
}, {
    locale: "default",
    composer_input_disabled: false,
    call_to_actions: [{
        type: "web_url",
        title: "Web",
        url: "http://www.rubicoin.cz/",
        webview_share_button: "show"
    }, {
        type: "postback",
        title: "Test postback",
        payload: "{\"src\":\"persistent-menu\",\"id\":\"TEST-ITEM\",\"data\":\"test postback\"}",
        webview_share_button: "show"
    }, {
        type: "nested",
        title: "Submenu",
        call_to_actions: [{
            type: "web_url",
            title: "Web",
            url: "http://www.rubicoin.cz/",
            webview_share_button: "show"
        }]
    }]
}].sort(SORT_MENU_FN);

describe("BotUtils", () => {

    logger.level = "OFF";

    let utils: BotUtils;

    test("constructor()", () => {
        expect(() => new BotUtils(undefined)).toThrowError("accessToken must by provided");
    });

    test("constructor(accessToken)", () => {
        expect(utils = new BotUtils(ACCESS_TOKEN)).toBeInstanceOf(BotUtils);
    });

    describe.skip("Send.Api", () => {

        function clean() {
            try { fs.unlinkSync(FILE); } catch (error) { }
        }

        beforeAll(() => {
            clean();
        });

        afterAll(() => {
            clean();
        });

        test("sendText(recipient, text)", async () => {
            let exp: jest.Matchers<void> = expect(await utils.sendText(RECIPIENT_ID, "test text"));
            exp.toHaveProperty("recipient_id", RECIPIENT_ID);
            exp.toHaveProperty("message_id");
        });

        test("sendImage(recipient, url)", async () => {
            let exp: jest.Matchers<void> = expect(await utils.sendImage(RECIPIENT_ID, URL_IMAGE));
            exp.toHaveProperty("recipient_id", RECIPIENT_ID);
            exp.toHaveProperty("message_id");
            exp.not.toHaveProperty("attachment_id");
        });

        test("sendImage(recipient, url, true) 1.", async () => {
            let exp: jest.Matchers<void> = expect(await utils.sendImage(RECIPIENT_ID, URL_IMAGE, true));
            exp.toHaveProperty("recipient_id", RECIPIENT_ID);
            exp.toHaveProperty("message_id");
            exp.toHaveProperty("attachment_id");
        });

        test("sendImage(recipient, url, true) 2.", async () => {
            let exp: jest.Matchers<void> = expect(await utils.sendImage(RECIPIENT_ID, URL_IMAGE, true));
            exp.toHaveProperty("recipient_id", RECIPIENT_ID);
            exp.toHaveProperty("message_id");
            exp.not.toHaveProperty("attachment_id");
        });

        test("sendImage(recipient, url, false)", async () => {
            let exp: jest.Matchers<void> = expect(await utils.sendImage(RECIPIENT_ID, URL_IMAGE, false));
            exp.toHaveProperty("recipient_id", RECIPIENT_ID);
            exp.toHaveProperty("message_id");
            exp.not.toHaveProperty("attachment_id");
        });

        test("sendAudio(recipient, url)", async () => {
            let exp: jest.Matchers<void> = expect(await utils.sendAudio(RECIPIENT_ID, URL_AUDIO));
            exp.toHaveProperty("recipient_id", RECIPIENT_ID);
            exp.toHaveProperty("message_id");
            exp.not.toHaveProperty("attachment_id");
        });

        test("sendVideo(recipient, url)", async () => {
            let exp: jest.Matchers<void> = expect(await utils.sendVideo(RECIPIENT_ID, URL_VIDEO));
            exp.toHaveProperty("recipient_id", RECIPIENT_ID);
            exp.toHaveProperty("message_id");
            exp.not.toHaveProperty("attachment_id");
        });

        test("sendFile(recipient, url)", async () => {
            let exp: jest.Matchers<void> = expect(await utils.sendFile(RECIPIENT_ID, URL_FILE));
            exp.toHaveProperty("recipient_id", RECIPIENT_ID);
            exp.toHaveProperty("message_id");
            exp.not.toHaveProperty("attachment_id");
        });
    });

    describe("MessengerProfile.Api", () => {

        describe.skip("GetStartedButton", () => {

            test("setGetStartedButton()", async () => {
                expect(await utils.setGetStartedButton()).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getGetStartedButton()", async () => {
                expect(await utils.getGetStartedButton()).toMatchObject({ payload: { src: Webhook.PostbackSource.GET_STARTED_BUTTON } });
            });

            test("setGetStartedButton(data)", async () => {
                expect(await utils.setGetStartedButton({ mojeData: "moje" })).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getGetStartedButton() (with data)", async () => {
                expect(await utils.getGetStartedButton()).toMatchObject({
                    payload: {
                        src: Webhook.PostbackSource.GET_STARTED_BUTTON,
                        data: {
                            mojeData: "moje"
                        }
                    }
                });
            });

            test("deleteGetStartedButton(data)", async () => {
                expect(await utils.deleteGetStartedButton()).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getGetStartedButton() (after delete)", async () => {
                expect(await utils.getGetStartedButton()).toBeUndefined();
            });
        });

        describe.skip("Greeting", () => {

            test("setGreeting(text)", async () => {
                expect(await utils.setGreeting("Greeting default 1")).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getGreeting() (default)", async () => {
                expect(await utils.getGreeting()).toMatchObject([{ locale: "default", text: "Greeting default 1" }]);
            });

            test("setGreeting(text) (2)", async () => {
                expect(await utils.setGreeting("Greeting default 2")).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getGreeting() (default changed)", async () => {
                expect(await utils.getGreeting()).toMatchObject([{ locale: "default", text: "Greeting default 2" }]);
            });

            test("setGreeting(text, locale)", async () => {
                expect(await utils.setGreeting("Greeting en_US", "en_US")).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getGreeting() (two locales)", async () => {
                expect(await utils.getGreeting()).toMatchObject([
                    { locale: "default", text: "Greeting default 2" },
                    { locale: "en_US", text: "Greeting en_US" }
                ]);
            });

            test("deleteGreeting()", async () => {
                expect(await utils.deleteGreeting()).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getGreeting() (after delete)", async () => {
                expect(await utils.getGreeting()).toBeUndefined();
            });
        });

        describe("PersistentMenu", async () => {

            afterAll(async () => {
                await utils.deleteGetStartedButton();
            });

            test("setPersistentMenu(menu)", async () => {
                await utils.setGetStartedButton();
                expect(await utils.setPersistentMenu(PERSISTENT_MENU[0])).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getPersistentMenu() (one locale)", async () => {
                expect(await utils.getPersistentMenu()).toMatchObject([PERSISTENT_MENU_CHECK[0]]);
            });

            test("setPersistentMenu([menus])", async () => {
                await utils.setGetStartedButton();
                expect(await utils.setPersistentMenu(PERSISTENT_MENU)).toMatchObject(RESPONSE_SUCCESS);
            }, 10000);

            test("getPersistentMenu() (two locales)", async () => {
                expect((await utils.getPersistentMenu()).sort(SORT_MENU_FN)).toMatchObject(PERSISTENT_MENU_CHECK);
            });

            test("deletePersistentMenu()", async () => {
                expect(await utils.deletePersistentMenu()).toMatchObject(RESPONSE_SUCCESS);
            }, 10000);

            test("getPersistentMenu() (after delete)", async () => {
                expect(await utils.getPersistentMenu()).toBeUndefined();
            });
        });
    });
});
