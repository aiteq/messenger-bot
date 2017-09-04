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
const URL_AUDIO: string = "https://drive.google.com/uc?export=download&id=0B5o6eFQ3zIuvSzg2OVg0VlRFMUk";
const URL_VIDEO: string = "https://static.videezy.com/system/resources/previews/000/005/499/original/Earth_Spin_In_Hands.mp4";
const URL_FILE: string = "https://gradcollege.okstate.edu/sites/default/files/PDF_linking.pdf";
const FILE: string = "./bot-db.json";
const CODE_FILE: string = "./code.png";
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

    describe("Send.Api", () => {

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
        }, 20000);

        test("sendFile(recipient, url)", async () => {
            let exp: jest.Matchers<void> = expect(await utils.sendFile(RECIPIENT_ID, URL_FILE));
            exp.toHaveProperty("recipient_id", RECIPIENT_ID);
            exp.toHaveProperty("message_id");
            exp.not.toHaveProperty("attachment_id");
        }, 10000);
    });

    describe("MessengerProfile.Api", () => {

        describe("GetStartedButton", () => {

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

        describe("Greeting", () => {

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

            test("setPersistentMenu(menu)", async () => {
                expect(await utils.setGetStartedButton()).toMatchObject(RESPONSE_SUCCESS);
                expect(await utils.setPersistentMenu(PERSISTENT_MENU[0])).toMatchObject(RESPONSE_SUCCESS);
            }, 10000);

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
                expect(await utils.deleteGetStartedButton()).toMatchObject(RESPONSE_SUCCESS);
            }, 10000);

            test("getPersistentMenu() (after delete)", async () => {
                expect(await utils.getPersistentMenu()).toBeUndefined();
            });
        });

        describe("DomainWhitelist", async () => {

            test("whitelistDomains(domain)", async () => {
                expect(await utils.whitelistDomains("https://www.aiteq.com/")).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getDomainWhitelist() (one domain)", async () => {
                expect(await utils.getDomainWhitelist()).toContain("https://www.aiteq.com/");
            });

            test("whitelistDomains([domains])", async () => {
                expect(await utils.whitelistDomains(["https://www.aiteq.international/", "https://blog.aiteq.com/"])).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getDomainWhitelist() (multiple domains)", async () => {
                let exp: jest.Matchers<void> = expect(await utils.getDomainWhitelist());
                exp.toContain("https://www.aiteq.com/");
                exp.toContain("https://www.aiteq.international/");
                exp.toContain("https://blog.aiteq.com/");
            });

            test("deletePersistentMenu()", async () => {
                expect(await utils.deleteDomainWhitelist()).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getDomainWhitelist() (after delete)", async () => {
                expect(await utils.getDomainWhitelist()).toBeUndefined();
            });
        });

        describe("AccountLinkingUrl", async () => {

            test("setAccountLinkingUrl(url)", async () => {
                expect(await utils.setAccountLinkingUrl("https://www.aiteq.com/")).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getAccountLinkingUrl()", async () => {
                expect(await utils.getAccountLinkingUrl()).toBe("https://www.aiteq.com/");
            });

            test("deleteAccountLinkingUrl()", async () => {
                expect(await utils.deleteAccountLinkingUrl()).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getAccountLinkingUrl() (after delete)", async () => {
                expect(await utils.getAccountLinkingUrl()).toBeUndefined();
            });
        });

        describe("TargetAudience", async () => {

            test("openTargetAudience()", async () => {
                expect(await utils.openTargetAudience()).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getTargetAudience()", async () => {
                //console.log(JSON.stringify(await utils.getTargetAudience(), null, 2));
                expect(await utils.getTargetAudience()).toHaveProperty("audience_type", "all");
            });

            test("closeTargetAudience()", async () => {
                expect(await utils.closeTargetAudience()).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getTargetAudience()", async () => {
                expect(await utils.getTargetAudience()).toHaveProperty("audience_type", "none");
            });

            test("whitelistAudienceCountries([country])", async () => {
                expect(await utils.whitelistAudienceCountries(["fr"])).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getTargetAudience()", async () => {
                expect(await utils.getTargetAudience()).toMatchObject({
                    audience_type: "custom",
                    countries: {
                        whitelist: ["FR"]
                    }
                });
            });

            test("blacklistAudienceCountries([country])", async () => {
                expect(await utils.blacklistAudienceCountries(["cz"])).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getTargetAudience()", async () => {
                expect(await utils.getTargetAudience()).toMatchObject({
                    audience_type: "custom",
                    countries: {
                        blacklist: ["CZ"]
                    }
                });
            });

            test("deleteTargetAudience()", async () => {
                expect(await utils.deleteTargetAudience()).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getTargetAudience() (after delete)", async () => {
                expect(await utils.getTargetAudience()).toBeUndefined();
            });
        });

        describe("ChatExtensionHomeUrl", async () => {

            test("setChatExtensionHomeUrl(url)", async () => {
                expect(await utils.setChatExtensionHomeUrl("https://www.aiteq.com/", true, true)).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getChatExtensionHomeUrl()", async () => {
                expect(await utils.getChatExtensionHomeUrl()).toMatchObject({
                    url: "https://www.aiteq.com/",
                    webview_height_ratio: "tall",
                    webview_share_button: "show",
                    in_test: true
                })
            });

            test("setChatExtensionHomeUrl(url)", async () => {
                expect(await utils.setChatExtensionHomeUrl("https://www.aiteq.com/", false, false)).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getChatExtensionHomeUrl()", async () => {
                expect(await utils.getChatExtensionHomeUrl()).toMatchObject({
                    url: "https://www.aiteq.com/",
                    webview_height_ratio: "tall",
                    webview_share_button: "hide",
                    in_test: false
                })
            });

            test("deleteChatExtensionHomeUrl()", async () => {
                expect(await utils.deleteChatExtensionHomeUrl()).toMatchObject(RESPONSE_SUCCESS);
            });

            test("getChatExtensionHomeUrl() (after delete)", async () => {
                expect(await utils.getChatExtensionHomeUrl()).toBeUndefined();
            });
        });
    });

    describe("MessengerCodes.Api", () => {

        function clean() {
            try { fs.unlinkSync(CODE_FILE); } catch (error) { }
        }

        beforeAll(() => {
            clean();
        });

        afterAll(() => {
            clean();
        });

        test("generateMessengerCode(file, size, ref)", async () => {
            await expect(utils.generateMessengerCode(CODE_FILE, 500, "test")).resolves.toBeUndefined();
            expect(() => fs.unlinkSync(CODE_FILE)).not.toThrow();
        }, 10000);

        test("generateMessengerCode(file, invalid-size)", async () => {
            await expect(utils.generateMessengerCode(CODE_FILE, 2500)).rejects.toMatch("image_size");
        }, 10000);
    });
});
