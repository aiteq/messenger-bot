[@aiteq/messenger-bot](../README.md) > [Send](../modules/send.md) > [UrlButton](../interfaces/send.urlbutton.md)

# Interface: UrlButton

Interface for [URL Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).

## Properties

<a id="fallback_url"></a>
### «optional» `fallback_url`

The URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview). If this is not defined, the url will be used as the fallback. It may only be specified if `messenger_extensions` is `true`.

**type**: `string`
___

<a id="messenger_extensions"></a>
### «optional» `messenger_extensions`

Must be `true` if using Messenger Extensions.

**type**: `boolean`
___

<a id="title"></a>
###  `title`

Button title. 20 characters limit.

**type**: `string`
___

<a id="type"></a>
###  `type`

Type of button. Must be `"web_url"`.

**type**: `"web_url"`
___

<a id="url"></a>
###  `url`

This URL is opened in a mobile browser when the button is tapped. Must use HTTPS protocol if `messenger_extensions` is `true`.

**type**: `string`
___

<a id="webview_height_ratio"></a>
### «optional» `webview_height_ratio`

Height of the Webview. 

**type**: [HeightRatio](../enums/webview.heightratio.md)
___

<a id="webview_share_button"></a>
### «optional» `webview_share_button`

Set to [ShareButton.HIDE](../enums/webview.sharebutton.md#hide) to disable the share button in the Webview (for sensitive info). This does not affect any shares initiated by the developer using Extensions.

**type**: [ShareButton](../enums/webview.sharebutton.md)
___


