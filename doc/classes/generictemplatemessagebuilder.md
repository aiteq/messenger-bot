[@aiteq/messenger-bot](../README.md) > [GenericTemplateMessageBuilder](../classes/generictemplatemessagebuilder.md)

# Class: GenericTemplateMessageBuilder

Helps to create a [Generic Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template) message.

## Hierarchy

[TemplateMessageBuilder](templatemessagebuilder.md)

**↳ GenericTemplateMessageBuilder**

## Index

### Constructors

* [constructor()](generictemplatemessagebuilder.md#constructor)

### Methods

* [addElement(elementBuilder)](generictemplatemessagebuilder.md#addelement)
* [addLocationQuickReply()](generictemplatemessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](generictemplatemessagebuilder.md#addquickreply)
* [setImageAspectRatio(imageAspectRatio)](generictemplatemessagebuilder.md#setimageaspectratio)
* [setSherable(sherable)](generictemplatemessagebuilder.md#setsherable)

---
## Constructors

<a id="constructor"></a>
### `new GenericTemplateMessageBuilder()`

Creates an instance of GenericTemplateMessageBuilder.

**Returns:** [GenericTemplateMessageBuilder](generictemplatemessagebuilder.md)

---

## Methods

<a id="addelement"></a>
###  `addElement(elementBuilder)`

Adds an Element. Number of Elements is limited to 10.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| elementBuilder | [ElementBuilder](elementbuilder.md)   |  |

**Returns:** `this` - for chaining
___

<a id="addlocationquickreply"></a>
###  `addLocationQuickReply()`

*Inherited from [MessageBuilder](messagebuilder.md)*

Adds a Quick Reply button to quickly send user's location.

**Returns:** `this` - for chaining
___

<a id="addtextquickreply"></a>
###  `addQuickReply(title, id, [data, [imageUrl]])`

*Inherited from [MessageBuilder](messagebuilder.md)*

Adds a Quick Reply button to the message.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  title of the Quick Reply |
| id | `string`   |  ID of the button (required for proper generation of webhook events) |
| data | `string`⎮`any`   | optional data to be send when the user clicks on the Quick Reply button |
| imageUrl | `string`   | image of the Quick Reply |

**Returns:** `this` - for chaining
___

<a id="setimageaspectratio"></a>
###  `setImageAspectRatio(imageAspectRatio)`

Sets image aspect ratio. The aspect ratio is used to render images specified by image_url in element objects.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| imageAspectRatio | [ImageAspectRatio](../enums/send.imageaspectratio.md)   |  |

**Returns:** `this` - for chaining
___

<a id="setsherable"></a>
###  `setSherable(sherable)`

Controls native share button.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sherable | `boolean` | set to `false` to disable the native share button in Messenger |

**Returns:** `this` - for chaining
___
