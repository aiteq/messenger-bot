import { logger } from "../../src/logger";
import { Send, UserProfile } from "../../src/fb-api";
import { Chat } from "../../src/server/chat";
import { ChatService } from "../../src/server/chat-service";
import { TextMessageBuilder } from "../../src/fb-api-helpers/text-message-builder";

const config = require("../../work/test-config.json");
const ACCESS_TOKEN: string = config.accessToken;
const RECIPIENT_ID: string = config.recipientId;

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";
const URL_AUDIO: string = "https://drive.google.com/uc?export=download&id=0B5o6eFQ3zIuvcDFmQ0ZnamUyQU0";
//const URL_AUDIO: string = "https://drive.google.com/uc?export=download&id=0B5o6eFQ3zIuvSzg2OVg0VlRFMUk";
const URL_VIDEO: string = "https://static.videezy.com/system/resources/previews/000/005/499/original/Earth_Spin_In_Hands.mp4";
const URL_FILE: string = "https://gradcollege.okstate.edu/sites/default/files/PDF_linking.pdf";

const MESSAGE: Send.Message = {
    text: "texttt"
};

describe("Chat", () => {

    let chat: Chat;
    const responder: ChatService = new ChatService(ACCESS_TOKEN);

    logger.level = "OFF";

    test("constructor(partnerId, sendApi, userProfileApi)", () => {
        expect(chat = new Chat(RECIPIENT_ID, new Send.Api(ACCESS_TOKEN), new UserProfile.Api(ACCESS_TOKEN))).toBeInstanceOf(Chat);
    });

    test("wait(seconds)", () => {
        expect(chat.wait(1)).toBe(chat);
    });

    test("say(text)", async () => {
        let exp: jest.Matchers<void> = expect(await chat.say("text"));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
    });

    test("typingOn()", async () => {
        chat.wait(0);
        expect(await chat.typingOn()).toHaveProperty("recipient_id", RECIPIENT_ID);
    });

    test("typingOff()", async () => {
        chat.wait(0);
        expect(await chat.typingOff()).toHaveProperty("recipient_id", RECIPIENT_ID);
    });

    test("markSeen()", async () => {
        chat.wait(0);
        expect(await chat.markSeen()).toHaveProperty("recipient_id", RECIPIENT_ID);
    });

    test("sendImage(recipient, url)", async () => {
        chat.wait(0);
        let exp: jest.Matchers<void> = expect(await chat.sendImage(URL_IMAGE, true));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
        await expect(chat.sendImage(undefined)).rejects.toBe("no URL");
        await expect(chat.sendImage(undefined, false)).rejects.toBe("no URL");
    });

    test("sendAudio(recipient, url)", async () => {
        chat.wait(0);
        let exp: jest.Matchers<void> = expect(await chat.sendAudio(URL_AUDIO, true));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
        await expect(chat.sendAudio(undefined)).rejects.toBe("no URL");
        await expect(chat.sendAudio(undefined, false)).rejects.toBe("no URL");
    });

    test("sendVideo(recipient, url)", async () => {
        chat.wait(0);
        let exp: jest.Matchers<void> = expect(await chat.sendVideo(URL_VIDEO, true));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
        await expect(chat.sendVideo(undefined)).rejects.toBe("no URL");
        await expect(chat.sendVideo(undefined, false)).rejects.toBe("no URL");
    });

    test("sendFile(url, reusable)", async () => {
        chat.wait(0);
        let exp: jest.Matchers<void> = expect(await chat.sendFile(URL_FILE, true));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
        await expect(chat.sendFile(undefined)).rejects.toBe("no URL");
        await expect(chat.sendFile(undefined, false)).rejects.toBe("no URL");
    });

    test("sendMessage(message)", async () => {
        chat.wait(0);
        let exp: jest.Matchers<void> = expect(await chat.sendMessage(MESSAGE));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
    });

    test("sendMessage(builder)", async () => {
        chat.wait(0);
        let exp: jest.Matchers<void> = expect(await chat.sendMessage(new TextMessageBuilder("textaaa")));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
    });

    test("ask(question, validator)", async () => {
        chat.wait(0);
        setTimeout(() => {
            expect(chat.ask("challenge", (text) => true)).rejects.toBe("previous asking not answered yet");
            expect(chat.answer("invalid answer", responder)).toBeTruthy();
            expect(chat.answer("answer", responder)).toBeTruthy();
        }, 1000);
        expect(await chat.ask("challenge", (text) => text === "answer")).toBe("answer");
    });

    test("askWithMessage(question, validator)", async () => {
        chat.wait(0);
        setTimeout(() => {
            expect(chat.askWithMessage(new TextMessageBuilder("textaaa").build(), (text) => true)).rejects.toBe("previous asking not answered yet");
            expect(chat.answer("invalid answer", responder)).toBeTruthy();
            expect(chat.answer("answer", responder)).toBeTruthy();
        }, 2000);
        expect(await chat.askWithMessage(new TextMessageBuilder("textaaa"), (text) => text === "answer")).toBe("answer");
    });

    test("answer(string, undefined)", () => {
        expect(() => chat.answer("answer", undefined)).toThrow("unauthorized calling of the Chat.answer");
    });

    test("answer(string, responder) (w/o asking)", () => {
        expect(chat.answer("answer", responder)).toBeFalsy();
    });

    test("getUserProfile()", async () => {
        expect(await chat.getUserProfile()).toHaveProperty("id", RECIPIENT_ID);
    });

    test("getPartnerId()", () => {
        expect(chat.getPartnerId()).toBe(RECIPIENT_ID);
    });
});
