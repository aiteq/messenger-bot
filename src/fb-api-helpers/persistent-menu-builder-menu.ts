import * as  MessengerProfile from "../fb-api/messenger-profile";
import * as Webhook from "../fb-api/webhook";
import * as Webview from "../fb-api/webview";

export class Menu {

    private actions: MessengerProfile.MenuItem[] = new Array<MessengerProfile.MenuItem>();

    public getActions(): MessengerProfile.MenuItem[] {
        return this.actions;
    }

    public addWebUrlMenuItem(title: string, url: string, options?: {
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        shareButton?: boolean,
        fallbackUrl?: string
    }): this {

        options = options || {};

        this.addMenuItem({ type: MessengerProfile.MenuItemType.WEB_URL, title, url }, options);

        return this;
    }

    public addPostbackMenuItem(title: string, id: string, options?: {
        data?: any,
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        shareButton?: boolean,
        fallbackUrl?: string
    }): this {

        options = options || {};

        this.addMenuItem({
            type: MessengerProfile.MenuItemType.POSTBACK,
            title,
            payload: JSON.stringify({
                src: Webhook.PostbackSource.PERSISTENT_MENU,
                id,
                data: options.data
            })
        }, options);

        return this;
    }

    public addSubmenu(title: string, submenu: Menu): this {

        this.addMenuItem({ type: MessengerProfile.MenuItemType.NESTED, title, call_to_actions: submenu.actions });

        return this;
    }

    private addMenuItem(item: MessengerProfile.MenuItem, options?: {
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        shareButton?: boolean,
        fallbackUrl?: string
    }): void {

        options = options || {};

        item.webview_height_ratio = options.webviewHeightRatio;
        item.messenger_extensions = options.messengerExtensions;
        item.fallback_url = options.fallbackUrl;
        item.webview_share_button = options.shareButton === false ? Webview.ShareButton.HIDE : Webview.ShareButton.SHOW;

        this.actions.push(item);
    }
}
