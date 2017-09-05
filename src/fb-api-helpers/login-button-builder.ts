import { Send } from "../fb-api";
import { Builder } from "./builder";

/**
 * Helps to create a Login Button.
 * (see https://developers.facebook.com/docs/messenger-platform/account-linking/link-account)
 */
export class LoginButtonBuilder extends Builder<Send.LoginButton> {

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
            url
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
