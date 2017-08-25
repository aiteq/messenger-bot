import * as  MessengerProfile from "../fb-api/messenger-profile";
import * as Webhook from "../fb-api/webhook";
import * as Webview from "../fb-api/webview";

export class Menu {

    private actions: MessengerProfile.MenuItem[] = new Array<MessengerProfile.MenuItem>();

    public getActions(): MessengerProfile.MenuItem[] {
        return this.actions;
    }

    public addWebUrlMenuItem(
        title: string,
        url: string,
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        shareButton?: boolean,
        fallbackUrl?: string
    ): this {

        this.addMenuItem({
            type: MessengerProfile.MenuItemType.WEB_URL,
            title,
            url
        }, webviewHeightRatio, messengerExtensions, shareButton, fallbackUrl);

        return this;
    }

    public addPostbackMenuItem(
        title: string,
        id: string,
        data: any,
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        shareButton?: boolean,
        fallbackUrl?: string
    ): this {

        this.addMenuItem({
            type: MessengerProfile.MenuItemType.POSTBACK,
            title,
            payload: JSON.stringify({
                src: Webhook.PostbackSource.PERSISTENT_MENU,
                id,
                data
            })
        }, webviewHeightRatio, messengerExtensions, shareButton, fallbackUrl);

        return this;
    }

    public addSubmenu(
        title: string,
        submenu: Menu
    ): this {

        this.addMenuItem({
            type: MessengerProfile.MenuItemType.NESTED,
            title,
            call_to_actions: submenu.actions
        });

        return this;
    }

    private addMenuItem(
        item: MessengerProfile.MenuItem,
        webviewHeightRatio?: Webview.HeightRatio,
        messengerExtensions?: boolean,
        shareButton?: boolean,
        fallbackUrl?: string
    ): void {

        webviewHeightRatio && (item.webview_height_ratio = webviewHeightRatio);
        messengerExtensions && (item.messenger_extensions = messengerExtensions);
        fallbackUrl && (item.fallback_url = fallbackUrl);
        item.webview_share_button = shareButton === false ? Webview.ShareButton.HIDE : Webview.ShareButton.SHOW;

        this.actions.push(item);
    }
}
