[@aiteq/messenger-bot](../README.md) > [PersistentMenuBuilder](../classes/persistentmenubuilder.md)



# Class: PersistentMenuBuilder

## Hierarchy


 [AbstractBuilder](abstractbuilder.md)`Array`.<[PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)>

**↳ PersistentMenuBuilder**







## Index

### Classes

* [Menu](persistentmenubuilder.menu.md)


### Methods

* [addMenu](persistentmenubuilder.md#addmenu)
* [build](persistentmenubuilder.md#build)
* [checkMenu](persistentmenubuilder.md#checkmenu)
* [createMenu](persistentmenubuilder.md#createmenu)



---

## Methods
<a id="addmenu"></a>

###  addMenu

► **addMenu**(locale: *`string`*, composerInputDisabled: *`boolean`*, menu: *[Menu](persistentmenubuilder.menu.md)*): `this`




*Defined in [fb-api-helpers/persistent-menu-builder.ts:22](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/persistent-menu-builder.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| locale | `string`   |  - |
| composerInputDisabled | `boolean`   |  - |
| menu | [Menu](persistentmenubuilder.menu.md)   |  - |





**Returns:** `this`





___

<a id="build"></a>

###  build

► **build**(): `Array`.<[PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)>




*Overrides [AbstractBuilder](abstractbuilder.md).[build](abstractbuilder.md#build)*

*Defined in [fb-api-helpers/persistent-menu-builder.ts:33](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/persistent-menu-builder.ts#L33)*





**Returns:** `Array`.<[PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)>





___

<a id="checkmenu"></a>

### «Static»«Private» checkMenu

► **checkMenu**(menu: *[PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)*): [PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)




*Defined in [fb-api-helpers/persistent-menu-builder.ts:13](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/persistent-menu-builder.ts#L13)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| menu | [PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)   |  - |





**Returns:** [PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)





___

<a id="createmenu"></a>

### «Static» createMenu

► **createMenu**(): [Menu](persistentmenubuilder.menu.md)




*Defined in [fb-api-helpers/persistent-menu-builder.ts:37](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/persistent-menu-builder.ts#L37)*





**Returns:** [Menu](persistentmenubuilder.menu.md)





___


