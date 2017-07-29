import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI managing the Get Started button of the Page.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/get-started-button)
 */
export class GetStartedButtonGroup extends Group {

    constructor() {
        super("getstarted");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<string> {
        
        switch (command) {

            case "get":
                let result: any = await botUtils.getGetStartedButton();
                return result ?
                    `Get Started button is set (data: ${JSON.parse(result.payload).data || "not set"})` :
                    "Get Started button is not set";

            case "set":
                //try { options.data = JSON.parse(options.data); } catch (error) {}
                await botUtils.setGetStartedButton(options._[2]);
                return "Get Started button has been successfully set";

            case "delete":
                await botUtils.deleteGetStartedButton();
                return "Get Started button has been successfully removed";

            default:
                this.exitWithUsage();
        }
    }

    public getUsage(): string {
        return `
Manage Get Started button for the Page.
See more about Get Started button at https://developers.facebook.com/docs/messenger-platform/messenger-profile/get-started-button.

Usage:

    mbutil ${this.getName()} get [options]
        - show current setting of the Get Started button

    mbutil ${this.getName()} set ["<data>"] [options]
        - set Get Started button for the page
        - you can set an additional data (text ot json) to be send when the user clicks on the button

    mbutil ${this.getName()} delete [options]
        - remove the Get Started button for the Page
`
    }
}
