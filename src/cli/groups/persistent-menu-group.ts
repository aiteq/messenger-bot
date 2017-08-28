import * as fs from "async-file";
import { PersistentMenuBuilder } from "../../fb-api-helpers/persistent-menu-builder";
import { Menu } from "../../fb-api-helpers/persistent-menu-builder-menu";
import * as MessengerProfile from "../../fb-api/messenger-profile";
import { BotUtils } from "../../utils/bot-utils";
import { Group } from "../group";

/**
 * A <i>group plugin</i> of mbutil CLI managing the Persistent Menu of the Page.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu)
 */
export class PersistentMenuGroup extends Group {

    constructor() {
        super("menu");
    }

    public async execute(command: string, botUtils: BotUtils, options: any): Promise<string> {

        switch (command) {

            case "get":
                const result: any = await botUtils.getPersistentMenu();
                return result ?
                    `Persistent menu is set: ${JSON.stringify(result, null, 2)}` :
                    "Persistent Menu is not set";

            case "set":
                options.file || this.exitWithUsage();
                await botUtils.setPersistentMenu(await this.readFromFile(options.file));
                return "Persistent Menu has been successfully set";

            case "delete":
                await botUtils.deletePersistentMenu();
                return "Persistent Menu has been successfully removed";

            default:
                this.exitWithUsage();
        }
    }

    public getUsage(): string {
        return `Manage Persistent Menu for the Page.
See more about Persistent Menu at https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu.

Usage:

    mbutil ${this.getName()} get [options]
        - show current Persistent Menu

    mbutil ${this.getName()} set --file <path> [options]
        - set Persistent Menu as defined in the given file

    mbutil ${this.getName()} delete [options]
        - remove Persistent Menu

Options:
    --file <path> - a path to the menu definition file
`;
    }

    private async readFromFile(fileName: string): Promise<PersistentMenuBuilder> {

        const menuDef: any = JSON.parse(await fs.readTextFile(fileName, "utf8"));

        const builder: PersistentMenuBuilder = new PersistentMenuBuilder();

        Object.keys(menuDef).forEach((locale: string) => {

            const lmenu: any = menuDef[locale];
            builder.addMenu(locale, !!lmenu.composerInputDisabled, this.createMenu(lmenu.items));
        });

        return builder;
    }

    private createMenu(items: any[]): Menu {

        const menu: Menu = PersistentMenuBuilder.createMenu();

        items.forEach((item: any) => {

            if (item.url) {

                menu.addWebUrlMenuItem(item.title, item.url, {
                    webviewHeightRatio: item.webviewHeightRatio,
                    messengerExtensions: item.messengerExtensions,
                    shareButton: item.shareButton,
                    fallbackUrl: item.fallbackUrl
                });

            } else if (item.id) {

                menu.addPostbackMenuItem(item.title, item.id, {
                    data: item.data,
                    webviewHeightRatio: item.webviewHeightRatio,
                    messengerExtensions: item.messengerExtensions,
                    shareButton: item.shareButton,
                    fallbackUrl: item.fallbackUrl
                });

            } else if (item.items) {

                menu.addSubmenu(item.title, this.createMenu(item.items));
            }
        });

        return menu;
    }
}
