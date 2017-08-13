[@aiteq/messenger-bot](../README.md) > [UrlButtonBuilder](../classes/urlbuttonbuilder.md)

# Class: UrlButtonBuilder

Helps to create a [URL Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).

## Hierarchy

[Builder](builder.md)

**↳ UrlButtonBuilder**

## Index

### Constructors

* [constructor(title, url)](urlbuttonbuilder.md#constructor)

### Methods

* [setFallbackUrl(fallbackUrl)](urlbuttonbuilder.md#setfallbackurl)
* [setMessengerEtensions(messengerExtensions)](urlbuttonbuilder.md#setmessengeretensions)
* [setShowWebviewShareButton(webviewShareButton)](urlbuttonbuilder.md#setshowwebviewsharebutton)
* [setWebviewHeightRatio(webviewHeightRatio)](urlbuttonbuilder.md#setwebviewheightratio)

---

## Constructors

<a id="constructor"></a>
### `new UrlButtonBuilder(title, url)`

Creates an instance of UrlButtonBuilder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | button's title |
| url | `string`   | target URL |

**Returns:** [UrlButtonBuilder](urlbuttonbuilder.md)

---

## Methods

<a id="setfallbackurl"></a>
###  `setFallbackUrl(fallbackUrl)`

Sets the URL to use on clients that don't support Messenger Extensions. If this is not defined, the `url` will be used as the fallback.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fallbackUrl | `string`   |  fallback URL |

**Returns:** `this` - for chaining
___

<a id="setmessengeretensions"></a>
###  `setMessengerEtensions(messengerExtensions)`

Controls usage of Messenger Extensions.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| messengerExtensions | `boolean` |  must be `true` if using Messenger Extensions |

**Returns:** `this` - for chaining
___

<a id="setshowwebviewsharebutton"></a>
###  `setShowWebviewShareButton(webviewShareButton)`

Controls the share button in the Webview.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webviewShareButton | `boolean`   | if `false` the native share button will be hidden |

**Returns:** `this` - for chaining
___

<a id="setwebviewheightratio"></a>
###  `setWebviewHeightRatio(webviewHeightRatio)`

Sets a height of the Webview.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) | |

**Returns:** `this` - for chaining
___
