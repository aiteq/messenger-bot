[@aiteq/messenger-bot](../README.md) > [OgTemplateMessageBuilder](../classes/ogtemplatemessagebuilder.md)

# Class: OgTemplateMessageBuilder

Helps to create a [Open Graph Template](https://developers.facebook.com/docs/messenger-platform/open-graph-template) message.

## Hierarchy

[TemplateMessageBuilder](templatemessagebuilder.md)

**↳ OgTemplateMessageBuilder**

## Index

### Constructors

* [constructor()](ogtemplatemessagebuilder.md#constructor)

### Methods

* [addLocationQuickReply()](ogtemplatemessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](ogtemplatemessagebuilder.md#addquickreply)
* [setElement](ogtemplatemessagebuilder.md#setelement)

---

## Constructors

<a id="constructor"></a>
### `new OgTemplateMessageBuilder()`

**Returns:** [OgTemplateMessageBuilder](ogtemplatemessagebuilder.md)

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

<a id="setelement"></a>
###  `setElement(elementBuilder)`

Sets an Open Graph Element.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| elementBuilder | [OgElementBuilder](ogelementbuilder.md)   | |

**Returns:** `this` - for chaining
___
