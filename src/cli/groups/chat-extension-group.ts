import { BotUtils } from "../../utils/bot-utils";
import { cliout } from "../cli-logger";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI managing the Chat Extension home URL.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/home-url)
 */
export class ChatExtensionGroup extends Group {

    constructor() {
        super("chatext");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<string> {

        switch (command) {

            case "get":
                const result: any = await botUtils.getChatExtensionHomeUrl();
                return result ?
                    `Chat Extension home URL is set to:\n${JSON.stringify(result, null, 2)}` :
                    "Chat Extension home URL is not set";

            case "set":
                if (!options._[2]) {
                    return this.usage();
                }

                await botUtils.setChatExtensionHomeUrl(options._[2], !!options.inTest, !options.hideShareButton, cliout);
                return "Chat Extension home URL has been successfully set";

            case "delete":
                await botUtils.deleteChatExtensionHomeUrl();
                return "Chat Extension home URL has been successfully removed";

            default:
                return this.usage();
        }
    }

    protected getUsage(): string {
        return `Manage Chat Extension home URL.
See more at https://developers.facebook.com/docs/messenger-platform/messenger-profile/home-url.

Usage:

    mbutil ${this.getName()} get [options]
        - show current Chat Extension home URL

    mbutil ${this.getName()} set <url> [options]
        - set a new Chat Extension home URL (options: --inTest, --hideShareButton)

    mbutil ${this.getName()} delete [options]
        - remove the current Chat Extension home URL

Options:
    --inTest - controls whether public users can see the Chat Extension
    --hideShareButton - controls whether the share button in the webview is enabled
`;
    }
}
