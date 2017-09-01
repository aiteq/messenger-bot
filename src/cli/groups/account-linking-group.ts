import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI managing the Account Linking URL.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/account-linking-url)
 */
export class AccountLinkingGroup extends Group {

    constructor() {
        super("accountlinking");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<string> {

        switch (command) {

            case "get":
                const result: any = await botUtils.getAccountLinkingUrl();
                return result ?
                    `Account Linking URL is set to: ${result}` :
                    "Account Linking URL is not set";

            case "set":
                if (!options._[2]) {
                    return this.usage();
                }
                await botUtils.setAccountLinkingUrl(options._[2]);
                return "Account Linking URL has been successfully set";

            case "delete":
                await botUtils.deleteAccountLinkingUrl();
                return "Account Linking URL has been successfully removed";

            default:
                return this.usage();
        }
    }

    protected getUsage(): string {
        return `Manage Account Linking URL.
See more at https://developers.facebook.com/docs/messenger-platform/messenger-profile/account-linking-url.

Usage:

    mbutil ${this.getName()} get [options]
        - show current Account Linking URL

    mbutil ${this.getName()} set <url> [options]
        - set a new Account Linking URL

    mbutil ${this.getName()} delete [options]
        - remove the current Account Linking URL
`;
    }
}
