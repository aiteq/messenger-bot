import { Send } from "../fb-api/send";
import { AbstractBuilder } from "./abstract-builder";

/**
 * Helps to create a Login Button.
 * (see https://developers.facebook.com/docs/messenger-platform/account-linking/link-account)
 */
export class LoginButtonBuilder extends AbstractBuilder<Send.LoginButton> {

    private button: Send.LoginButton;

    /**
     * Creates an instance of LoginButtonBuilder.
     * 
     * @param {string} url 
     */
    constructor(url: string) {

        super();

        this.button = {
            type: Send.ButtonType.LOGIN,
            url: url
        };
    }

    /**
     * Returns built Login Button object.
     * 
     * @returns {Send.LoginButton} 
     */
    public build(): Send.LoginButton {
        return this.button;
    }
}
