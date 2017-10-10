import { Send, Webhook, Webview } from "../fb-api";
import { MessageBuilder } from "./message-builder";

/**
 * An abstract parent class for template message builders.
 */
export abstract class TemplateMessageBuilder<T> extends MessageBuilder<Send.AttachmentMessage> {

    protected template: T;

    constructor() {

        super();

        this.message = {
            attachment: {
                type: Send.AttachmentType.TEMPLATE,
                payload: null
            }
        };
    }

    /**
     * Builds the template message
     *
     * @returns {Send.AttachmentMessage}
     */
    public build(): Send.AttachmentMessage {

        this.message.attachment.payload = this.template;
        return super.build();
    }
}
