import { Send } from "../fb-api/send";
import { AbstractBuilder } from "./abstract-builder";

/**
 * Helps to create a Login Button.
 * (see https://developers.facebook.com/docs/messenger-platform/account-linking/unlink-account)
 */
export class LogoutButtonBuilder extends AbstractBuilder<Send.LogoutButton> {

    private button: Send.LogoutButton;

    /**
     * Creates an instance of LogoutButtonBuilder.
     */
    constructor() {

        super();

        this.button = {
            type: Send.ButtonType.LOGOUT
        };
    }

    /**
     * Returns built Logout Button object.
     * 
     * @returns {Send.LogoutButton} 
     */
    public build(): Send.LogoutButton {
        return this.button;
    }
}
