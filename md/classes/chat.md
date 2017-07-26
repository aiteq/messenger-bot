[@aiteq/messenger-bot](../README.md) > [Chat](../classes/chat.md)



# Class: Chat

## Index

### Constructors

* [constructor](chat.md#constructor)


### Properties

* [conversation](chat.md#conversation)
* [partnerId](chat.md#partnerid)
* [sendApi](chat.md#sendapi)
* [userProfileApi](chat.md#userprofileapi)


### Methods

* [endConversation](chat.md#endconversation)
* [getConversation](chat.md#getconversation)
* [getUserProfile](chat.md#getuserprofile)
* [isConversationActive](chat.md#isconversationactive)
* [markSeen](chat.md#markseen)
* [say](chat.md#say)
* [sendAudio](chat.md#sendaudio)
* [sendFile](chat.md#sendfile)
* [sendImage](chat.md#sendimage)
* [sendMessage](chat.md#sendmessage)
* [sendVideo](chat.md#sendvideo)
* [startConversation](chat.md#startconversation)
* [typingOff](chat.md#typingoff)
* [typingOn](chat.md#typingon)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Chat**(partnerId: *`string`*, sendApi: *[Api](send.api.md)*, userProfileApi: *[Api](userprofile.api.md)*): [Chat](chat.md)



*Defined in server/chat.ts:10*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| partnerId | `string`   |  - |
| sendApi | [Api](send.api.md)   |  - |
| userProfileApi | [Api](userprofile.api.md)   |  - |





**Returns:** [Chat](chat.md)

---


## Properties
<a id="conversation"></a>

### «Private» conversation

**●  conversation**:  *[Conversation](conversation.md)* 

*Defined in server/chat.ts:10*





___

<a id="partnerid"></a>

### «Protected» partnerId

**●  partnerId**:  *`string`* 

*Defined in server/chat.ts:13*





___

<a id="sendapi"></a>

### «Protected» sendApi

**●  sendApi**:  *[Api](send.api.md)* 

*Defined in server/chat.ts:13*





___

<a id="userprofileapi"></a>

### «Protected» userProfileApi

**●  userProfileApi**:  *[Api](userprofile.api.md)* 

*Defined in server/chat.ts:13*





___


## Methods
<a id="endconversation"></a>

###  endConversation

► **endConversation**(): `this`




*Defined in server/chat.ts:69*





**Returns:** `this`





___

<a id="getconversation"></a>

###  getConversation

► **getConversation**(): [Conversation](conversation.md)




*Defined in server/chat.ts:78*





**Returns:** [Conversation](conversation.md)





___

<a id="getuserprofile"></a>

###  getUserProfile

► **getUserProfile**(): `Promise`.<[Response](../interfaces/userprofile.response.md)>




*Defined in server/chat.ts:60*





**Returns:** `Promise`.<[Response](../interfaces/userprofile.response.md)>





___

<a id="isconversationactive"></a>

###  isConversationActive

► **isConversationActive**(): `boolean`




*Defined in server/chat.ts:74*





**Returns:** `boolean`





___

<a id="markseen"></a>

###  markSeen

► **markSeen**(): `this`




*Defined in server/chat.ts:30*





**Returns:** `this`





___

<a id="say"></a>

###  say

► **say**(text: *`string`*): `this`




*Defined in server/chat.ts:15*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  - |





**Returns:** `this`





___

<a id="sendaudio"></a>

###  sendAudio

► **sendAudio**(url: *`string`*, reusable?: *`boolean`*): `this`




*Defined in server/chat.ts:40*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   - |
| reusable | `boolean`  | false |   - |





**Returns:** `this`





___

<a id="sendfile"></a>

###  sendFile

► **sendFile**(url: *`string`*, reusable?: *`boolean`*): `this`




*Defined in server/chat.ts:50*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   - |
| reusable | `boolean`  | false |   - |





**Returns:** `this`





___

<a id="sendimage"></a>

###  sendImage

► **sendImage**(url: *`string`*, reusable?: *`boolean`*): `this`




*Defined in server/chat.ts:35*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   - |
| reusable | `boolean`  | false |   - |





**Returns:** `this`





___

<a id="sendmessage"></a>

###  sendMessage

► **sendMessage**(messageOrBuilder: *[Message](../modules/send.md#message)⎮[AbstractMessageBuilder](abstractmessagebuilder.md)[Message](../modules/send.md#message)*): `this`




*Defined in server/chat.ts:55*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| messageOrBuilder | [Message](../modules/send.md#message)⎮[AbstractMessageBuilder](abstractmessagebuilder.md)[Message](../modules/send.md#message)   |  - |





**Returns:** `this`





___

<a id="sendvideo"></a>

###  sendVideo

► **sendVideo**(url: *`string`*, reusable?: *`boolean`*): `this`




*Defined in server/chat.ts:45*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   - |
| reusable | `boolean`  | false |   - |





**Returns:** `this`





___

<a id="startconversation"></a>

###  startConversation

► **startConversation**(): [Conversation](conversation.md)




*Defined in server/chat.ts:64*





**Returns:** [Conversation](conversation.md)





___

<a id="typingoff"></a>

###  typingOff

► **typingOff**(): `this`




*Defined in server/chat.ts:25*





**Returns:** `this`





___

<a id="typingon"></a>

###  typingOn

► **typingOn**(): `this`




*Defined in server/chat.ts:20*





**Returns:** `this`





___


