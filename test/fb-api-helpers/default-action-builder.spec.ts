import { DefaultActionBuilder } from "../../src/fb-api-helpers/default-action-builder";
import * as Webview from "../../src/fb-api/webview";

describe("DefaultActionBuilder", () => {

    let builder: DefaultActionBuilder;

    test("constructor(url)", () => {
        expect(builder = new DefaultActionBuilder("http://www.aiteq.com")).toBeInstanceOf(DefaultActionBuilder);
    });

    test("setFallbackUrl(url)", () => {
        expect(builder.setFallbackUrl("https://www.aiteq.international")).toBe(builder);
    });

    test("setMessengerExtensions(boolean)", () => {
        expect(builder.setMessengerExtensions(true)).toBe(builder);
    });

    test("setShowWebviewShareButton(boolean)", () => {
        expect(builder.setShowWebviewShareButton(false)).toBe(builder);
        expect(builder.setShowWebviewShareButton(true)).toBe(builder);
    });

    test("setWebviewHeightRatio(ratio)", () => {
        expect(builder.setWebviewHeightRatio(Webview.HeightRatio.FULL)).toBe(builder);
    });

    test("build()", () => {
        //console.log(JSON.stringify(builder.build(), null, 2));
        expect(builder.build()).toMatchObject({
            "type": "web_url",
            "url": "http://www.aiteq.com",
            "fallback_url": "https://www.aiteq.international",
            "messenger_extensions": true,
            "webview_share_button": "show",
            "webview_height_ratio": "full"
        });
    });
});
