[@aiteq/messenger-bot](../README.md) > [ButtonHolder](../interfaces/buttonholder.md)

# Interface: ButtonHolder

Interface for message builders producing message components containing buttons.

## Methods

<a id="addcallbutton"></a>
###  `addCallButton(title, phoneNumber)`

Creates and adds a [Call Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/call-button).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | a title of the button, max length is 20 characters |
| phoneNumber | `string` | a phone number, format must have "+" prefix followed by the country code, area code and local number (e.g. +16505551234) |

**Returns:** `this` - for chaining
___

<a id="addloginbutton"></a>
###  `addLoginButton(url)`

Creates and adds a [Login Button](https://developers.facebook.com/docs/messenger-platform/account-linking/link-account).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   | authentication callback URL (must use HTTPS protocol) |

**Returns:** `this` - for chaining
___

<a id="addlogoutbutton"></a>
###  `addLogoutButton()`

Creates and adds a [Logout Button](https://developers.facebook.com/docs/messenger-platform/account-linking/unlink-account).

**Returns:** `this` - for chaining
___

<a id="addpostbackbutton"></a>
###  `addPostbackButton(title, id, [data])`

Creates and adds a [Postback Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/postback-button).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | a title of the button, max length is 20 characters |
| id | `string` | an identification of the postback |
| data | `string` | optional data to be send with postback |

**Returns:** `this` - for chaining
___

<a id="addsharebutton"></a>
###  `addShareButton(builder)`

Creates and adds a [Share Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/share-button).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| builder | [GenericTemplateMessageBuilder](../classes/generictemplatemessagebuilder.md) | a generic template message builder |

**Returns:** `this` - for chaining
___

<a id="addurlbutton"></a>
###  `addUrlButton(title, url, [options])`

Creates and adds a [URL Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | a title of the button, max length is 20 characters |
| url | `string` | a URL to be opened in a mobile browser when the button is tapped |
| options | `object` |  |

`options` object can contain:

| Property | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) | optional height of the [Webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| messengerExtensions | `boolean`   | must be `true` if using [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| webviewShareButton | `boolean` | set to `false` to disable sharing in the Webview (e.g. for sensitive info) |
| fallbackUrl | `string`   | URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |

**Returns:** `this` - for chaining
___

<a id="addextensionbutton"></a>
###  `addExtensionButton(title, extension, [options])`

Creates and adds a [URL Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button) linking a Chat Extension.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | a title of the button, max length is 20 characters |
| extension | [ChatExtension](../classes/chatextension.md) | a Chat Extension to be opened when the button is tapped |
| options | `object` |  |

`options` object can contain:

| Property | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) | optional height of the [Webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| webviewShareButton | `boolean` | set to `false` to disable sharing in the Webview (e.g. for sensitive info) |
| fallbackUrl | `string`   | URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |

**Returns:** `this` - for chaining
___

