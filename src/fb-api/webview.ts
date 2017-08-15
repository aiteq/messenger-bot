/**
 * Types for Messenger Webview interface.
 * (see https://developers.facebook.com/docs/messenger-platform/webview)
 */
export namespace Webview {

    export enum HeightRatio {
        COMPACT = "compact",
        TALL = "tall",
        FULL = "full"
    }

    export enum ShareButton {
        HIDE = "hide",
        SHOW = "show"
    }
}