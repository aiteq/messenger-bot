[@aiteq/messenger-bot](../README.md) > [MessageBuilder](../classes/messagebuilder.md)

# Class: MessageBuilder

An abstract parent class for *message builders*. The message builders help to construct complex messages to be send (e.g. *template messages*).

## Type parameters

#### T: [Message](../modules/send.md#message)

## Hierarchy

[Builder](builder.md)

**↳ MessageBuilder**

↳  [TextMessageBuilder](textmessagebuilder.md)

↳  [MediaMessageBuilder](mediamessagebuilder.md)

↳  [TemplateMessageBuilder](templatemessagebuilder.md)

## Index

### Methods

* [addLocationQuickReply()](mediamessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](mediamessagebuilder.md#addquickreply)

---

## Methods

<a id="addlocationquickreply"></a>
###  `addLocationQuickReply()`

Adds a Quick Reply button to quickly send user's location.

**Returns:** `this` - for chaining
___

<a id="addquickreply"></a>
###  `addQuickReply(title, id, [data, [imageUrl]])`

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
