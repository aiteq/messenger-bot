[@aiteq/messenger-bot](../README.md) > [OgElementBuilder](../classes/ogelementbuilder.md)

# Class: OgElementBuilder

Helps to create an Open Graph Element.

## Hierarchy

[Builder](builder.md)

**↳ OgElementBuilder**

## Index

### Constructors

* [constructor(url)](ogelementbuilder.md#constructor)

### Methods

* [addButton(buttonBuilder)](ogelementbuilder.md#addbutton)

---

## Constructors

<a id="constructor"></a>
### `new OgElementBuilder(url)`

Creates an instance of ElementBuilder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   | Open Uraph URL for the element |

**Returns:** [OgElementBuilder](ogelementbuilder.md)

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

**Returns:** `void`
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
