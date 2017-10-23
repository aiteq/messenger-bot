import { ButtonTemplateMessageBuilder } from "../../src/fb-api-helpers/button-template-message-builder";
import { GenericTemplateMessageBuilder } from "../../src/fb-api-helpers/generic-template-message-builder";

describe("ButtonTemplateMessageBuilder", () => {

    let builder: ButtonTemplateMessageBuilder, button;

    test("constructor(text)", () => {
        expect(builder = new ButtonTemplateMessageBuilder("Text")).toBeInstanceOf(ButtonTemplateMessageBuilder);
    });

    test("addCallButton()", () => {
        expect(builder.addCallButton("title", "+420123456789")).toBe(builder);
    });

    test("addLoginButton()", () => {
        expect(builder.addLoginButton("https://www.aiteq.com")).toBe(builder);
    });

    test("addLogoutButton()", () => {
        expect(builder.addLogoutButton()).toBe(builder);
    });

    test("addPostbackButton() (not allowed)", () => {
        expect(() => builder.addPostbackButton("title", "id", "data")).toThrow("couldn't add next Button to Button Tepmlate message (only 1-3 buttons is allowed)");
    });

    test("addPostbackButton()", () => {
        expect(builder = new ButtonTemplateMessageBuilder("Text")).toBeInstanceOf(ButtonTemplateMessageBuilder);
        expect(builder.addPostbackButton("title", "id", "data")).toBe(builder);
    });

    test("addShareButton()", () => {
        expect(builder.addShareButton(new GenericTemplateMessageBuilder())).toBe(builder);
    });

    test("addUrlButton()", () => {
        expect(builder.addUrlButton("title", "https://www.aiteq.com")).toBe(builder);
    });

    test("build()", () => {
        expect(builder.build()).toMatchObject({
            attachment: {
                type: "template",
                payload: {
                    template_type: "button",
                    text: "Text",
                    buttons: [{
                        type: "postback",
                        title: "title",
                        payload: "{\"src\":\"postback-button\",\"id\":\"id\",\"data\":\"data\"}"
                    }, {
                        type: "element_share"
                    }, {
                        type: "web_url",
                        title: "title",
                        url: "https://www.aiteq.com"
                    }]
                }
            }
        });
    });
});
