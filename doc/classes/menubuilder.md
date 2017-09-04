[@aiteq/messenger-bot](../README.md) > [MenuBuilder](../classes/menubuilder.md)

# Class: MenuBuilder

## Index

### Methods

* [addPostbackMenuItem(title, id, data, [options])](menubuilder.md#addpostbackmenuitem)
* [addSubmenu(title, submenu)](menubuilder.md#addsubmenu)
* [addWebUrlMenuItem(title, url, [options])](menubuilder.md#addweburlmenuitem)

---

## Methods

<a id="addpostbackmenuitem"></a>
###  `addPostbackMenuItem(title, id, data, [options])`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the item |
| id | `string`   | ID of the item |
| options | `object` |  |

`options` object can contain:

| Property | Type | Description |
| ------ | ------ | ------ |
| data | `any`   | payload data to be send when the item is selected |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md)   | optional height of the [Webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| messengerExtensions | `boolean` | must be `true` if using [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| shareButton | `boolean` | set to `false` to disable sharing in the Webview (e.g. for sensitive info) |
| fallbackUrl | `string`   | URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |

**Returns:** `this` - for chaining
___

<a id="addsubmenu"></a>
###  `addSubmenu(title, submenu)`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the submenu |
| submenu | [MenuBuilder](menubuilder.md)   |  |

**Returns:** `this` - for chaining
___

<a id="addweburlmenuitem"></a>
###  `addWebUrlMenuItem(title, url, [options])`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the item |
| url | `string`   | ID of the item |
| options | `object` |  |

`options` object can contain:

| Property | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) | optional height of the [Webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| messengerExtensions | `boolean`   | must be `true` if using [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| shareButton | `boolean` | set to `false` to disable sharing in the Webview (e.g. for sensitive info) |
| fallbackUrl | `string`   | URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |

**Returns:** `this` - for chaining
___
