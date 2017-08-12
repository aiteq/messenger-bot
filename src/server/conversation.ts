import { Send } from "../fb-api/send";
import { Webhook } from "../fb-api/webhook";
import { MessageBuilder } from "../fb-api-helpers/message-builder";
import { logger } from "../logger";
import { Chat } from "./chat";
import { ResponderService } from "./responder-service";


/**
 * Allows synchronous, contextual two-way interaction between the bot and user.
 * The instance is created calling the Chat.startConversation() method.
 * <b>Note:</b> In this time, only TEXT and QUICK REPLY messages can be used as parts of conversation.
 */
export class Conversation {

	private resolve: (data: string | Webhook.QuickReplyPayload) => void;

	/**
     * Creates an instance of Conversation.
     * @param {string} partnerId 
     * @param {Chat} chat 
     * @param {Send.Api} sendApi 
     */
    constructor(private partnerId: string, private chat: Chat, private sendApi: Send.Api) {}

	/**
     * Sends a plain TEXT message. Unlike the Chat.say() this method return a Promise so you can
     * wait for the message to be send.
     * 
     * @param {string} text - a text to be send
     * @returns {Promise<void>} 
     */
    public async say(text: string): Promise<void> {
		return await this.sendApi.sendText(this.partnerId, text);
	}

	/**
     * Asks the user with a plain TEXT message and returns user's response (TEXT or QUICK REPLY).
     * 
     * @param {string} text - a question
     * @returns {Promise<string>} 
     */
    public async ask(text: string): Promise<string> {

        // await for the message to be send, so you can be sure the user is responding to your question
		await this.say(text);

		return new Promise((resolve: (data: string) => void) => {

            // This is maybe the most interested part of conversation's implementation.
            // Because the response will arrive in one of the subsequent requests, we must remember
            // this Promise's resolve callback. Its later execution will be made by the resume() method.

            this.resolve = resolve;
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
		await this.chat.sendMessage(messageOrBuilder);

		return new Promise((resolve: (data: T) => void) => {
			this.resolve = resolve;
		});
	}

    /**
     * Resumes the conversation executing the saved resolve callback.
     * 
     * @param {(string | Webhook.QuickReplyPayload)} data - user's response
     * @param {ResponderService} responder - the method can be called only from ResponderService
     */
    public resume(data: string | Webhook.QuickReplyPayload, responder: ResponderService): void {

        if (!responder) {
            throw new Error("unauthorized calling of the Conversation.resume");
        }

		if (this.resolve) {

			this.resolve(data);
			this.resolve = undefined;

		} else {

            // received a message within an active conversation but without previously asking
            // two possible causes:
            // - the user sent unexpected message during conversation
            // - the implementator didn't call Conversation.end()
            // anyway, the message will be discarded, so let's log a warning

            logger.warn("received message within conversation but without any question asked (check whether the Conversation.end() is called on the end of conversation)");
            logger.warn("discarded message:", data);
		}
	}

	/**
     * Ends the conversation.
     */
    public end(): void {
		this.resolve = undefined;
		this.chat.endConversation();
	}
}