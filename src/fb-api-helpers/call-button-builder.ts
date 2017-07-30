import { Send } from "../fb-api/send";
import { AbstractBuilder } from "./abstract-builder";

/**
 * Helps to create a Call Button.
 * (see https://developers.facebook.com/docs/messenger-platform/send-api-reference/call-button)
 */
export class CallButtonBuilder extends AbstractBuilder<Send.CallButton> {

    private button: Send.CallButton;

    /**
     * Creates an instance of CallButtonBuilder.
     * 
     * @param {string} title - a title of the Button, max length is 20 characters
     * @param {string} payload - a phone number, format must have "+" prefix followed by the country code, area code and local number (e.g. +16505551234)
     */
    constructor(title: string, payload: string) {

        super();
        this.button = {
            type: Send.ButtonType.CALL,
            title: title,
            payload: payload
        };
    }

    /**
     * Returns built Call Button object.
     * 
     * @returns {Send.CallButton} 
     */
    public build(): Send.CallButton {
        return this.button;
    }
}
