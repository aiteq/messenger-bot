[@aiteq/messenger-bot](../README.md) > [Send](../modules/send.md) > [Api](../classes/send.api.md)



# Class: Api

## Hierarchy


 [GraphApi](graphapi.md)[Request](../interfaces/send.request.md)

**↳ Api**







## Index

### Modules

* [GraphApi](../modules/send.api.graphapi.md)


### Constructors

* [constructor](send.api.md#constructor)


### Properties

* [accessToken](send.api.md#accesstoken)
* [version](send.api.md#version)
* [reusableAttachments](send.api.md#reusableattachments)


### Methods

* [markSeen](send.api.md#markseen)
* [send](send.api.md#send)
* [sendAudio](send.api.md#sendaudio)
* [sendFile](send.api.md#sendfile)
* [sendImage](send.api.md#sendimage)
* [sendMediaAttachment](send.api.md#sendmediaattachment)
* [sendRequest](send.api.md#sendrequest)
* [sendText](send.api.md#sendtext)
* [sendVideo](send.api.md#sendvideo)
* [typingOff](send.api.md#typingoff)
* [typingOn](send.api.md#typingon)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Api**(accessToken: *`string`*): [Api](send.api.md)



*Overrides [GraphApi](graphapi.md).[constructor](graphapi.md#constructor)*

*Defined in fb-api/send.ts:11*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accessToken | `string`   |  - |





**Returns:** [Api](send.api.md)

---


## Properties
<a id="accesstoken"></a>

### «Protected» accessToken

**●  accessToken**:  *`string`* 

*Overrides [GraphApi](graphapi.md).[accessToken](graphapi.md#accesstoken)*

*Defined in fb-api/send.ts:14*





___

<a id="version"></a>

### «Protected»«Optional» version

**●  version**:  *`string`* 

*Inherited from [GraphApi](graphapi.md).[version](graphapi.md#version)*

*Defined in fb-api/graph-api.ts:12*





___

<a id="reusableattachments"></a>

### «Static»«Private» reusableAttachments

**●  reusableAttachments**:  *`Map`.<`string`>,.<`string`>*  =  new Map<string, string>()

*Defined in fb-api/send.ts:11*





___


## Methods
<a id="markseen"></a>

###  markSeen

► **markSeen**(recipientId: *`string`*): `void`




*Defined in fb-api/send.ts:56*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `void`





___

<a id="send"></a>

###  send

► **send**(recipientId: *`string`*, messageOrBuilder: *[Message](../modules/send.md#message)⎮[AbstractMessageBuilder](abstractmessagebuilder.md)[Message](../modules/send.md#message)*): `Promise`.<`any`>




*Defined in fb-api/send.ts:107*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| messageOrBuilder | [Message](../modules/send.md#message)⎮[AbstractMessageBuilder](abstractmessagebuilder.md)[Message](../modules/send.md#message)   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="sendaudio"></a>

###  sendAudio

► **sendAudio**(recipientId: *`string`*, url: *`string`*, reusable?: *`boolean`*): `Promise`.<`string`>




*Defined in fb-api/send.ts:26*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| recipientId | `string`  | - |   - |
| url | `string`  | - |   - |
| reusable | `boolean`  | false |   - |





**Returns:** `Promise`.<`string`>





___

<a id="sendfile"></a>

###  sendFile

► **sendFile**(recipientId: *`string`*, url: *`string`*, reusable?: *`boolean`*): `Promise`.<`string`>




*Defined in fb-api/send.ts:34*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| recipientId | `string`  | - |   - |
| url | `string`  | - |   - |
| reusable | `boolean`  | false |   - |





**Returns:** `Promise`.<`string`>





___

<a id="sendimage"></a>

###  sendImage

► **sendImage**(recipientId: *`string`*, url: *`string`*, reusable?: *`boolean`*): `Promise`.<`string`>




*Defined in fb-api/send.ts:22*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| recipientId | `string`  | - |   - |
| url | `string`  | - |   - |
| reusable | `boolean`  | false |   - |





**Returns:** `Promise`.<`string`>





___

<a id="sendmediaattachment"></a>

### «Private» sendMediaAttachment

► **sendMediaAttachment**(type: *[MediaAttachmentType](../modules/send.md#mediaattachmenttype)*, recipientId: *`string`*, url: *`string`*, reusable: *`boolean`*): `Promise`.<`string`>




*Defined in fb-api/send.ts:65*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | [MediaAttachmentType](../modules/send.md#mediaattachmenttype)   |  - |
| recipientId | `string`   |  - |
| url | `string`   |  - |
| reusable | `boolean`   |  - |





**Returns:** `Promise`.<`string`>





___

<a id="sendrequest"></a>

### «Protected» sendRequest

► **sendRequest**(data: *[Request](../interfaces/send.request.md)*, config?: *`AxiosRequestConfig`*): `Promise`.<`any`>




*Inherited from [GraphApi](graphapi.md).[sendRequest](graphapi.md#sendrequest)*

*Defined in fb-api/graph-api.ts:21*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | [Request](../interfaces/send.request.md)  | - |   - |
| config | `AxiosRequestConfig`  |  {} |   - |





**Returns:** `Promise`.<`any`>





___

<a id="sendtext"></a>

###  sendText

► **sendText**(recipientId: *`string`*, text: *`string`*): `Promise`.<`any`>




*Defined in fb-api/send.ts:18*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |
| text | `string`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="sendvideo"></a>

###  sendVideo

► **sendVideo**(recipientId: *`string`*, url: *`string`*, reusable?: *`boolean`*): `Promise`.<`string`>




*Defined in fb-api/send.ts:30*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| recipientId | `string`  | - |   - |
| url | `string`  | - |   - |
| reusable | `boolean`  | false |   - |





**Returns:** `Promise`.<`string`>





___

<a id="typingoff"></a>

###  typingOff

► **typingOff**(recipientId: *`string`*): `void`




*Defined in fb-api/send.ts:47*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `void`





___

<a id="typingon"></a>

###  typingOn

► **typingOn**(recipientId: *`string`*): `void`




*Defined in fb-api/send.ts:38*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  - |





**Returns:** `void`





___


