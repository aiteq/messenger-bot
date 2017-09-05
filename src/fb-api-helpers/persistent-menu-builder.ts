import { MessengerProfile } from "../fb-api";
import { Builder } from "./builder";
import { MenuBuilder } from "./menu-builder";
import { PersistentMenuDef, PersistentMenuItemDef } from "./persistent-menu-def";

/**
 * Helps to create a Persistent Menu.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu)
 */
export class PersistentMenuBuilder extends Builder<MessengerProfile.PersistentMenu[]> {

    /**
     * Creates a new Menu.
     *
     * @returns {MenuBuilder}
     */
    public static createMenu(): MenuBuilder {
        return new MenuBuilder();
    }

    private static checkMenu(menu: MessengerProfile.PersistentMenu): MessengerProfile.PersistentMenu {

        if (menu.composer_input_disabled && (!menu.call_to_actions || menu.call_to_actions.length === 0)) {
            throw new Error("at least one menu item must be added when composer input is disabled (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu#post)");
        }

        return menu;
    }

    private menus: MessengerProfile.PersistentMenu[] = new Array<MessengerProfile.PersistentMenu>();

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
                this.addMenu(localMenuDef.locale, !!localMenuDef.composerInputDisabled, this.buildMenu(localMenuDef.items));
            });
        }
    }

    /**
     * Returns built Persistent Menu object.
     *
     * @returns {MessengerProfile.PersistentMenu[]}
     */
    public build(): MessengerProfile.PersistentMenu[] {
        return this.menus;
    }

    /**
     * Adds a new Menu for the given locale.
     *
     * @param {string} locale
     * @param {boolean} composerInputDisabled
     * @param {PersistentMenuBuilder.Menu} menu
     * @returns {this} - for chaining
     */
    public addMenu(locale: string, composerInputDisabled: boolean, menu: MenuBuilder): this {

        this.menus.push(PersistentMenuBuilder.checkMenu({
            locale,
            composer_input_disabled: composerInputDisabled,
            call_to_actions: menu.build()
        }));

        return this;
    }

    private buildMenu(items: PersistentMenuItemDef[]): MenuBuilder {

        const menu: MenuBuilder = PersistentMenuBuilder.createMenu();

        items.forEach((item: PersistentMenuItemDef) => {

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

                menu.addSubmenu(item.title, this.buildMenu(item.items));
            }
        });

        return menu;
    }
}
