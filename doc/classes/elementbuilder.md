[@aiteq/messenger-bot](../README.md) > [ElementBuilder](../classes/elementbuilder.md)

# Class: ElementBuilder

Helps to create an Element.

## Hierarchy

[Builder](builder.md)

**↳ ElementBuilder**

## Index

### Constructors

* [constructor(title)](elementbuilder.md#constructor)

### Methods

* [addButton(buttonBuilder)](elementbuilder.md#addbutton)
* [setDefaultAction(defaultActionBuilder)](elementbuilder.md#setdefaultaction)
* [setImageUrl(imageUrl)](elementbuilder.md#setimageurl)
* [setSubtitle(subtitle)](elementbuilder.md#setsubtitle)

---
## Constructors

<a id="constructor"></a>
### `new ElementBuilder(title)`

Creates an instance of ElementBuilder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the Element |

**Returns:** [ElementBuilder](elementbuilder.md)

---

## Methods

<a id="addbutton"></a>
###  `addButton(buttonBuilder)`

Adds a Button.

**Type parameters:**

#### T: [Button](../modules/send.md#button)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buttonBuilder | [Builder](builder.md) | button builder |

**Returns:** `this` - for chaining
___

<a id="setdefaultaction"></a>
###  `setDefaultAction(defaultActionBuilder)`

Set a Default Action for the Element.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| defaultActionBuilder | [DefaultActionBuilder](defaultactionbuilder.md) |  |

**Returns:** `this` - for chaining
___

<a id="setimageurl"></a>
###  `setImageUrl(imageUrl)`

Sets Element's image.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| imageUrl | `string`   | URL of the image of the Element |

**Returns:** `this` - for chaining
___

<a id="setsubtitle"></a>
###  `setSubtitle(subtitle)`

Sets a text for Element's subtitle.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| subtitle | `string`   | subtitle of the Element |

**Returns:** `this` - for chaining
___
