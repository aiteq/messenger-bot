import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI managing the Domain Whitelist.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/domain-whitelisting)
 */
export class DomainsGroup extends Group {

    constructor() {
        super("domains");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<string> {

        switch (command) {

            case "get":
                const result: any = await botUtils.getDomainWhitelist();
                return result && result.length > 0 ?
                    `Whitelisted domains:\n\n  ${result.join("\n  ")}` :
                    "No domains whitelisted";

            case "add":
                const domains: string[] = options._.slice(2);
                if (!domains.length) {
                    return this.usage();
                }

                await botUtils.whitelistDomains(domains);
                return "Domain Whitelist has been successfully updated";

            case "delete":
                await botUtils.deleteDomainWhitelist();
                return "All domains have been successfully removed from whitelist";

            default:
                return this.usage();
        }
    }

    protected getUsage(): string {
        return `Manage Domain Whitelist of the Page.
See more about Domain Whitelist at https://developers.facebook.com/docs/messenger-platform/messenger-profile/domain-whitelisting.

Usage:

    mbutil ${this.getName()} get [options]
        - show current whitelisted domains

    mbutil ${this.getName()} add <domain> [domains] [options]
        - add one or more domains (space separated list) to the whitelist

    mbutil ${this.getName()} delete [options]
        - remove all domains from the whitelist
`;
    }
}
