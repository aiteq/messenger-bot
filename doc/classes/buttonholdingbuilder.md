[@aiteq/messenger-bot](../README.md) > [ButtonHoldingBuilder](../classes/buttonholdingbuilder.md)

# Class: ButtonHoldingBuilder

Abstract class for message builders producing components with buttons.

## Hierarchy

[ButtonHolder](../interfaces/buttonholder.md)

**↳ ButtonHoldingBuilder**

&nbsp;&nbsp;&nbsp;&nbsp;↳ [ElementBuilder](elementbuilder.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [OgElementBuilder](ogelementbuilder.md)

## Index

### Methods

* [addCallButton(title, phoneNumber)](buttonholdingbuilder.md#addcallbutton)
* [addExtensionButton(title, extension, [options])](buttonholdingbuilder.md#addextensionbutton)
* [addLoginButton(url)](buttonholdingbuilder.md#addloginbutton)
* [addLogoutButton()](buttonholdingbuilder.md#addlogoutbutton)
* [addPostbackButton(title, id, [data])](buttonholdingbuilder.md#addpostbackbutton)
* [addShareButton(builder)](buttonholdingbuilder.md#addsharebutton)
* [addUrlButton(title, url, [options])](buttonholdingbuilder.md#addurlbutton)

---
## Methods

<a id="addcallbutton"></a>
### `addCallButton(title, phoneNumber)`

Creates and adds a [Call Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/call-button).

*Implementation of [ButtonHolder.addCallButton](../interfaces/buttonholder.md#addcallbutton).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button, max length is 20 characters |
| phoneNumber | `string`   | phone number, format must have `"+"` prefix followed by the country code, area code and local number (e.g. +16505551234) |

**Returns:** `this` - for chaining
___

<a id="addextensionbutton"></a>
###  `addExtensionButton(title, extension, [options])`

Creates and adds a [URL Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button) linking a Chat Extension.

*Implementation of [ButtonHolder.addExtensionButton](../interfaces/buttonholder.md#addextensionbutton).*

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

<a id="addloginbutton"></a>
###  `addLoginButton(url)`

Creates and adds a [Login Button](https://developers.facebook.com/docs/messenger-platform/account-linking/link-account).

*Implementation of [ButtonHolder.addLoginButton](../interfaces/buttonholder.md#addloginbutton).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   | authentication callback URL (must use HTTPS protocol) |

**Returns:** `this` - for chaining
___

<a id="addlogoutbutton"></a>
###  `addLogoutButton()`

Creates and adds a [Logout Button](https://developers.facebook.com/docs/messenger-platform/account-linking/unlink-account).

*Implementation of [ButtonHolder.addLogoutButton](../interfaces/buttonholder.md#addlogoutbutton).*

**Returns:** `this` - for chaining
___

<a id="addpostbackbutton"></a>
###  `addPostbackButton(title, id, [data])`

Creates and adds a [Postback Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/postback-button).

*Implementation of [ButtonHolder.addPostbackButton](../interfaces/buttonholder.md#addpostbackbutton).*

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

*Implementation of [ButtonHolder.addShareButton](../interfaces/buttonholder.md#addsharebutton).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| builder | [GenericTemplateMessageBuilder](../classes/generictemplatemessagebuilder.md) | a generic template message builder |

**Returns:** `this` - for chaining
___

<a id="addurlbutton"></a>
###  `addUrlButton(title, url, [options])`

Creates and adds a [URL Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).

*Implementation of [ButtonHolder.addUrlButton](../interfaces/buttonholder.md#addurlbutton).*

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


