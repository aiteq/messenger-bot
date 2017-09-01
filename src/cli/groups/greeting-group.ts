import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI managing the Greeting of the Page.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text)
 */
export class GreetingGroup extends Group {

    constructor() {
        super("greeting");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<string> {

        switch (command) {

            case "get":
                const result: any = await botUtils.getGreeting();
                return result && result.length > 0 ?
                    `Greeting is set to:\n${JSON.stringify(result, null, 2)}` :
                    "Greeting is not set";

            case "add":
                if (!options._[2]) {
                    return this.usage();
                }

                await botUtils.setGreeting(options._[2], options.locale);
                return "Greeting has been successfully added";

            case "delete":
                await botUtils.deleteGreeting();
                return "Greeting has been successfully removed";

            default:
                return this.usage();
        }
    }

    protected getUsage(): string {
        return `Manage Greeting text of the Page.
See more about Greeting at https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text.

Usage:

    mbutil ${this.getName()} get [options]
        - show current Greeting

    mbutil ${this.getName()} add "<text>" [--locale <locale>] [options]
        - add a new Greeting text for the given locale
        - if the --locale is omitted, the text will be set as default

    mbutil ${this.getName()} delete [options]
        - remove the Greeting for the Page

Options:
    --locale <locale> - supported locales: https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales
`;
    }
}
