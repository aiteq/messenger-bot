import { Send } from "../fb-api";
import { MessageBuilder } from "./message-builder";

/**
 * Helps to build a Text Message.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/text-message)
 */
export class TextMessageBuilder extends MessageBuilder<Send.TextMessage> {

    /**
     * Creates an instance of TextMessageBuilder.
     *
     * @param {string} text - a text of the message
     */
    constructor(text: string) {

        super();

        this.message = { text };
    }
}
