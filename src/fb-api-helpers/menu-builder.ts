import { MessengerProfile, Webhook, Webview } from "../fb-api";
import { Builder } from "./builder";

export class MenuBuilder extends Builder<MessengerProfile.MenuItem[]> {

    private actions: MessengerProfile.MenuItem[] = new Array<MessengerProfile.MenuItem>();

    public build(): MessengerProfile.MenuItem[] {
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

    public addSubmenu(title: string, submenu: MenuBuilder): this {

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

        options.webviewHeightRatio && (item.webview_height_ratio = options.webviewHeightRatio);
        options.messengerExtensions && (item.messenger_extensions = options.messengerExtensions);
        options.fallbackUrl && (item.fallback_url = options.fallbackUrl);
        item.webview_share_button = options.shareButton === false ? Webview.ShareButton.HIDE : Webview.ShareButton.SHOW;

        this.actions.push(item);
    }
}
