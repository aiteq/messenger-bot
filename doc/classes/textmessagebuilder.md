[@aiteq/messenger-bot](../README.md) > [TextMessageBuilder](../classes/textmessagebuilder.md)

# Class: TextMessageBuilder

Helps to build a [Text Message](https://developers.facebook.com/docs/messenger-platform/send-api-reference/text-message).

## Hierarchy

[MessageBuilder](messagebuilder.md)

**↳ TextMessageBuilder**

## Index

### Constructors

* [constructor(text)](textmessagebuilder.md#constructor)

### Methods

* [addLocationQuickReply()](textmessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](textmessagebuilder.md#addquickreply)

---

## Constructors

<a id="constructor"></a>
### new TextMessageBuilder(text)`

Creates an instance of TextMessageBuilder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   | text of the message |

**Returns:** [TextMessageBuilder](textmessagebuilder.md)

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
