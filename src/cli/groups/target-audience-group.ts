import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI managing the Target Audience.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/target-audience)
 */
export class TargetAudienceGroup extends Group {

    constructor() {
        super("audience");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<string> {

        let countries: string[];

        switch (command) {

            case "get":
                const result: any = await botUtils.getTargetAudience();
                return result ?
                    `Target Audience is set to:\n${JSON.stringify(result, null, 2)}` :
                    "Target Audience is not set";

            case "open":
                await botUtils.openTargetAudience();
                return "Target Audience has been open to all";

            case "close":
                await botUtils.closeTargetAudience();
                return "Target Audience has been closed to all";

            case "whitelist":
                countries = options._.slice(2);
                if (!countries.length) {
                    return this.usage();
                }

                await botUtils.whitelistAudienceCountries(countries);
                return "Target Audience whitelist has been successfully updated";

            case "blacklist":
                countries = options._.slice(2);
                if (!countries.length) {
                    return this.usage();
                }

                await botUtils.blacklistAudienceCountries(countries);
                return "Target Audience blacklist has been successfully updated";

            case "delete":
                await botUtils.deleteTargetAudience();
                return "All Target Audience settings have been successfully removed";

            default:
                return this.usage();
        }
    }

    protected getUsage(): string {
        return `Manage Target Audience settings of the Page.
See more about Target Audience at https://developers.facebook.com/docs/messenger-platform/messenger-profile/target-audience.

Usage:

    mbutil ${this.getName()} get [options]
        - show current Target Audience settings

    mbutil ${this.getName()} open [options]
        - open Target Audience for all countries

    mbutil ${this.getName()} close [options]
        - close Target Audience for all countries

    mbutil ${this.getName()} whitelist <country> [countries] [options]
        - add one or more countries (space separated list) to the whitelist
        - use ISO 3166 Alpha-2 codes to identify the countries

    mbutil ${this.getName()} blacklist <country> [countries] [options]
        - add one or more countries (space separated list) to the blacklist
        - use ISO 3166 Alpha-2 codes to identify the countries

    mbutil ${this.getName()} delete [options]
        - remove all Target Audience settings
`;
    }
}
