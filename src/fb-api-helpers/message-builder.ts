import { Send } from "../fb-api";
import { Builder } from "./builder";

/**
 * An abstract parent class for <i>message builders</i>. The message builders help to construct
 * complex messages to be send (e.g. <i>template messages</i>).
 */
export abstract class MessageBuilder<T extends Send.Message> extends Builder<T> {

    protected message: T;

    /**
     * Adds a Quick Reply button to the message.
     *
     * @param {string} title - a title of the Quick Reply
     * @param {string} id - an ID of the button (required for proper generation of webhook events)
     * @param {(string | any)} [data] - optional data payload
     * @param {string} [imageUrl] - optional URL of an image for the Quick Reply
     * @returns {this} - for chaining
     */
    public addQuickReply(title: string, id: string, data?: string | any, imageUrl?: string): this {

        this.message.quick_replies = this.message.quick_replies || new Array<Send.QuickReply>();

        const payload: any = { id };
        data && (payload.data = typeof data === "string" ? data : JSON.stringify(data));

        const qr: Send.TextQuickReply = {
            content_type: Send.ContentType.TEXT,
            title,
            payload: JSON.stringify(payload)
        };
        imageUrl && (qr.image_url = imageUrl);

        this.message.quick_replies.push(qr);

        return this;
    }

    /**
     * Adds a Quick Reply button to quickly send user's location.
     *
     * @returns {this} - for chaining
     */
    public addLocationQuickReply(): this {

        this.message.quick_replies = this.message.quick_replies || new Array<Send.QuickReply>();

        this.message.quick_replies.push({ content_type: Send.ContentType.LOCATION });

        return this;
    }

    /**
     * Creates and returns a message object.
     *
     * @returns {T} - a message object
     */
    public build(): T {
        return this.message;
    }
}
