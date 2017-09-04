import { UrlButtonBuilder } from "../../src/fb-api-helpers/url-button-builder";
import * as Webview from "../../src/fb-api/webview";

describe("UrlButtonBuilder", () => {

    let builder: UrlButtonBuilder;

    test("constructor(title, url)", () => {
        expect(builder = new UrlButtonBuilder("title", "url")).toBeInstanceOf(UrlButtonBuilder);
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
            "title": "title",
            "url": "url",
            "fallback_url": "https://www.aiteq.international",
            "messenger_extensions": true,
            "webview_share_button": "show",
            "webview_height_ratio": "full"
        });
    });
});
