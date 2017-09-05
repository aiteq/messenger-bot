import { Send, UserProfile, Webhook } from "../fb-api";
import { MessageBuilder } from "../fb-api-helpers/message-builder";
import { logger } from "../logger";
import { ChatService } from "./chat-service";

/**
 * Provides methods for two-way bot-to-user communication. An instance of [[Chat]] is always passed to
 * hear and event handlers to be used for interaction with the user.
 * <b>Note:</b> all methods are non-blocking and call underlaying API asynchronously.
 */
export class Chat {

    private responder: {
        resolve: (data: string | Webhook.QuickReplyPayload) => void,
        reject: (reason?: any) => void,
        validator?: (text: string) => void,
        challenge?: string | Send.Message
    };

    private timeout: Promise<any>;

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
     * @returns {Promise<Send.Response>}
     */
    public async say(text: string): Promise<Send.Response> {

        // wait if requested
        this.timeout && await this.timeout;

        return await this.sendApi.sendText(this.partnerId, text);
    }

    /**
     * Turns typing indicator ON for 20 seconds or next message.
     *
     * @returns {Promise<void>}
     */
    public async typingOn(): Promise<void> {

        // wait if requested
        this.timeout && await this.timeout;

        return await this.sendApi.typingOn(this.partnerId);
    }

    /**
     * Turns typing indicator OFF.
     *
     * @returns {Promise<void>}
     */
    public async typingOff(): Promise<void> {

        // wait if requested
        this.timeout && await this.timeout;

        return await this.sendApi.typingOff(this.partnerId);
    }

    /**
     * Marks the last sent message as read.
     *
     * @returns {Promise<void>}
     */
    public async markSeen(): Promise<void> {

        // wait if requested
        this.timeout && await this.timeout;

        return await this.sendApi.markSeen(this.partnerId);
    }

    /**
     * Sends an image.
     *
     * @param {string} url - a URL of the image file
     * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
     * @returns {Promise<Send.Response>}
     */
    public async sendImage(url: string, reusable: boolean = false): Promise<Send.Response> {

        // wait if requested
        this.timeout && await this.timeout;

        return await this.sendApi.sendImage(this.partnerId, url, reusable);
    }

    /**
     * Sends an audio.
     *
     * @param {string} url - a URL of the audio file
     * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
     * @returns {Promise<Send.Response>}
     */
    public async sendAudio(url: string, reusable: boolean = false): Promise<Send.Response> {

        // wait if requested
        this.timeout && await this.timeout;

        return await this.sendApi.sendAudio(this.partnerId, url, reusable);
    }

    /**
     * Sends a video.
     *
     * @param {string} url - a URL of the video file
     * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
     * @returns {Promise<Send.Response>}
     */
    public async sendVideo(url: string, reusable: boolean = false): Promise<Send.Response> {

        // wait if requested
        this.timeout && await this.timeout;

        return await this.sendApi.sendVideo(this.partnerId, url, reusable);
    }

    /**
     * Sends a file.
     *
     * @param {string} url - a URL of the file
     * @param {boolean} [reusable=false] - if <code>true</code> the attachment will be marked as reusable
     * @returns {Promise<Send.Response>}
     */
    public async sendFile(url: string, reusable: boolean = false): Promise<Send.Response> {

        // wait if requested
        this.timeout && await this.timeout;

        return await this.sendApi.sendFile(this.partnerId, url, reusable);
    }

    /**
     * Sends a message prepared manually or using message builder.
     *
     * @param {(Send.Message | MessageBuilder<Send.Message>)} messageOrBuilder - a structured message or message builder
     * @returns {Promise<Send.Response>}
     */
    public async sendMessage(messageOrBuilder: Send.Message | MessageBuilder<Send.Message>): Promise<Send.Response> {

        // wait if requested
        this.timeout && await this.timeout;

        return await this.sendApi.send(
            this.partnerId, messageOrBuilder instanceof MessageBuilder ?
                messageOrBuilder.build() :
                messageOrBuilder);
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

        // wait if requested
        this.timeout && await this.timeout;

        if (this.responder) {
            logger.warn("previous asking not answered");
            this.responder.reject("not answered");
        }

        // await for the message to be send, so you can be sure the user is responding to your question
        await this.say(challenge);

        return new Promise((resolve: (data: string) => void, reject: (reason?: any) => void) => {

            // This is maybe the most interested part of conversation's implementation.
            // Because the response will arrive in one of the subsequent requests, we must remember
            // this Promise's resolve callback. Its later execution will be made by the resume() method.

            this.responder = { resolve, reject, validator, challenge };
        });
    }

    /**
     * Asks the user with a message prepared manually or using message builder. It's necessary when
     * we want to force the user to response using QUICK REPLY buttons.
     * If a validator is specified, the bot will automatically repeat the challenge until valid response.
     *
     * @param {(Send.Message | MessageBuilder<Send.Message>)} messageOrBuilder - structured message or message builder
     * @param {(text: string) => boolean} [validator] - optional validator function - returns `true` if the input is valid
     * @returns {Promise<T>}
     */
    public async askWithMessage<T extends string | Webhook.QuickReplyPayload>(messageOrBuilder: Send.Message | MessageBuilder<Send.Message>, validator?: (text: string) => boolean): Promise<T> {

        // wait if requested
        this.timeout && await this.timeout;

        const challenge: Send.Message = messageOrBuilder = messageOrBuilder instanceof MessageBuilder ? messageOrBuilder.build() : messageOrBuilder

        if (this.responder) {
            logger.warn("previous asking not answered");
            this.responder.reject("not answered");
        }

        // await for the message to be send, so you can be sure the user is responding to your question
        await this.sendMessage(challenge);

        return new Promise((resolve: (data: T) => void, reject: (reason?: any) => void) => {
            this.responder = { resolve, reject, validator, challenge };
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
    public answer(data: string | Webhook.QuickReplyPayload, chatService: ChatService): boolean {

        if (!chatService) {
            throw new Error("unauthorized calling of the Chat.answer");
        }

        if (this.responder) {

            if (typeof data === "string" && this.responder.validator && !this.responder.validator(data)) {

                // validation of the input failed, repeat the challenge

                logger.debug("input validation failed, repeating the challenge");

                if (typeof this.responder.challenge === "string") {
                    this.say(this.responder.challenge);
                } else {
                    this.sendMessage(this.responder.challenge);
                }

            } else {

                // the question answered, clear the callbacks

                logger.debug("the question asked has been answered");

                this.responder.resolve(data);
                this.responder = undefined;
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

    /**
     * Wait before next action.
     *
     * @param {number} seconds - lenght of timeout
     * @returns {this} - for chaining
     */
    public wait(seconds: number): this {
        this.timeout = new Promise((resolve) => {
            setTimeout(() => {
                this.timeout = undefined;
                resolve();
            }, seconds * 1000);
        });
        return this;
    }
}
