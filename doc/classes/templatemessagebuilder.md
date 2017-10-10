[@aiteq/messenger-bot](../README.md) > [TemplateMessageBuilder](../classes/templatemessagebuilder.md)

# Class: TemplateMessageBuilder

An abstract parent class for template message builders.

## Type parameters

#### T

## Hierarchy

[MessageBuilder](messagebuilder.md)

**↳ TemplateMessageBuilder**

&nbsp;&nbsp;&nbsp;&nbsp;↳ [GenericTemplateMessageBuilder](generictemplatemessagebuilder.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [OgTemplateMessageBuilder](ogtemplatemessagebuilder.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [ReceiptTemplateMessageBuilder](receipttemplatemessagebuilder.md)

## Index

### Constructors

* [constructor()](templatemessagebuilder.md#constructor)

### Methods

* [addLocationQuickReply()](templatemessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](templatemessagebuilder.md#addquickreply)

---

## Constructors

<a id="constructor"></a>
### `new TemplateMessageBuilder()`

**Returns:** [TemplateMessageBuilder](templatemessagebuilder.md)

---

## Methods

<a id="addlocationquickreply"></a>
###  `addLocationQuickReply()`

*Inherited from [MessageBuilder](messagebuilder.md)*

Adds a Quick Reply button to quickly send user's location.

**Returns:** `this` - for chaining
___

<a id="addquickreply"></a>
###  `addQuickReply(title, id, [data, [imageUrl]])`

*Inherited from [MessageBuilder](messagebuilder.md)*

Adds a Quick Reply button to the message.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string` | title of the Quick Reply |
| id | `string` | ID of the button (required for proper generation of webhook events) |
| data | `any` | optional data to be send when the user click on the Quick Reply button |
| imageUrl | `string` | URL of optional image |

**Returns:** `this` - for chaining
___
