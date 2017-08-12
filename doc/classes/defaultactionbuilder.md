[@aiteq/messenger-bot](../README.md) > [DefaultActionBuilder](../classes/defaultactionbuilder.md)

# Class: DefaultActionBuilder

Helps to create a [Default Action](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button). Default Actions behave like URL Buttons and contain the same fields except that the title field is not allowed.

## Hierarchy

[Builder](builder.md)

**↳ DefaultActionBuilder**

## Index

### Constructors

* [constructor(url)](defaultactionbuilder.md#constructor)

### Methods

* [setFallbackUrl(fallbackUrl)](defaultactionbuilder.md#setfallbackurl)
* [setMessengerExtensions(messengerExtensions)](defaultactionbuilder.md#setmessengerextensions)
* [setShowWebviewShareButton(visible)](defaultactionbuilder.md#setshowwebviewsharebutton)
* [setWebviewHeightRatio(webviewHeightRatio)](defaultactionbuilder.md#setwebviewheightratio)

---
## Constructors

<a id="constructor"></a>
### `new DefaultActionBuilder(url)`

Creates an instance of DefaultActionBuilder.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   | the URL that is opened in a mobile browser when the button is tapped |

**Returns:** [DefaultActionBuilder](defaultactionbuilder.md)

---

## Methods

<a id="setfallbackurl"></a>
###  `setFallbackUrl(fallbackUrl)`

Sets the URL to use on clients that don't support Messenger Extensions.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| fallbackUrl | `string` | fallback URL |

**Returns:** `this` - for chaining
___

<a id="setmessengerextensions"></a>
###  `setMessengerExtensions(messengerExtensions)`

Controls usage of Messenger Extensions.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| messengerExtensions | `boolean`   | must be `true` if using Messenger Extensions |

**Returns:** `this` - for chaining
___

<a id="setshowwebviewsharebutton"></a>
###  `setShowWebviewShareButton(visible)`

Controls the share button in the Webview.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| visible | `boolean` | controls whether the share button will be visible in the Webview |

**Returns:** `this` - for chaining
___

<a id="setwebviewheightratio"></a>
###  `setWebviewHeightRatio(webviewHeightRatio)`

Sets a height of the Webview.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) |  |

**Returns:** `this` - for chaining
___
