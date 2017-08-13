[@aiteq/messenger-bot](../README.md) > [MediaMessageBuilder](../classes/mediamessagebuilder.md)

# Class: MediaMessageBuilder

Helps to create a message with media attachment. ([see more about content types](https://developers.facebook.com/docs/messenger-platform/send-api-reference/contenttypes))

## Hierarchy

[MessageBuilder](messagebuilder.md)

**↳ MediaMessageBuilder**

## Index

### Constructors

* [constructor(type)](mediamessagebuilder.md#constructor)

### Methods

* [addLocationQuickReply()](mediamessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](mediamessagebuilder.md#addquickreply)
* [setReusable(reusable)](mediamessagebuilder.md#setreusable)
* [setUrl(url)](mediamessagebuilder.md#seturl)

---

## Constructors

<a id="constructor"></a>
### `new MediaMessageBuilder(type)`

Creates an instance of MediaMessageBuilder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | [MediaAttachmentType](../modules/send.md#mediaattachmenttype) | type of the attachment |

**Returns:** [MediaMessageBuilder](mediamessagebuilder.md)

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

<a id="setreusable"></a>
###  `setReusable(reusable)`

Controls attachment's reusability.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| reusable | `boolean`   | if `true` the attachment will be reused |

**Returns:** `this` - for chaining
___

<a id="seturl"></a>
###  `setUrl(url)`

Sets a URL of the media file.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   | URL of the attachment |

**Returns:** `this` - for chaining
___
