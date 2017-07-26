[@aiteq/messenger-bot](../README.md) > [Conversation](../classes/conversation.md)



# Class: Conversation

## Index

### Constructors

* [constructor](conversation.md#constructor)


### Methods

* [ask](conversation.md#ask)
* [askWithMessage](conversation.md#askwithmessage)
* [end](conversation.md#end)
* [resume](conversation.md#resume)
* [say](conversation.md#say)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Conversation**(partnerId: *`string`*, chat: *[Chat](chat.md)*, sendApi: *[Api](send.api.md)*): [Conversation](conversation.md)



*Defined in [server/conversation.ts:10](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/conversation.ts#L10)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| partnerId | `string`   |  - |
| chat | [Chat](chat.md)   |  - |
| sendApi | [Api](send.api.md)   |  - |





**Returns:** [Conversation](conversation.md)

---



## Methods
<a id="ask"></a>

###  ask

► **ask**(text: *`string`*): `Promise`.<`string`>




*Defined in [server/conversation.ts:19](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/conversation.ts#L19)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  - |





**Returns:** `Promise`.<`string`>





___

<a id="askwithmessage"></a>

###  askWithMessage

► **askWithMessage**T(messageOrBuilder: *[Message](../modules/send.md#message)⎮[AbstractMessageBuilder](abstractmessagebuilder.md)[Message](../modules/send.md#message)*): `Promise`.<`T`>




*Defined in [server/conversation.ts:28](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/conversation.ts#L28)*



**Type parameters:**

#### T :  `string`⎮[QuickReplyPayload](../interfaces/webhook.quickreplypayload.md)
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| messageOrBuilder | [Message](../modules/send.md#message)⎮[AbstractMessageBuilder](abstractmessagebuilder.md)[Message](../modules/send.md#message)   |  - |





**Returns:** `Promise`.<`T`>





___

<a id="end"></a>

###  end

► **end**(): `void`




*Defined in [server/conversation.ts:50](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/conversation.ts#L50)*





**Returns:** `void`





___

<a id="resume"></a>

###  resume

► **resume**(data: *`string`⎮[QuickReplyPayload](../interfaces/webhook.quickreplypayload.md)*): `void`




*Defined in [server/conversation.ts:37](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/conversation.ts#L37)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string`⎮[QuickReplyPayload](../interfaces/webhook.quickreplypayload.md)   |  - |





**Returns:** `void`





___

<a id="say"></a>

###  say

► **say**(text: *`string`*): `Promise`.<`void`>




*Defined in [server/conversation.ts:15](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/conversation.ts#L15)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  - |





**Returns:** `Promise`.<`void`>





___


