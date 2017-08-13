[@aiteq/messenger-bot](../README.md) > [PersistentMenuBuilder](../classes/persistentmenubuilder.md)

# Class: PersistentMenuBuilder

Helps to create a [Persistent Menu](https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu).

## Index

### Classes

* [Menu](persistentmenubuilder.menu.md)

### Methods

* [addMenu(locale, composerInputDisabled, menu)](persistentmenubuilder.md#addmenu)

### Static methods

* [PersistentMenuBuilder.createMenu()](persistentmenubuilder.md#createmenu)

---
## Methods
<a id="addmenu"></a>
###  `addMenu(locale, composerInputDisabled, menu)`

Adds a new Menu for the given locale.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| locale | `string` | locale of the menu ([supported locales](https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales)); for default menu use '"default"` |
| composerInputDisabled | `boolean` | Set to `true` to disable user input in the menu. This means users will only be able to interact with your bot via the menu, postbacks, buttons, and webviews. |
| menu | [Menu](persistentmenubuilder.menu.md)   | menu to be added |

**Returns:** `this` - for chaining
___

<a id="createmenu"></a>
### `PersistentMenuBuilder.createMenu()`

Creates a new Menu.

**Returns:** [Menu](persistentmenubuilder.menu.md)
___
