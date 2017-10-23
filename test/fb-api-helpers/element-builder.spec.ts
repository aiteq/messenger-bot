import { ElementBuilder } from "../../src/fb-api-helpers/element-builder";
import { ChatExtension } from "../../src/server/chat-extension";

describe("ElementBuilder", () => {

    let b: ElementBuilder;

    test("constructor(title)", () => {
        expect(b = new ElementBuilder("title")).toBeInstanceOf(ElementBuilder);
    });

    test("setSubtitle()", () => {
        expect(b.setSubtitle("subtitle")).toBe(b);
    });

    test("setImageUrl()", () => {
        expect(b.setImageUrl("http://www.google.com/a/cpanel/aiteq.com/images/logo.gif?service=google_default")).toBe(b);
    });

    test("setDefaultAction()", () => {
        expect(b.setDefaultAction("https://www.aiteq.com")).toBe(b);
    });

    test("setDefaultAction()", () => {
        expect(b.setExtensionDefaultAction(new (class extends ChatExtension {
            getModel(): any { return {}; }
        })("ext"))).toBe(b);
    });
});
