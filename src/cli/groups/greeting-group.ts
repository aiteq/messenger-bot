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

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<any> {
        
        switch (command) {

            case "get":
                let result: any = await botUtils.getGreeting();
                return result && result.length > 0 ?
                    `Greeting is set to:\n${JSON.stringify(result, null, 2)}` :
                    "Greeting is not set";

            case "set":
                let [text, locale] = options._.slice(2);
                text || this.exitWithUsage();
                await botUtils.setGreeting(text, locale);
                return "Greeting has been successfully set";

            case "delete":
                await botUtils.deleteGreeting();
                return "Greeting has been successfully removed";

            default:
                this.exitWithUsage();
        }
    }

    protected getUsage(): string {
        return `Manage Greeting text of the Page.
See more about Greeting at https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text.

Usage:

    mbutil ${this.getName()} get [options]
        - show current Greeting

    mbutil ${this.getName()} set "<text>" [locale] [options]
        - set a new Greeting text for the given locale
        - if the locale is omitted, the text will be set as default
        - supported locales: https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales

    mbutil ${this.getName()} delete [options]
        - remove the Greeting for the Page
`
    }
}
