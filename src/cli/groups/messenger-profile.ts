import * as minimist from "minimist";
import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI for accessing Messenger Profile API.
 */
export class MessengerProfile extends Group {

    constructor() {
        super("profile");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<void> {
        
        switch (command) {

            case "set":
                this.setField(botUtils, options);
                break;

            case "get":
                let setting: any = await this.getField(botUtils, options);
                try { setting = JSON.parse(setting); } catch (error) {}
                console.log("\n", setting);
                break;

            case "delete":
                //this.deleteField(botUtils, options);
                break;

            default:
                this.printUsage();
        }
    }

    private setField(botUtils: BotUtils, options: any): void {

        switch (options.field) {

            case "getstarted":
                try { options.data = JSON.parse(options.data); } catch (error) {}
                botUtils.setGetStartedButton(options.data);
                break;

            default:
                this.printUsage();
        }
    }

    private async getField(botUtils: BotUtils, options: any): Promise<any> {

        switch (options.field) {

            case "getstarted":
                return await botUtils.getGetStartedButton();

            default:
                this.printUsage();
        }
    }

    public getUsage(): string {
        return `<command> [options]

Provides services of Messenger Profile API.
See more about Messenger Profile at https://developers.facebook.com/docs/messenger-platform/messenger-profile.

Commands:
    set    - set a Messenger Profile field
    get    - show current setting of the field
    delete - delete current setting of the field

Options:
    --field <field> - a field to be set/read/deleted - always mandatory option
    --data "<data>" - an additional data (text or json object)

Fields:
    getstarted - Get Started button (options: --data)
`
    }
}
