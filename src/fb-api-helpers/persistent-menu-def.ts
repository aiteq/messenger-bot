import * as Webview from "../fb-api/webview";

export interface PersistentMenuDef {
    locale: string;
    composerInputDisabled: boolean;
    items: PersistentMenuItemDef[];
}

export interface PersistentMenuItemDef {
    title: string;
    url?: string;
    data?: any;
    id?: string;
    items?: PersistentMenuItemDef[];
    webviewHeightRatio?: Webview.HeightRatio;
    messengerExtensions?: boolean;
    shareButton?: boolean;
    fallbackUrl?: string;
}
