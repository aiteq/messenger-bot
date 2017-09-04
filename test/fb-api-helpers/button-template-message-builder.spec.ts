import { ButtonTemplateMessageBuilder } from "../../src/fb-api-helpers/button-template-message-builder";

describe("ButtonTemplateMessageBuilder", () => {

    let builder: ButtonTemplateMessageBuilder, button;

    test("constructor(text)", () => {
        expect(builder = new ButtonTemplateMessageBuilder("Text")).toBeInstanceOf(ButtonTemplateMessageBuilder);
    });

    test("addButton(call-button)", () => {
        button = ButtonTemplateMessageBuilder.createCallButton("title", "+420123456789");
        expect(builder.addButton(button)).toBe(builder);
    });

    test("addButton(login-button)", () => {
        button = ButtonTemplateMessageBuilder.createLoginButton("https://www.aiteq.com");
        expect(builder.addButton(button)).toBe(builder);
    });

    test("addButton(logout-button)", () => {
        button = ButtonTemplateMessageBuilder.createLogoutButton();
        expect(builder.addButton(button)).toBe(builder);
    });

    test("addButton(postback-button) (not allowed)", () => {
        button = ButtonTemplateMessageBuilder.createPostbackButton("title", "id", "data");
        expect(() => builder.addButton(button)).toThrow("couldn't add next Button to Button Tepmlate message (only 1-3 buttons is allowed)");
    });

    test("addButton(postback-button)", () => {
        expect(builder = new ButtonTemplateMessageBuilder("Text")).toBeInstanceOf(ButtonTemplateMessageBuilder);
        button = ButtonTemplateMessageBuilder.createPostbackButton("title", "id", "data");
        expect(builder.addButton(button)).toBe(builder);
    });

    test("addButton(share-button)", () => {
        button = ButtonTemplateMessageBuilder.createShareButton();
        expect(builder.addButton(button)).toBe(builder);
    });

    test("addButton(url-button)", () => {
        button = ButtonTemplateMessageBuilder.createUrlButton("title", "https://www.aiteq.com");
        expect(builder.addButton(button)).toBe(builder);
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
