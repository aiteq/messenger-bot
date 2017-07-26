import { MessengerProfile } from "../fb-api/messenger-profile";
import { Webview } from "../fb-api/webview";
import { Webhook } from "../fb-api/webhook";
import { AbstractBuilder } from "./abstract-builder";



export class PersistentMenuBuilder extends AbstractBuilder<Array<MessengerProfile.PersistentMenu>> {

  private menus: Array<MessengerProfile.PersistentMenu> = new Array<MessengerProfile.PersistentMenu>();


  private static checkMenu(menu: MessengerProfile.PersistentMenu): MessengerProfile.PersistentMenu {

    if (menu.composer_input_disabled && (!menu.call_to_actions || menu.call_to_actions.length == 0)) {
      throw new Error("PersistentMenuBuilder: at least one menu item must be added when composer input is disabled (see https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu#post)");
    }

    return menu;
  }

  public addMenu(locale: string, composerInputDisabled: boolean, menu: PersistentMenuBuilder.Menu): this {

    this.menus.push(PersistentMenuBuilder.checkMenu({
      locale: locale,
      composer_input_disabled: composerInputDisabled,
      call_to_actions: menu.getActions()
    }));

    return this;
  }

  public build(): Array<MessengerProfile.PersistentMenu> {
    return this.menus;
  }

  public static createMenu(): PersistentMenuBuilder.Menu {
    let menu: PersistentMenuBuilder.Menu = new PersistentMenuBuilder.Menu();
    return menu;
  }
}

export namespace PersistentMenuBuilder {

  export class Menu {

    private actions: Array<MessengerProfile.MenuItem> = new Array<MessengerProfile.MenuItem>();

    public getActions(): Array<MessengerProfile.MenuItem> {
      return this.actions;
    }

    public addWebUrlMenuItem(
      title: string,
      url: string,
      webviewHeightRatio?: Webview.HeightRatio,
      messengerExtensions?: boolean,
      sharingDisabled?: boolean,
      fallbackUrl?: string
    ): this {

      this.addMenuItem({
        type: MessengerProfile.MenuItemType.WEB_URL,
        title: title,
        url: url
      }, webviewHeightRatio, messengerExtensions, sharingDisabled, fallbackUrl);

      return this;
    }

    public addPostbackMenuItem(
      title: string,
      id: string,
      data: any,
      webviewHeightRatio?: Webview.HeightRatio,
      messengerExtensions?: boolean,
      sharingDisabled?: boolean,
      fallbackUrl?: string
    ): this {

      this.addMenuItem({
        type: MessengerProfile.MenuItemType.POSTBACK,
        title: title,
        payload: JSON.stringify({
          src: Webhook.PostbackSource.PERSISTENT_MENU,
          id: id,
          data: data
        })
      }, webviewHeightRatio, messengerExtensions, sharingDisabled, fallbackUrl);

      return this;
    }

    public addSubmenu(
      title: string,
      submenu: PersistentMenuBuilder.Menu
    ): this {

      this.addMenuItem({
        type: MessengerProfile.MenuItemType.NESTED,
        title: title,
        call_to_actions: new Array<MessengerProfile.MenuItem>()
      });

      return this;
    }

    private addMenuItem(
      item: MessengerProfile.MenuItem,
      webviewHeightRatio?: Webview.HeightRatio,
      messengerExtensions?: boolean,
      sharingDisabled?: boolean,
      fallbackUrl?: string
    ): void {

      webviewHeightRatio && (item.webview_height_ratio = webviewHeightRatio);
      messengerExtensions && (item.messenger_extensions = messengerExtensions);
      fallbackUrl && (item.fallback_url = fallbackUrl);
      sharingDisabled && (item.webview_share_button = Webview.ShareButton.HIDE);

      this.actions.push(item);    
    }
  }
}
