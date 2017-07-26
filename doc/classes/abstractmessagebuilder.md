[@aiteq/messenger-bot](../README.md) > [AbstractMessageBuilder](../classes/abstractmessagebuilder.md)



# Class: AbstractMessageBuilder

## Type parameters
#### T :  [Message](../modules/send.md#message)
## Hierarchy


 [AbstractBuilder](abstractbuilder.md)`T`

**↳ AbstractMessageBuilder**

↳  [TextMessageBuilder](textmessagebuilder.md)




↳  [MediaMessageBuilder](mediamessagebuilder.md)




↳  [TemplateMessageBuilder](templatemessagebuilder.md)










## Index

### Properties

* [message](abstractmessagebuilder.md#message)


### Methods

* [addLocationQuickReply](abstractmessagebuilder.md#addlocationquickreply)
* [addTextQuickReply](abstractmessagebuilder.md#addtextquickreply)
* [build](abstractmessagebuilder.md#build)



---
## Properties
<a id="message"></a>

### «Protected» message

**●  message**:  *`T`* 

*Defined in [fb-api-helpers/abstract-message-builder.ts:7](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L7)*





___


## Methods
<a id="addlocationquickreply"></a>

###  addLocationQuickReply

► **addLocationQuickReply**(): `this`




*Defined in [fb-api-helpers/abstract-message-builder.ts:29](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L29)*





**Returns:** `this`





___

<a id="addtextquickreply"></a>

###  addTextQuickReply

► **addTextQuickReply**(title: *`string`*, id: *`string`*, data?: *`string`⎮`any`*, imageUrl?: *`string`*): `this`




*Defined in [fb-api-helpers/abstract-message-builder.ts:10](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L10)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| id | `string`   |  - |
| data | `string`⎮`any`   |  - |
| imageUrl | `string`   |  - |





**Returns:** `this`





___

<a id="build"></a>

###  build

► **build**(): `T`




*Overrides [AbstractBuilder](abstractbuilder.md).[build](abstractbuilder.md#build)*

*Defined in [fb-api-helpers/abstract-message-builder.ts:38](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L38)*





**Returns:** `T`





___


