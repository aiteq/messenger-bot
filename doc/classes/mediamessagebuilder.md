[@aiteq/messenger-bot](../README.md) > [MediaMessageBuilder](../classes/mediamessagebuilder.md)



# Class: MediaMessageBuilder

## Hierarchy


↳  [AbstractMessageBuilder](abstractmessagebuilder.md)[AttachmentMessage](../interfaces/send.attachmentmessage.md)

**↳ MediaMessageBuilder**







## Index

### Constructors

* [constructor](mediamessagebuilder.md#constructor)


### Properties

* [message](mediamessagebuilder.md#message)


### Methods

* [addLocationQuickReply](mediamessagebuilder.md#addlocationquickreply)
* [addTextQuickReply](mediamessagebuilder.md#addtextquickreply)
* [build](mediamessagebuilder.md#build)
* [setReusable](mediamessagebuilder.md#setreusable)
* [setUrl](mediamessagebuilder.md#seturl)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new MediaMessageBuilder**(type: *[MediaAttachmentType](../modules/send.md#mediaattachmenttype)*): [MediaMessageBuilder](mediamessagebuilder.md)



*Defined in [fb-api-helpers/media-message-builder.ts:5](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/media-message-builder.ts#L5)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | [MediaAttachmentType](../modules/send.md#mediaattachmenttype)   |  - |





**Returns:** [MediaMessageBuilder](mediamessagebuilder.md)

---


## Properties
<a id="message"></a>

### «Protected» message

**●  message**:  *[AttachmentMessage](../interfaces/send.attachmentmessage.md)* 

*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[message](abstractmessagebuilder.md#message)*

*Defined in [fb-api-helpers/abstract-message-builder.ts:7](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L7)*





___


## Methods
<a id="addlocationquickreply"></a>

###  addLocationQuickReply

► **addLocationQuickReply**(): `this`




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[addLocationQuickReply](abstractmessagebuilder.md#addlocationquickreply)*

*Defined in [fb-api-helpers/abstract-message-builder.ts:29](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L29)*





**Returns:** `this`





___

<a id="addtextquickreply"></a>

###  addTextQuickReply

► **addTextQuickReply**(title: *`string`*, id: *`string`*, data?: *`string`⎮`any`*, imageUrl?: *`string`*): `this`




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[addTextQuickReply](abstractmessagebuilder.md#addtextquickreply)*

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

► **build**(): [AttachmentMessage](../interfaces/send.attachmentmessage.md)




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[build](abstractmessagebuilder.md#build)*

*Overrides [AbstractBuilder](abstractbuilder.md).[build](abstractbuilder.md#build)*

*Defined in [fb-api-helpers/abstract-message-builder.ts:38](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L38)*





**Returns:** [AttachmentMessage](../interfaces/send.attachmentmessage.md)





___

<a id="setreusable"></a>

###  setReusable

► **setReusable**(reusable: *`boolean`*): `this`




*Defined in [fb-api-helpers/media-message-builder.ts:22](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/media-message-builder.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| reusable | `boolean`   |  - |





**Returns:** `this`





___

<a id="seturl"></a>

###  setUrl

► **setUrl**(url: *`string`*): `this`




*Defined in [fb-api-helpers/media-message-builder.ts:17](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/media-message-builder.ts#L17)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |





**Returns:** `this`





___


