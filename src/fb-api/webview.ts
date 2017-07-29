export namespace Webview {
  
  export namespace HeightRatio {
    export const COMPACT = "compact";
    export const TALL = "tall";
    export const FULL = "full";
  }

  export type HeightRatio = typeof HeightRatio.COMPACT | typeof HeightRatio.TALL | typeof HeightRatio.FULL;

  export namespace ShareButton {
    export const HIDE = "hide";
    export const SHOW = "show";
  }

  export type ShareButton = typeof ShareButton.HIDE | typeof ShareButton.SHOW;
}