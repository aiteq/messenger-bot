import * as  MessengerProfile from "../fb-api/messenger-profile";
import * as Webhook from "../fb-api/webhook";
import { Builder } from "./builder";
import { Menu } from "./persistent-menu-builder-menu";
import { PersistentMenuDef } from "./persistent-menu-def";

/**
 * Helps to create a Persistent Menu.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu)
 */
export class PersistentMenuBuilder extends Builder<MessengerProfile.PersistentMenu[]> {

    /**
     * Creates a new PersistentMenuBuilder and optionaly read persistent menu definition.
     *
     * @param {PersistentMenuDef | PersistentMenuDef[]} [menuDef] - persistent menu definition
     */
    constructor(private menuDef?: PersistentMenuDef | PersistentMenuDef[]) {

        super();

        if (menuDef) {

            menuDef = Array.isArray(menuDef) ? menuDef : [menuDef];

            menuDef.forEach((localMenuDef: PersistentMenuDef) => {
                this.addMenu(localMenuDef.locale, !!localMenuDef.composerInputDisabled, this.createMenu(localMenuDef.items));
            });
        }
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

    /**
     * Creates a new Menu.
     *
     * @returns {Menu}
     */
    public static createMenu(): Menu {
        return new Menu();
    }

    private static checkMenu(menu: MessengerProfile.PersistentMenu): MessengerProfile.PersistentMenu {

        if (menu.composer_input_disabled && (!menu.call_to_actions || menu.call_to_actions.length === 0)) {
            throw new Error("PersistentMenuBuilder: at least one menu item must be added when composer input is disabled (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu#post)");
        }

        return menu;
    }

    private menus: MessengerProfile.PersistentMenu[] = new Array<MessengerProfile.PersistentMenu>();

    /**
     * Adds a new Menu for the given locale.
     *
     * @param {string} locale
     * @param {boolean} composerInputDisabled
     * @param {PersistentMenuBuilder.Menu} menu
     * @returns {this} - for chaining
     */
    public addMenu(locale: string, composerInputDisabled: boolean, menu: Menu): this {

        this.menus.push(PersistentMenuBuilder.checkMenu({
            locale,
            composer_input_disabled: composerInputDisabled,
            call_to_actions: menu.getActions()
        }));

        return this;
    }

    /**
     * Returns built Persistent Menu object.
     *
     * @returns {MessengerProfile.PersistentMenu[]}
     */
    public build(): MessengerProfile.PersistentMenu[] {
        return this.menus;
    }
}
