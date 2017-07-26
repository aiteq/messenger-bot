[@aiteq/messenger-bot](../README.md) > [BotServer](../classes/botserver.md)



# Class: BotServer


Represents a bot server listening for webhook requests.

## Index

### Constructors

* [constructor](botserver.md#constructor)


### Methods

* [addExtension](botserver.md#addextension)
* [getMessengerProfile](botserver.md#getmessengerprofile)
* [hear](botserver.md#hear)
* [onConversation](botserver.md#onconversation)
* [onGetStarted](botserver.md#ongetstarted)
* [onMessage](botserver.md#onmessage)
* [onPersistentMenu](botserver.md#onpersistentmenu)
* [onPostback](botserver.md#onpostback)
* [onPostbackButton](botserver.md#onpostbackbutton)
* [onQuickReply](botserver.md#onquickreply)
* [start](botserver.md#start)
* [verifyRequestSignature](botserver.md#verifyrequestsignature)
* [normalizePort](botserver.md#normalizeport)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new BotServer**(config: *[BotServerConfig](../interfaces/botserverconfig.md)*): [BotServer](botserver.md)



*Defined in server/bot-server.ts:27*



Creates an instance of BotServer.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [BotServerConfig](../interfaces/botserverconfig.md)   |  Bot server configuration object. {BotServerConfig} for config options. |





**Returns:** [BotServer](botserver.md)

---



## Methods
<a id="addextension"></a>

###  addExtension

► **addExtension**(extension: *[MessengerExtension](../interfaces/messengerextension.md)*): `this`




*Defined in server/bot-server.ts:214*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| extension | [MessengerExtension](../interfaces/messengerextension.md)   |  - |





**Returns:** `this`





___

<a id="getmessengerprofile"></a>

###  getMessengerProfile

► **getMessengerProfile**(): [Api](messengerprofile.api.md)




*Defined in server/bot-server.ts:210*





**Returns:** [Api](messengerprofile.api.md)





___

<a id="hear"></a>

###  hear

► **hear**(hooks: *`RegExp`⎮`string`⎮`Array`.<`RegExp`⎮`string`>*, hearHandler: *[HearHandler](responderservice.md#hearhandler)*): `this`




*Defined in server/bot-server.ts:124*



A convenient method to subscribe to specific _hooks_ that can be found within a received _text message_. The hooks can be specified as a keyword or using a _regular expression_. When the server receives a text message, it test the content for specified hooks. If a match is found the server executes the subscribed callback. Keywords are considered as case-insensitive. The callbacks installed using the {BotServer.hear} method are executed BEFORE callbacks installed using the {onMessage()} method. Note that the {hear()} method can be used only for text messages.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hooks | `RegExp`⎮`string`⎮`Array`.<`RegExp`⎮`string`>   |  a string, a regexp or an array of both strings and regexps |
| hearHandler | [HearHandler](responderservice.md#hearhandler)   |  a callback to be executed if a message matches one of the hooks |





**Returns:** `this`
- for chaining






___

<a id="onconversation"></a>

###  onConversation

► **onConversation**(handler: *[EventHandler](responderservice.md#eventhandler)*): `this`




*Defined in server/bot-server.ts:203*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handler | [EventHandler](responderservice.md#eventhandler)   |  - |





**Returns:** `this`





___

<a id="ongetstarted"></a>

###  onGetStarted

► **onGetStarted**(eventHandler: *[EventHandler](responderservice.md#eventhandler)*): `this`




*Defined in server/bot-server.ts:175*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventHandler | [EventHandler](responderservice.md#eventhandler)   |  - |





**Returns:** `this`





___

<a id="onmessage"></a>

###  onMessage

► **onMessage**(eventHandler: *[EventHandler](responderservice.md#eventhandler)*): `this`




*Defined in server/bot-server.ts:161*



Subscribes to an event when a text message is received. The callback will be executed for all received text messages, even if the content matches a hook specified using the {hear} method. The callbacks installed using the {onMessage()} method are executed AFTER callbacks installed using the {hear()} method.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventHandler | [EventHandler](responderservice.md#eventhandler)   |  a callback to be executed when a text message will be received |





**Returns:** `this`
- for chaining






___

<a id="onpersistentmenu"></a>

###  onPersistentMenu

► **onPersistentMenu**(id: *`string`*, eventHandler: *[EventHandler](responderservice.md#eventhandler)*): `this`




*Defined in server/bot-server.ts:189*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| eventHandler | [EventHandler](responderservice.md#eventhandler)   |  - |





**Returns:** `this`





___

<a id="onpostback"></a>

###  onPostback

► **onPostback**(eventHandler: *[EventHandler](responderservice.md#eventhandler)*): `this`




*Defined in server/bot-server.ts:168*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventHandler | [EventHandler](responderservice.md#eventhandler)   |  - |





**Returns:** `this`





___

<a id="onpostbackbutton"></a>

###  onPostbackButton

► **onPostbackButton**(id: *`string`*, eventHandler: *[EventHandler](responderservice.md#eventhandler)*): `this`




*Defined in server/bot-server.ts:182*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| eventHandler | [EventHandler](responderservice.md#eventhandler)   |  - |





**Returns:** `this`





___

<a id="onquickreply"></a>

###  onQuickReply

► **onQuickReply**(id: *`string`*, eventHandler: *[EventHandler](responderservice.md#eventhandler)*): `this`




*Defined in server/bot-server.ts:196*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| eventHandler | [EventHandler](responderservice.md#eventhandler)   |  - |





**Returns:** `this`





___

<a id="start"></a>

###  start

► **start**(): `this`




*Defined in server/bot-server.ts:70*



Starts the bot server.




**Returns:** `this`







___

<a id="verifyrequestsignature"></a>

### «Private» verifyRequestSignature

► **verifyRequestSignature**(req: *`Request`*, res: *`Response`*, data: *`string`*): `void`




*Defined in server/bot-server.ts:219*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| req | `Request`   |  - |
| res | `Response`   |  - |
| data | `string`   |  - |





**Returns:** `void`





___

<a id="normalizeport"></a>

### «Static»«Private» normalizePort

► **normalizePort**(val: *`number`⎮`string`*): `number`⎮`string`⎮`boolean`




*Defined in server/bot-server.ts:236*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `number`⎮`string`   |  - |





**Returns:** `number`⎮`string`⎮`boolean`





___


