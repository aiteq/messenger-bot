import { logger } from "../../src/logger";
import { Send, UserProfile } from "../../src/fb-api";
import { Chat } from "../../src/server/chat";
import { ChatService } from "../../src/server/chat-service";
import { TextMessageBuilder } from "../../src/fb-api-helpers/text-message-builder";

const config = require("../../work/test-config.json");
const ACCESS_TOKEN: string = config.accessToken;
const RECIPIENT_ID: string = config.recipientId;

const URL_IMAGE: string = "https://static.wixstatic.com/media/a3e73d_d0a6eaa7c6194519937b46d95dcbd97c.png";
const URL_AUDIO: string = "https://drive.google.com/uc?export=download&id=0B5o6eFQ3zIuvSzg2OVg0VlRFMUk";
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

    test("say(text)", async () => {
        let exp: jest.Matchers<void> = expect(await chat.say("text"));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
    });

    test("typingOn()", async () => {
        expect(await chat.typingOn()).toBeUndefined();
    });

    test("typingOff()", async () => {
        expect(await chat.typingOff()).toBeUndefined();
    });

    test("markSeen()", async () => {
        expect(await chat.markSeen()).toBeUndefined();
    });

    test("sendImage(recipient, url)", async () => {
        let exp: jest.Matchers<void> = expect(await chat.sendImage(URL_IMAGE, false));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
        exp.not.toHaveProperty("attachment_id");
    });

    test("sendAudio(recipient, url)", async () => {
        let exp: jest.Matchers<void> = expect(await chat.sendAudio(URL_AUDIO, false));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
        exp.not.toHaveProperty("attachment_id");
    });

    test("sendVideo(recipient, url)", async () => {
        let exp: jest.Matchers<void> = expect(await chat.sendVideo(URL_VIDEO, false));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
        exp.not.toHaveProperty("attachment_id");
    });

    test("sendFile(recipient, url)", async () => {
        let exp: jest.Matchers<void> = expect(await chat.sendFile(URL_FILE, false));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
        exp.not.toHaveProperty("attachment_id");
    });

    test("sendMessage(message)", async () => {
        let exp: jest.Matchers<void> = expect(await chat.sendMessage(MESSAGE));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
    });

    test("sendMessage(builder)", async () => {
        let exp: jest.Matchers<void> = expect(await chat.sendMessage(new TextMessageBuilder("textaaa")));
        exp.toHaveProperty("recipient_id", RECIPIENT_ID);
        exp.toHaveProperty("message_id");
    });

    test("ask(question, validator)", async () => {
        await expect(chat.ask("challenge", (text) => true)).rejects.toBe("not answered");
    });

    test("askWithMessage(question, validator)", async() => {
        await expect(chat.askWithMessage(new TextMessageBuilder("textaaa"), (text) => true)).resolves.toBe("answer");
    });

    test("answer(string, undefined)", () => {
        expect(chat.answer("answer", undefined)).toThrow("unauthorized calling of the Chat.answer");
    });

    test("answer(string, responder)", () => {
        expect(chat.answer("answer", responder)).toBeTruthy();
    });

    test("answer(string, responder) 2", () => {
        expect(chat.answer("answer", responder)).toBeFalsy();
    });

    test("answer(string, responder) 2", () => {
        expect(chat.answer("answer", responder)).toBeFalsy();
    });
});
