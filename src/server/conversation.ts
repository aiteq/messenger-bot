import { Send } from "../fb-api/send";
import { Webhook } from "../fb-api/webhook";
import { AbstractMessageBuilder } from "../fb-api-helpers/abstract-message-builder";
import { Chat } from "./chat";
import { logger } from "../utils/logger";


export class Conversation {

	private resolve: (data: string | Webhook.QuickReplyPayload) => void;


	constructor(private partnerId: string, private chat: Chat, private sendApi: Send.Api) {}

	public async say(text: string): Promise<void> {
		return await this.sendApi.sendText(this.partnerId, text);
	}

	public ask(text: string): Promise<string> {

		this.chat.say(text);

		return new Promise((resolve: (data: string | Webhook.QuickReplyPayload) => void) => {
			this.resolve = resolve;
		});
	}

	public askWithMessage<T extends string | Webhook.QuickReplyPayload>(messageOrBuilder: Send.Message | AbstractMessageBuilder<Send.Message>): Promise<T> {

		this.chat.sendMessage(messageOrBuilder);

		return new Promise((resolve: (data: T) => void) => {
			this.resolve = resolve;
		});
	}

	public resume(data: string | Webhook.QuickReplyPayload): void {

		if (this.resolve) {

			this.resolve(data);
			this.resolve = undefined;

		} else {

			logger.warn("unable to resolve conversation, no question asked");
		}
	}

	public end(): void {
		this.resolve = undefined;
		this.chat.endConversation();
	}
}