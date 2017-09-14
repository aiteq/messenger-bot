import { logger } from "../../src/logger";
import { cliout } from "../../src/cli/cli-logger";
import { MBUtil } from "../../src/cli/mb-util";
import { BotUtils } from "../../src/utils/bot-utils";

const config = require("../../work/test-config.json");
const ACCESS_TOKEN: string = config.accessToken;

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";
const URL_AUDIO: string = "https://drive.google.com/uc?export=download&id=0B5o6eFQ3zIuvcDFmQ0ZnamUyQU0";
//const URL_AUDIO: string = "https://drive.google.com/uc?export=download&id=0B5o6eFQ3zIuvSzg2OVg0VlRFMUk";
const URL_VIDEO: string = "https://static.videezy.com/system/resources/previews/000/005/499/original/Earth_Spin_In_Hands.mp4";
const URL_FILE: string = "https://gradcollege.okstate.edu/sites/default/files/PDF_linking.pdf";

describe("MBUtil", () => {

    logger.level = "OFF";
    cliout.level = "OFF";

    let mbu: MBUtil;
    let bu: BotUtils = new BotUtils(config.accessToken);

    beforeAll(() => {
        bu.deletePersistentMenu();
        bu.deleteGetStartedButton();
        bu.deleteAccountLinkingUrl();
        bu.deleteChatExtensionHomeUrl();
        bu.deleteDomainWhitelist();
        bu.deleteGreeting();
        bu.deleteTargetAudience();
    })

    afterAll(() => {
        bu.deleteGetStartedButton();
    })

    test("constructor()", () => {
        expect(mbu = new MBUtil()).toBeInstanceOf(MBUtil);
    });

    test("bootstrap()", async () => {
        expect(await mbu.bootstrap([])).toMatch("Usage");
    });

    describe("accountlinking", () => {

        test("--help --debug", async () => {
            expect(await mbu.bootstrap(["accountlinking", "--help", "--debug"])).toMatch("Manage Account Linking URL");
        });

        test("<nothing>", async () => {
            await expect(mbu.bootstrap(["accountlinking"])).rejects.toBe("no accessToken");
        });

        test("--accessToken", async () => {
            expect(await mbu.bootstrap(["accountlinking", "--accessToken", config.accessToken])).toMatch("Manage Account Linking URL");
        });

        test("--config", async () => {
            expect(await mbu.bootstrap(["accountlinking", "--config", "./work/test-config.json"])).toMatch("Manage Account Linking URL");
        });

        test("get", async () => {
            expect(await mbu.bootstrap(["accountlinking", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("set", async () => {
            expect(await mbu.bootstrap(["accountlinking", "set", "--accessToken", config.accessToken])).toMatch("Manage Account Linking URL");
        });

        test("set url", async () => {
            expect(await mbu.bootstrap(["accountlinking", "set", "https://www.aiteq.com", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("delete", async () => {
            expect(await mbu.bootstrap(["accountlinking", "delete", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("unknown-cmd", async () => {
            expect(await mbu.bootstrap(["accountlinking", "nesmysl", "--accessToken", config.accessToken])).toMatch("Manage Account Linking URL");
        });
    });

    describe("domains", () => {

        test("--help", async () => {
            expect(await mbu.bootstrap(["domains", "--help"])).toMatch("Manage Domain Whitelist of the Page");
        });

        test("--accessToken", async () => {
            expect(await mbu.bootstrap(["domains", "--accessToken", config.accessToken])).toMatch("Manage Domain Whitelist of the Page");
        });

        test("get (no domains whitelisted)", async () => {
            await bu.deleteDomainWhitelist();
            expect(await mbu.bootstrap(["domains", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("add", async () => {
            expect(await mbu.bootstrap(["domains", "add", "--accessToken", config.accessToken])).toMatch("Manage Domain Whitelist of the Page");
        });

        test("add url", async () => {
            expect(await mbu.bootstrap(["domains", "add", "https://www.aiteq.com", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("get", async () => {
            expect(await mbu.bootstrap(["domains", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("delete", async () => {
            expect(await mbu.bootstrap(["domains", "delete", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("unknown-cmd", async () => {
            expect(await mbu.bootstrap(["domains", "nesmysl", "--accessToken", config.accessToken])).toMatch("Manage Domain Whitelist of the Page");
        });
    });

    describe("getstarted", () => {

        test("--help", async () => {
            expect(await mbu.bootstrap(["getstarted", "--help"])).toMatch("Manage Get Started button for the Page");
        });

        test("--accessToken", async () => {
            expect(await mbu.bootstrap(["getstarted", "--accessToken", config.accessToken])).toMatch("Manage Get Started button for the Page");
        });

        test("get (not set)", async () => {
            await bu.deleteGetStartedButton();
            expect(await mbu.bootstrap(["getstarted", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("set --data data", async () => {
            expect(await mbu.bootstrap(["getstarted", "set", "--data", "blabla", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("get (w/ data)", async () => {
            expect(await mbu.bootstrap(["getstarted", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("delete", async () => {
            expect(await mbu.bootstrap(["getstarted", "delete", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("set", async () => {
            expect(await mbu.bootstrap(["getstarted", "set", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("get (w/o data)", async () => {
            expect(await mbu.bootstrap(["getstarted", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("unknown-cmd", async () => {
            expect(await mbu.bootstrap(["getstarted", "nesmysl", "--accessToken", config.accessToken])).toMatch("Manage Get Started button for the Page");
        });
    });

    describe("greeting", () => {

        test("--help", async () => {
            expect(await mbu.bootstrap(["greeting", "--help"])).toMatch("Manage Greeting text of the Page");
        });

        test("--accessToken", async () => {
            expect(await mbu.bootstrap(["greeting", "--accessToken", config.accessToken])).toMatch("Manage Greeting text of the Page");
        });

        test("get (not set)", async () => {
            expect(await mbu.bootstrap(["greeting", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("add", async () => {
            expect(await mbu.bootstrap(["greeting", "add", "--accessToken", config.accessToken])).toMatch("Manage Greeting text of the Page");
        });

        test("add greeting", async () => {
            expect(await mbu.bootstrap(["greeting", "add", "blabla", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("add greeting --locale locale", async () => {
            expect(await mbu.bootstrap(["greeting", "add", "blabla", "--locale", "en_US", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("get", async () => {
            expect(await mbu.bootstrap(["greeting", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("delete", async () => {
            expect(await mbu.bootstrap(["greeting", "delete", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("unknown-cmd", async () => {
            expect(await mbu.bootstrap(["greeting", "nesmysl", "--accessToken", config.accessToken])).toMatch("Manage Greeting text of the Page");
        });
    });

    describe("chatext", () => {

        test("--help", async () => {
            expect(await mbu.bootstrap(["chatext", "--help"])).toMatch("Manage Chat Extension home URL");
        });

        test("--accessToken", async () => {
            expect(await mbu.bootstrap(["chatext", "--accessToken", config.accessToken])).toMatch("Manage Chat Extension home URL");
        });

        test("get", async () => {
            expect(await mbu.bootstrap(["chatext", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("set", async () => {
            expect(await mbu.bootstrap(["chatext", "set", "--accessToken", config.accessToken])).toMatch("Manage Chat Extension home URL");
        });

        test("set url", async () => {
            expect(await mbu.bootstrap(["chatext", "set", "https://www.aiteq.com", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("set url --inTest --hideShareButton", async () => {
            expect(await mbu.bootstrap(["chatext", "set", "https://www.aiteq.com", "--inTest", "--hideShareButton", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("delete", async () => {
            expect(await mbu.bootstrap(["chatext", "delete", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("unknown-cmd", async () => {
            expect(await mbu.bootstrap(["chatext", "nesmysl", "--accessToken", config.accessToken])).toMatch("Manage Chat Extension home URL");
        });
    });

    describe("code", () => {

        test("--help", async () => {
            expect(await mbu.bootstrap(["code", "--help"])).toMatch("Generates a new Messenger Code");
        });

        test("--accessToken", async () => {
            expect(await mbu.bootstrap(["code", "--accessToken", config.accessToken])).toMatch("Generates a new Messenger Code");
        });

        test("create", async () => {
            expect(await mbu.bootstrap(["code", "create", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("generate", async () => {
            expect(await mbu.bootstrap(["code", "generate", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("create --size --ref", async () => {
            expect(await mbu.bootstrap(["code", "create", "--size", "500", "--ref", "ref", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("unknown-cmd", async () => {
            expect(await mbu.bootstrap(["code", "nesmysl", "--accessToken", config.accessToken])).toMatch("Generates a new Messenger Code");
        });
    });

    describe("menu", () => {

        test("--help", async () => {
            expect(await mbu.bootstrap(["menu", "--help"])).toMatch("Manage Persistent Menu for the Page");
        });

        test("--accessToken", async () => {
            expect(await mbu.bootstrap(["menu", "--accessToken", config.accessToken])).toMatch("Manage Persistent Menu for the Page");
        });

        test("get", async () => {
            expect(await mbu.bootstrap(["menu", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("set", async () => {
            expect(await mbu.bootstrap(["menu", "set", "--accessToken", config.accessToken])).toMatch("Manage Persistent Menu for the Page");
        });

        test("set --file file", async () => {
            expect(await mbu.bootstrap(["menu", "set", "--file", "./work/test-menu.json", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("delete", async () => {
            expect(await mbu.bootstrap(["menu", "delete", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("unknown-cmd", async () => {
            expect(await mbu.bootstrap(["menu", "nesmysl", "--accessToken", config.accessToken])).toMatch("Manage Persistent Menu for the Page");
        });
    });

    describe("send", () => {

        test("--help", async () => {
            expect(await mbu.bootstrap(["send", "--help"])).toMatch("Send messages directly to users");
        });

        test("--accessToken", async () => {
            expect(await mbu.bootstrap(["send", "--accessToken", config.accessToken])).toMatch("Send messages directly to users");
        });

        test("image", async () => {
            expect(await mbu.bootstrap(["send", "image", "--accessToken", config.accessToken])).toMatch("Send messages directly to users");
        }, 10000);

        test("image --recipient rcpnt --url", async () => {
            expect(await mbu.bootstrap(["send", "image", "--recipient", config.recipientId, "--url", URL_IMAGE, "--accessToken", config.accessToken])).toBeUndefined();
        }, 10000);

        test("audio", async () => {
            expect(await mbu.bootstrap(["send", "audio", "--accessToken", config.accessToken])).toMatch("Send messages directly to users");
        }, 10000);

        test("audio --recipient rcpnt --url", async () => {
            expect(await mbu.bootstrap(["send", "audio", "--recipient", config.recipientId, "--url", URL_AUDIO, "--accessToken", config.accessToken])).toBeUndefined();
        }, 10000);

        test("video", async () => {
            expect(await mbu.bootstrap(["send", "video", "--accessToken", config.accessToken])).toMatch("Send messages directly to users");
        }, 10000);

        test("video --recipient rcpnt --url", async () => {
            expect(await mbu.bootstrap(["send", "video", "--recipient", config.recipientId, "--url", URL_VIDEO, "--accessToken", config.accessToken])).toBeUndefined();
        }, 10000);

        test("file", async () => {
            expect(await mbu.bootstrap(["send", "file", "--accessToken", config.accessToken])).toMatch("Send messages directly to users");
        }, 10000);

        test("file --recipient rcpnt --url", async () => {
            expect(await mbu.bootstrap(["send", "file", "--recipient", config.recipientId, "--url", URL_FILE, "--accessToken", config.accessToken])).toBeUndefined();
        }, 10000);

        test("text", async () => {
            expect(await mbu.bootstrap(["send", "text", "--accessToken", config.accessToken])).toMatch("Send messages directly to users");
        }, 10000);

        test("text --recipient rcpnt --url", async () => {
            expect(await mbu.bootstrap(["send", "text", "--recipient", config.recipientId, "--accessToken", config.accessToken])).toBeUndefined();
        }, 10000);
    });

    describe("audience", () => {

        test("--help", async () => {
            expect(await mbu.bootstrap(["audience", "--help"])).toMatch("Manage Target Audience settings of the Page");
        });

        test("--accessToken", async () => {
            expect(await mbu.bootstrap(["audience", "--accessToken", config.accessToken])).toMatch("Manage Target Audience settings of the Page");
        });

        test("get (not set)", async () => {
            expect(await mbu.bootstrap(["audience", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("open", async () => {
            expect(await mbu.bootstrap(["audience", "open", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("close", async () => {
            expect(await mbu.bootstrap(["audience", "close", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("whitelist", async () => {
            expect(await mbu.bootstrap(["audience", "whitelist", "--accessToken", config.accessToken])).toMatch("Manage Target Audience settings of the Page");
        });

        test("whitelist", async () => {
            expect(await mbu.bootstrap(["audience", "whitelist", "cz", "fr", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("blacklist", async () => {
            expect(await mbu.bootstrap(["audience", "blacklist", "--accessToken", config.accessToken])).toMatch("Manage Target Audience settings of the Page");
        });

        test("blacklist", async () => {
            expect(await mbu.bootstrap(["audience", "blacklist", "cz", "fr", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("get", async () => {
            expect(await mbu.bootstrap(["audience", "get", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("delete", async () => {
            expect(await mbu.bootstrap(["audience", "delete", "--accessToken", config.accessToken])).toBeUndefined();
        });

        test("unknown-cmd", async () => {
            expect(await mbu.bootstrap(["audience", "nesmysl", "--accessToken", config.accessToken])).toMatch("Manage Target Audience settings of the Page");
        });
    });
});
