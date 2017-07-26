[@aiteq/messenger-bot](../README.md) > [TextMessageBuilder](../classes/textmessagebuilder.md)



# Class: TextMessageBuilder

## Hierarchy


↳  [AbstractMessageBuilder](abstractmessagebuilder.md)[TextMessage](../interfaces/send.textmessage.md)

**↳ TextMessageBuilder**







## Index

### Constructors

* [constructor](textmessagebuilder.md#constructor)


### Properties

* [message](textmessagebuilder.md#message)


### Methods

* [addLocationQuickReply](textmessagebuilder.md#addlocationquickreply)
* [addTextQuickReply](textmessagebuilder.md#addtextquickreply)
* [build](textmessagebuilder.md#build)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new TextMessageBuilder**(text: *`string`*): [TextMessageBuilder](textmessagebuilder.md)



*Defined in fb-api-helpers/text-message-builder.ts:5*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  - |





**Returns:** [TextMessageBuilder](textmessagebuilder.md)

---


## Properties
<a id="message"></a>

### «Protected» message

**●  message**:  *[TextMessage](../interfaces/send.textmessage.md)* 

*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[message](abstractmessagebuilder.md#message)*

*Defined in fb-api-helpers/abstract-message-builder.ts:7*





___


## Methods
<a id="addlocationquickreply"></a>

###  addLocationQuickReply

► **addLocationQuickReply**(): `this`




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[addLocationQuickReply](abstractmessagebuilder.md#addlocationquickreply)*

*Defined in fb-api-helpers/abstract-message-builder.ts:29*





**Returns:** `this`





___

<a id="addtextquickreply"></a>

###  addTextQuickReply

► **addTextQuickReply**(title: *`string`*, id: *`string`*, data?: *`string`⎮`any`*, imageUrl?: *`string`*): `this`




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[addTextQuickReply](abstractmessagebuilder.md#addtextquickreply)*

*Defined in fb-api-helpers/abstract-message-builder.ts:10*



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

► **build**(): [TextMessage](../interfaces/send.textmessage.md)




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[build](abstractmessagebuilder.md#build)*

*Overrides [AbstractBuilder](abstractbuilder.md).[build](abstractbuilder.md#build)*

*Defined in fb-api-helpers/abstract-message-builder.ts:38*





**Returns:** [TextMessage](../interfaces/send.textmessage.md)





___


