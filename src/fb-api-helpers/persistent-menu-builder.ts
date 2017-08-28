import * as  MessengerProfile from "../fb-api/messenger-profile";
import * as Webhook from "../fb-api/webhook";
import { Builder } from "./builder";
import { Menu } from "./persistent-menu-builder-menu";

/**
 * Helps to create a Persistent Menu.
 * (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu)
 */
export class PersistentMenuBuilder extends Builder<MessengerProfile.PersistentMenu[]> {

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
