[@aiteq/messenger-bot](../README.md) > [ResponderService](../classes/responderservice.md)



# Class: ResponderService

## Hierarchy


 [RouterService](routerservice.md)

**↳ ResponderService**







## Index

### Modules

* [Event](../modules/responderservice.event.md)


### Type aliases

* [Event](responderservice.md#event-1)
* [EventHandler](responderservice.md#eventhandler)
* [HearHandler](responderservice.md#hearhandler)


### Constructors

* [constructor](responderservice.md#constructor)


### Methods

* [callEventHandlers](responderservice.md#calleventhandlers)
* [get](responderservice.md#get)
* [getRouter](responderservice.md#getrouter)
* [hear](responderservice.md#hear)
* [on](responderservice.md#on)
* [post](responderservice.md#post)
* [processAttachment](responderservice.md#processattachment)
* [processDelivery](responderservice.md#processdelivery)
* [processEcho](responderservice.md#processecho)
* [processPostback](responderservice.md#processpostback)
* [processQuickReply](responderservice.md#processquickreply)
* [processRead](responderservice.md#processread)
* [processTextMessage](responderservice.md#processtextmessage)



---
## Type aliases
<a id="event-1"></a>

### «Static» Event

**Τ Event**:  *"message"⎮"delivery"⎮"read"⎮"echo"⎮"conversation"⎮"postback"⎮"attachment"⎮`string`⎮`string`⎮`string`⎮`string`⎮`string`⎮`string`⎮`string`⎮`string`⎮`string`⎮`string`* 

*Defined in server/responder-service.ts:303*





___

<a id="eventhandler"></a>

### «Static» EventHandler

**Τ EventHandler**:  *function* 

*Defined in server/responder-service.ts:323*


#### Type declaration
(chat: *[Chat](chat.md)*, senderId: *`string`*, data: *`any`*, context?: *`Map`.<`string`>,.<`any`>*): `void`


*Defined in server/responder-service.ts:323*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| chat | [Chat](chat.md)   |  - |
| senderId | `string`   |  - |
| data | `any`   |  - |
| context | `Map`.<`string`>,.<`any`>   |  - |





**Returns:** `void`






___

<a id="hearhandler"></a>

### «Static» HearHandler

**Τ HearHandler**:  *function* 

*Defined in server/responder-service.ts:322*


#### Type declaration
(chat: *[Chat](chat.md)*, senderId: *`string`*, text: *`string`*): `void`


*Defined in server/responder-service.ts:322*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| chat | [Chat](chat.md)   |  - |
| senderId | `string`   |  - |
| text | `string`   |  - |





**Returns:** `void`






___


## Constructors
<a id="constructor"></a>


### ⊕ **new ResponderService**(accessToken: *`string`*): [ResponderService](responderservice.md)



*Overrides [RouterService](routerservice.md).[constructor](routerservice.md#constructor)*

*Defined in server/responder-service.ts:20*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accessToken | `string`   |  - |





**Returns:** [ResponderService](responderservice.md)

---



## Methods
<a id="calleventhandlers"></a>

### «Private» callEventHandlers

► **callEventHandlers**(key: *`string`⎮[PostbackSource](../modules/webhook.postbacksource.md)*, senderId: *`string`*, data: *`any`*, chat: *[Chat](chat.md)*, context?: *`Map`.<`string`>,.<`any`>*): `void`




*Defined in server/responder-service.ts:268*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `string`⎮[PostbackSource](../modules/webhook.postbacksource.md)   |  - |
| senderId | `string`   |  - |
| data | `any`   |  - |
| chat | [Chat](chat.md)   |  - |
| context | `Map`.<`string`>,.<`any`>   |  - |





**Returns:** `void`





___

<a id="get"></a>

### «Protected» get

► **get**(route: *`string`*, func: *`RequestHandler`*): `Router`




*Inherited from [RouterService](routerservice.md).[get](routerservice.md#get)*

*Defined in server/router-service.ts:17*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| route | `string`   |  - |
| func | `RequestHandler`   |  - |





**Returns:** `Router`





___

<a id="getrouter"></a>

###  getRouter

► **getRouter**(): `Router`




*Inherited from [RouterService](routerservice.md).[getRouter](routerservice.md#getrouter)*

*Defined in server/router-service.ts:13*





**Returns:** `Router`





___

<a id="hear"></a>

###  hear

► **hear**(hooks: *`Array`.<`RegExp`>*, handler: *[HearHandler](responderservice.md#hearhandler)*): `this`




*Defined in server/responder-service.ts:102*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hooks | `Array`.<`RegExp`>   |  - |
| handler | [HearHandler](responderservice.md#hearhandler)   |  - |





**Returns:** `this`





___

<a id="on"></a>

###  on

► **on**(event: *[Event](../modules/responderservice.event.md)*, handler: *[EventHandler](responderservice.md#eventhandler)*): `this`

► **on**(event: *[Event](../modules/responderservice.event.md)*, id: *`string`*, handler: *[EventHandler](responderservice.md#eventhandler)*): `this`




*Defined in server/responder-service.ts:112*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | [Event](../modules/responderservice.event.md)   |  - |
| handler | [EventHandler](responderservice.md#eventhandler)   |  - |





**Returns:** `this`




*Defined in server/responder-service.ts:113*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | [Event](../modules/responderservice.event.md)   |  - |
| id | `string`   |  - |
| handler | [EventHandler](responderservice.md#eventhandler)   |  - |





**Returns:** `this`





___

<a id="post"></a>

### «Protected» post

► **post**(route: *`string`*, func: *`RequestHandler`*): `Router`




*Inherited from [RouterService](routerservice.md).[post](routerservice.md#post)*

*Defined in server/router-service.ts:22*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| route | `string`   |  - |
| func | `RequestHandler`   |  - |





**Returns:** `Router`





___

<a id="processattachment"></a>

### «Private» processAttachment

► **processAttachment**(senderId: *`string`*, message: *[Message](../interfaces/webhook.message.md)*, chat: *[Chat](chat.md)*): `void`




*Defined in server/responder-service.ts:167*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| senderId | `string`   |  - |
| message | [Message](../interfaces/webhook.message.md)   |  - |
| chat | [Chat](chat.md)   |  - |





**Returns:** `void`





___

<a id="processdelivery"></a>

### «Private» processDelivery

► **processDelivery**(senderId: *`string`*, delivery: *[DeliveryInfo](../interfaces/webhook.deliveryinfo.md)*, chat: *[Chat](chat.md)*): `void`




*Defined in server/responder-service.ts:252*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| senderId | `string`   |  - |
| delivery | [DeliveryInfo](../interfaces/webhook.deliveryinfo.md)   |  - |
| chat | [Chat](chat.md)   |  - |





**Returns:** `void`





___

<a id="processecho"></a>

### «Private» processEcho

► **processEcho**(senderId: *`string`*, message: *[Message](../interfaces/webhook.message.md)*, chat: *[Chat](chat.md)*): `void`




*Defined in server/responder-service.ts:244*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| senderId | `string`   |  - |
| message | [Message](../interfaces/webhook.message.md)   |  - |
| chat | [Chat](chat.md)   |  - |





**Returns:** `void`





___

<a id="processpostback"></a>

### «Private» processPostback

► **processPostback**(senderId: *`string`*, postback: *[Postback](../interfaces/webhook.postback.md)*, chat: *[Chat](chat.md)*): `void`




*Defined in server/responder-service.ts:206*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| senderId | `string`   |  - |
| postback | [Postback](../interfaces/webhook.postback.md)   |  - |
| chat | [Chat](chat.md)   |  - |





**Returns:** `void`





___

<a id="processquickreply"></a>

### «Private» processQuickReply

► **processQuickReply**(senderId: *`string`*, message: *[Message](../interfaces/webhook.message.md)*, chat: *[Chat](chat.md)*): `void`




*Defined in server/responder-service.ts:222*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| senderId | `string`   |  - |
| message | [Message](../interfaces/webhook.message.md)   |  - |
| chat | [Chat](chat.md)   |  - |





**Returns:** `void`





___

<a id="processread"></a>

### «Private» processRead

► **processRead**(senderId: *`string`*, read: *[ReadInfo](../interfaces/webhook.readinfo.md)*, chat: *[Chat](chat.md)*): `void`




*Defined in server/responder-service.ts:260*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| senderId | `string`   |  - |
| read | [ReadInfo](../interfaces/webhook.readinfo.md)   |  - |
| chat | [Chat](chat.md)   |  - |





**Returns:** `void`





___

<a id="processtextmessage"></a>

### «Private» processTextMessage

► **processTextMessage**(senderId: *`string`*, message: *[Message](../interfaces/webhook.message.md)*, chat: *[Chat](chat.md)*): `void`




*Defined in server/responder-service.ts:140*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| senderId | `string`   |  - |
| message | [Message](../interfaces/webhook.message.md)   |  - |
| chat | [Chat](chat.md)   |  - |





**Returns:** `void`





___


