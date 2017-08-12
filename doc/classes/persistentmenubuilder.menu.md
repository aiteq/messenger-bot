[@aiteq/messenger-bot](../README.md) > [PersistentMenuBuilder](../classes/persistentmenubuilder.md) > [Menu](../classes/persistentmenubuilder.menu.md)

# Class: Menu

## Index

### Methods

* [addPostbackMenuItem(title, id, data, [webviewHeightRatio, [messengerExtensions, [shareButton, [fallbackUrl]]]])](persistentmenubuilder.menu.md#addpostbackmenuitem)
* [addSubmenu(title, submenu)](persistentmenubuilder.menu.md#addsubmenu)
* [addWebUrlMenuItem(title, url, [webviewHeightRatio, [messengerExtensions, [shareButton, [fallbackUrl]]]])](persistentmenubuilder.menu.md#addweburlmenuitem)

---

## Methods

<a id="addpostbackmenuitem"></a>
###  `addPostbackMenuItem(title, id, data, [webviewHeightRatio, [messengerExtensions, [shareButton, [fallbackUrl]]]])`

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the item |
| id | `string`   | ID of the item |
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
| submenu | [Menu](persistentmenubuilder.menu.md)   |  |

**Returns:** `this` - for chaining
___

<a id="addweburlmenuitem"></a>
###  `addWebUrlMenuItem(title, url, [webviewHeightRatio, [messengerExtensions, [shareButton, [fallbackUrl]]]])`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the item |
| url | `string`   | ID of the item |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md) | optional height of the [Webview](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| messengerExtensions | `boolean`   | must be `true` if using [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |
| shareButton | `boolean` | set to `false` to disable sharing in the Webview (e.g. for sensitive info) |
| fallbackUrl | `string`   | URL to use on clients that don't support [Messenger Extensions](https://developers.facebook.com/docs/messenger-platform/send-api-reference/webview) |

**Returns:** `this` - for chaining
___
