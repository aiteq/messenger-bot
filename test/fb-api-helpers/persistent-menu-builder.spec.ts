import { PersistentMenuDef } from "../../src/fb-api-helpers/persistent-menu-def";
import { PersistentMenuBuilder } from "../../src/fb-api-helpers/persistent-menu-builder";
import { MenuBuilder } from "../../src/fb-api-helpers/menu-builder";
import * as Webview from "../../src/fb-api/webview";

const PERSISTENT_MENU: PersistentMenuDef[] = [{
    locale: "default",
    composerInputDisabled: false,
    items: [{
        title: "Web",
        url: "http://www.rubicoin.cz/"
    }, {
        title: "Test postback",
        data: "test postback",
        id: "TEST-ITEM"
    }, {
        title: "Submenu",
        items: [{
            title: "Web",
            url: "http://www.rubicoin.cz/"
        }]
    }]
}, {
    locale: "en_US",
    composerInputDisabled: false,
    items: [{
        title: "Web",
        url: "http://www.aiteq.com/"
    }, {
        title: "Test postback",
        data: "test postback",
        id: "TEST-ITEM"
    }, {
        title: "Submenu",
        items: [{
            title: "Web",
            url: "http://www.aiteq.com/"
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

describe("PersistentMenuBuilder", () => {

    let builder: PersistentMenuBuilder;

    test("constructor()", () => {
        expect(builder = new PersistentMenuBuilder()).toBeInstanceOf(PersistentMenuBuilder);
    });

    test("addMenu(locale, composerInputDisabled, menu) - no items", () => {
        expect(() => builder.addMenu("default", true, PersistentMenuBuilder.createMenu())).toThrow("at least one menu item must be added when composer input is disabled (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu#post)");
    });

    test("addMenu(locale, composerInputDisabled, menu)", () => {
        const mb: MenuBuilder = PersistentMenuBuilder.createMenu();
        expect(mb.addPostbackMenuItem("title", "id", {
            shareButton: false,
            data: "data",
            webviewHeightRatio: Webview.HeightRatio.TALL,
            messengerExtensions: true,
            fallbackUrl: "https://www.aiteq.com"
        })).toBe(mb);
        expect(mb.addWebUrlMenuItem("title", "https://www.aiteq.com")).toBe(mb);
        expect(mb.addSubmenu("title", PersistentMenuBuilder.createMenu())).toBe(mb);
        expect(builder.addMenu("default", false, mb)).toBe(builder);
    });

    test("build()", () => {
        expect(builder.build()).toMatchObject([{
            "locale": "default",
            "composer_input_disabled": false,
            "call_to_actions": [{
                "type": "postback",
                "title": "title",
                "payload": "{\"src\":\"persistent-menu\",\"id\":\"id\",\"data\":\"data\"}",
                "webview_share_button": "hide",
                messenger_extensions: true,
                fallback_url: "https://www.aiteq.com",
                webview_height_ratio: "tall"
            }, {
                "type": "web_url",
                "title": "title",
                "url": "https://www.aiteq.com",
                "webview_share_button": "show"
            }, {
                "type": "nested",
                "title": "title",
                "call_to_actions": [],
                "webview_share_button": "show"
            }]
        }]);
    });

    test("constructor(menu-def)", () => {
        expect(builder = new PersistentMenuBuilder(PERSISTENT_MENU[0])).toBeInstanceOf(PersistentMenuBuilder);
    });

    test("build()", () => {
        expect(builder.build()).toMatchObject([PERSISTENT_MENU_CHECK[0]]);
    });

    test("constructor([menu-defs])", () => {
        expect(builder = new PersistentMenuBuilder(PERSISTENT_MENU)).toBeInstanceOf(PersistentMenuBuilder);
    });

    test("build()", () => {
        expect(builder.build().sort(SORT_MENU_FN)).toMatchObject(PERSISTENT_MENU_CHECK);
    });
});
