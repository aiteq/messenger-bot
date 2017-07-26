[@aiteq/messenger-bot](../README.md) > [PersistentMenuBuilder](../classes/persistentmenubuilder.md) > [Menu](../classes/persistentmenubuilder.menu.md)



# Class: Menu

## Index

### Methods

* [addMenuItem](persistentmenubuilder.menu.md#addmenuitem)
* [addPostbackMenuItem](persistentmenubuilder.menu.md#addpostbackmenuitem)
* [addSubmenu](persistentmenubuilder.menu.md#addsubmenu)
* [addWebUrlMenuItem](persistentmenubuilder.menu.md#addweburlmenuitem)
* [getActions](persistentmenubuilder.menu.md#getactions)



---

## Methods
<a id="addmenuitem"></a>

### «Private» addMenuItem

► **addMenuItem**(item: *[MenuItem](../interfaces/messengerprofile.menuitem.md)*, webviewHeightRatio?: *[HeightRatio](../modules/webview.heightratio.md)*, messengerExtensions?: *`boolean`*, sharingDisabled?: *`boolean`*, fallbackUrl?: *`string`*): `void`




*Defined in fb-api-helpers/persistent-menu-builder.ts:108*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| item | [MenuItem](../interfaces/messengerprofile.menuitem.md)   |  - |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md)   |  - |
| messengerExtensions | `boolean`   |  - |
| sharingDisabled | `boolean`   |  - |
| fallbackUrl | `string`   |  - |





**Returns:** `void`





___

<a id="addpostbackmenuitem"></a>

###  addPostbackMenuItem

► **addPostbackMenuItem**(title: *`string`*, id: *`string`*, data: *`any`*, webviewHeightRatio?: *[HeightRatio](../modules/webview.heightratio.md)*, messengerExtensions?: *`boolean`*, sharingDisabled?: *`boolean`*, fallbackUrl?: *`string`*): `this`




*Defined in fb-api-helpers/persistent-menu-builder.ts:71*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| id | `string`   |  - |
| data | `any`   |  - |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md)   |  - |
| messengerExtensions | `boolean`   |  - |
| sharingDisabled | `boolean`   |  - |
| fallbackUrl | `string`   |  - |





**Returns:** `this`





___

<a id="addsubmenu"></a>

###  addSubmenu

► **addSubmenu**(title: *`string`*, submenu: *[Menu](persistentmenubuilder.menu.md)*): `this`




*Defined in fb-api-helpers/persistent-menu-builder.ts:94*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| submenu | [Menu](persistentmenubuilder.menu.md)   |  - |





**Returns:** `this`





___

<a id="addweburlmenuitem"></a>

###  addWebUrlMenuItem

► **addWebUrlMenuItem**(title: *`string`*, url: *`string`*, webviewHeightRatio?: *[HeightRatio](../modules/webview.heightratio.md)*, messengerExtensions?: *`boolean`*, sharingDisabled?: *`boolean`*, fallbackUrl?: *`string`*): `this`




*Defined in fb-api-helpers/persistent-menu-builder.ts:53*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| url | `string`   |  - |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md)   |  - |
| messengerExtensions | `boolean`   |  - |
| sharingDisabled | `boolean`   |  - |
| fallbackUrl | `string`   |  - |





**Returns:** `this`





___

<a id="getactions"></a>

###  getActions

► **getActions**(): `Array`.<[MenuItem](../interfaces/messengerprofile.menuitem.md)>




*Defined in fb-api-helpers/persistent-menu-builder.ts:49*





**Returns:** `Array`.<[MenuItem](../interfaces/messengerprofile.menuitem.md)>





___


