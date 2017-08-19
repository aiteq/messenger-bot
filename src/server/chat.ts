import { Send } from "../fb-api/send";
import { Webhook } from "../fb-api/webhook";
import { UserProfile } from "../fb-api/user-profile";
import { MessageBuilder } from "../fb-api-helpers/message-builder";
import { logger } from "../logger";
import { ResponderService } from "./responder-service";


/**
 * Provides methods for two-way bot-to-user communication. An instance of [[Chat]] is always passed to
 * hear and event handlers to be used for interaction with the user.
 * <b>Note:</b> all methods are non-blocking and call underlaying API asynchronously.
 */
export class Chat {

    private callbacks: {
        resolve: (data: string | Webhook.QuickReplyPayload) => void,
        validator?: (text: string) => void,
        challenge?: string
    };

    /**
     * Creates an instance of [[Chat]]. Instances are managed by the [[ResponderService]] so
     * don't create one directly.
     * 
     * @param {string} partnerId 
     * @param {Send.Api} sendApi 
     * @param {UserProfile.Api} userProfileApi 
     */
    constructor(protected partnerId: string, protected sendApi: Send.Api, protected userProfileApi: UserProfile.Api) { }

    /**
     * The primary way to send a plain TEXT message to the user.
     * 
     * @param {string} text - a text to be send
     * @returns {Promise<void>}
     */
    public async say(text: string): Promise<void> {
        return await this.sendApi.sendText(this.partnerId, text);
    }

    /**
     * Turns typing indicator ON for 20 seconds or next message.
     * 
     * @returns {Promise<void>}
     */
    public async typingOn(): Promise<void> {
        return await this.sendApi.typingOn(this.partnerId);
    }

    /**
     * Turns typing indicator OFF.
     * 
     * @returns {Promise<void>}
     */
    public async typingOff(): Promise<void> {
        return await this.sendApi.typingOff(this.partnerId);
    }

    /**
     * Marks the last sent message as read.
     * 
     * @returns {Promise<void>}
     */
    public async markSeen(): Promise<void> {
        return await this.sendApi.markSeen(this.partnerId);
    }

    /**
     * Sends an image.
     * 
     * @param {string} url - a URL of the image file
     * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
     * @returns {Promise<string>} - an attachment ID
     */
    public async sendImage(url: string, reusable: boolean = false): Promise<string> {
        return await this.sendApi.sendImage(this.partnerId, url, reusable);
    }

    /**
     * Sends an audio.
     * 
     * @param {string} url - a URL of the audio file
     * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
     * @returns {Promise<string>} - an attachment ID
     */
    public async sendAudio(url: string, reusable: boolean = false): Promise<string> {
        return await this.sendApi.sendAudio(this.partnerId, url, reusable);
    }

    /**
     * Sends a video.
     * 
     * @param {string} url - a URL of the video file
     * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
     * @returns {Promise<string>} - an attachment ID
     */
    public async sendVideo(url: string, reusable: boolean = false): Promise<string> {
        return await this.sendApi.sendVideo(this.partnerId, url, reusable);
    }

    /**
     * Sends a file.
     * 
     * @param {string} url - a URL of the file
     * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
     * @returns {Promise<string>} - an attachment ID
     */
    public async sendFile(url: string, reusable: boolean = false): Promise<string> {
        return await this.sendApi.sendFile(this.partnerId, url, reusable);
    }

    /**
     * Sends a message prepared manually or using message builder.
     * 
     * @param {(Send.Message | MessageBuilder<Send.Message>)} messageOrBuilder - a structured message or message builder
     * @returns {Promise<string>} - an attachment ID
     */
    public async sendMessage(messageOrBuilder: Send.Message | MessageBuilder<Send.Message>): Promise<void> {
        return await this.sendApi.send(this.partnerId, messageOrBuilder);
    }

	/**
     * Asks the user with a plain TEXT message and returns user's response (TEXT or QUICK REPLY).
     * If a validator is specified, the bot will automatically repeat the challenge until valid response.
     * 
     * @param {string} challenge - a question
     * @param {(text: string) => boolean} [validator] - optional validator function - returns `true` if the input is valid
     * @returns {Promise<string>} 
     */
    public async ask(challenge: string, validator?: (text: string) => boolean): Promise<string> {

        // await for the message to be send, so you can be sure the user is responding to your question
        await this.say(challenge);

        return new Promise((resolve: (data: string) => void) => {

            // This is maybe the most interested part of conversation's implementation.
            // Because the response will arrive in one of the subsequent requests, we must remember
            // this Promise's resolve callback. Its later execution will be made by the resume() method.

            this.callbacks = { resolve, validator, challenge };
        });
    }

    /**
     * Asks the user with a message prepared manually or using message builder. It's necessary when
     * we want to force the user to response using QUICK REPLY buttons.
     * 
     * @param {(Send.Message | MessageBuilder<Send.Message>)} messageOrBuilder - structured message or message builder
     * @returns {Promise<T>}
     */
    public async askWithMessage<T extends string | Webhook.QuickReplyPayload>(messageOrBuilder: Send.Message | MessageBuilder<Send.Message>): Promise<T> {

        // await for the message to be send, so you can be sure the user is responding to your question
        await this.sendMessage(messageOrBuilder);

        return new Promise((resolve: (data: T) => void) => {
            this.callbacks = { resolve };
        });
    }

    /**
     * For internal use only.
     * Resumes the conversation executing the saved resolve callback or repeating the original
     * challenge if the response is not valid
     * 
     * @param {(string | Webhook.QuickReplyPayload)} data - user's response
     * @param {ResponderService} responder - the method can be called only from ResponderService
     * @returns {boolean} - true if the incoming message is an answer to previously asked question
     */
    public answer(data: string | Webhook.QuickReplyPayload, responder: ResponderService): boolean {

        if (!responder) {
            throw new Error("unauthorized calling of the Chat.answer");
        }

        if (this.callbacks) {

            if (typeof data === "string" && this.callbacks.validator && !this.callbacks.validator(data)) {

                // validation of the input failed, repeat the challenge

                logger.debug("input validation failed, repeating the challenge");

                this.say(this.callbacks.challenge);

            } else {

                // the question answered, clear the callbacks

                logger.debug("the question asked has been answered")

                this.callbacks.resolve(data);
                this.callbacks = undefined;
            }

            return true;
        }

        return false;
    }

    /**
    * Returns user's profile containing public information.
    * 
    * @returns {Promise<UserProfile.Response>} - user's public profile information
    */
    public getUserProfile(): Promise<UserProfile.Response> {
        return this.userProfileApi.getUserProfile(this.partnerId);
    }

    /**
     * Returns an ID of the chat partner.
     * 
     * @returns {string} 
     */
    public getPartnerId(): string {
        return this.partnerId;
    }
}