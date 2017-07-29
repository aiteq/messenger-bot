import * as minimist from "minimist";
import { MessengerProfile } from "../../fb-api/messenger-profile";
import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI for accessing Messenger Profile API.
 */
export class MessengerProfileGroup extends Group {

    constructor() {
        super("profile");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<void> {
        
        switch (command) {

            case MessengerProfileGroup.Command.SET:
                this.setField(botUtils, options);
                break;

            case MessengerProfileGroup.Command.GET:
                let setting: any = await this.getField(botUtils, options.field);
                //try { setting = JSON.parse(setting); } catch (error) {}
                if (setting) {
                    console.log(JSON.stringify(setting, null, 2));
                }
                break;

            case MessengerProfileGroup.Command.DELETE:
                await this.deleteField(botUtils, options.field);
                break;


            default:
                this.exitWithUsage();
        }
    }

    private setField(botUtils: BotUtils, options: any): void {

        switch (options.field) {

            case MessengerProfileGroup.Field.GET_STARTED_BUTTON:
                try { options.data = JSON.parse(options.data); } catch (error) {}
                botUtils.setGetStartedButton(options.data);
                break;

            case MessengerProfileGroup.Field.GREETING:
                botUtils.setGreeting(options.text, options.locale);
                break;

            case MessengerProfileGroup.Field.PERSISTENT_MENU:
                console.log("Setting Persistent Menu, due to its complexity, isn't implemented");
                break;

            default:
                this.exitWithUsage();
        }
    }

    private async getField(botUtils: BotUtils, field: string): Promise<any> {

        let result: any;

        switch (field) {

            case MessengerProfileGroup.Field.GET_STARTED_BUTTON:
                result = await botUtils.getGetStartedButton();
                if (result && result.length > 0) {
                    console.log("Get Started button is set to:");
                } else {
                    console.log("Get Started button is not set");
                    result = undefined;
                }
                break;

            case MessengerProfileGroup.Field.GREETING:
                result = await botUtils.getGreeting();
                if (result && result.length > 0) {
                    console.log("Greeting is set to:");
                } else {
                    console.log("Greeting is not set");
                    result = undefined;
                }
                break;

            case MessengerProfileGroup.Field.PERSISTENT_MENU:
                result = await botUtils.getPersistentMenu();
                if (result && result.length > 0) {
                    console.log("Persistent Menu is set to:");
                } else {
                    console.log("Persistent Menu is not set");
                    result = undefined;
                }
                break;

            default:
                this.exitWithUsage();
        }
        
        return result;
    }

    private async deleteField(botUtils: BotUtils, field: string): Promise<any> {

        let result: any;

        switch (field) {

            case MessengerProfileGroup.Field.GET_STARTED_BUTTON:
                result = await botUtils.deleteGetStartedButton();
                console.log("Get Started button successfully removed");
                break;

            case MessengerProfileGroup.Field.GREETING:
                result = await botUtils.deleteGreeting();
                console.log("Greeting successfully removed");
                break;

            case MessengerProfileGroup.Field.PERSISTENT_MENU:
                result = await botUtils.deletePersistentMenu();
                console.log("Persistent Menu successfully removed");
                break;

            default:
                this.exitWithUsage();
        }
        
        return result;
    }

    public getUsage(): string {
        return `<command> <field> [value] [options]

Provides services of Messenger Profile API.
See more about Messenger Profile at https://developers.facebook.com/docs/messenger-platform/messenger-profile.

Commands:
    ${MessengerProfileGroup.Command.GET}    - show current setting of the field
    ${MessengerProfileGroup.Command.SET}    - set the field to a new value
    ${MessengerProfileGroup.Command.ADD}    - add a new value to the field
    ${MessengerProfileGroup.Command.DELETE} - delete current value of the field

Options:
    --field <field> - a field to be set/read/deleted - always mandatory option
    --data "<data>" - an additional data (text or json object)
    --text "<text>" - a text
    --locale <locale> - see https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales

Fields:
    ${MessengerProfileGroup.Field.GET_STARTED_BUTTON} - Get Started button (options: [--data])
    getstarted - 
    ${MessengerProfileGroup.Field.GREETING} - Greeting (options: --text, [--locale])
    greeting - 
    ${MessengerProfileGroup.Field.PERSISTENT_MENU} - Persistent Menu
    menu - 
    ${MessengerProfileGroup.Field.DOMAIN_WHITELIST} - Domain Whitelist
    domainwhitelist
    ${MessengerProfileGroup.Field.COUNTRY_WHITELIST} - Audience Country Whitelist
`
    }
}

export namespace MessengerProfileGroup {

    export namespace Command {
        export const GET: string = "get";
        export const SET: string = "set";
        export const DELETE: string = "delete";
        export const ADD: string = "add";
    }

    export type Command =
        typeof Command.GET |
        typeof Command.SET |
        typeof Command.DELETE |
        typeof Command.ADD;

    export namespace Field {
        export const GET_STARTED_BUTTON: string = "getstarted";
        export const GREETING: string = "greeting";
        export const PERSISTENT_MENU: string = "menu";
        export const DOMAIN_WHITELIST: string = "domainwhitelist";
        export const COUNTRY_WHITELIST: string = "countrywhitelist";
    }

    export type Field =
        typeof Field.GET_STARTED_BUTTON |
        typeof Field.GREETING |
        typeof Field.PERSISTENT_MENU |
        typeof Field.DOMAIN_WHITELIST |
        typeof Field.COUNTRY_WHITELIST;
}
