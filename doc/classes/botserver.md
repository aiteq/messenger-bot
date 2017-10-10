[@aiteq/messenger-bot](../README.md) > [BotServer](../classes/botserver.md)

# Class: BotServer

Represents a bot server listening for webhook requests.

#### Example:
```typescript
new BotServer({
    name: "MyBot",
    verifyToken: "hasta-la-vista-baby",
    accessToken: "<your access token>",
    appSecret: "<your app secret>"
})
.hear("hello", (chat: Chat) => {
    chat.say("Hello! I'm Emil, the Bot. How are you?");
})
.start();
```

## Index

### Constructors

* [constructor(config)](botserver.md#constructor)

### Methods

* [addChatExtension(extension)](botserver.md#addchatextension)
* [hear(hooks, callback)](botserver.md#hear)
* [on(event, callback)](botserver.md#on1)
* [on(event, id, callback)](botserver.md#on2)
* [start](botserver.md#start)
* [stop](botserver.md#stop)

---
## Constructors
<a id="constructor"></a>

### `new BotServer(config)`

Creates an instance of the BotServer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [BotConfig](../interfaces/botconfig.md) | bot configuration object |

**Returns:** [BotServer](botserver.md) - an instance created

---

## Methods

<a id="addchatextension"></a>
###  `addChatExtension(extension)`

Install a [Chat Extension](https://developers.facebook.com/docs/messenger-platform/guides/chat-extensions).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| extension | [ChatExtension](../interfaces/chatextension.md)   | a Chat Extension to be installed |


**Returns:** `this`
___

<a id="hear"></a>
###  `hear(hooks, hearHandler)`

A convenient method to subscribe to specific *hooks* that can be found within a received _text message_. The hooks can be specified as a command or using a *regular expression*. When the server receives a text message, it test the content for specified hooks. If a match is found the server executes the subscribed callback. Commands are considered as case-insensitive.

The callback is executed with three parameters:

| # | Type | Description |
| ------ | ------ | ------ |
| 1. | [Chat](chat.md) | an instance of [Chat](chat.md) to be used for replaying |
| 2. | `string` | original message |
| 3. | `string[]` | an array of captured matches if the regular expression contains *capturing groups*  |

**Note**: The callbacks installed using [hear()](botserver.md#hear) are executed BEFORE callbacks installed using [on()](botserver.md#on1).

**Note**: the [hear()](botserver.md#hear) method listens only for TEXT messages.

**Note**: The callback is not executed when a received text message matches the hook but the message is part of an active conversation.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hooks | `RegExp` ⎮ `string` ⎮ `Array`<`RegExp` ⎮ `string`> | a string, a regexp or a mixed array of both strings and regexps |
| callback | `(chat: Chat, text: string, matches: string[]) => void`   |  a callback to be executed if a message matches one of the hooks |

**Returns:** `this` - for chaining
___

<a id="on"></a>
<a id="on1"></a>
###  `on(event, callback)`

Subscribe to an *event* emitted when a webhook request is received.

The callback is executed with two parameters:

| # | Type | Description |
| ------ | ------ | ------ |
| 1. | [Chat](chat.md) | an instance of [Chat](chat.md) to be used for replaying |
| 2. | `any` | event specific data (e.g. original text message) |


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | [Event](../modules/webhook.event.md) | an event for which the callback will be executed |
| callback | `(chat: Chat, ...args: any[]) => void` | a callback function |

**Returns:** `this` - for chaining

<a id="on2"></a>
###  `on(event, id, callback)`

Subscribe to an *identified event*. An identified event is specified, in addition to its type, with an ID. This feature is available for events capable of carrying data such as POSTBACK or PERSISTENT_MENU_ITEM.

The callback is executed with two parameters:

| # | Type | Description |
| ------ | ------ | ------ |
| 1. | [Chat](chat.md) | an instance of [Chat](chat.md) to be used for replaying |
| 2. | `any` | event specific data (e.g. original text message) |

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | [Event](../modules/webhook.event.md) | an event for which the callback will be executed |
| id | `string` | an identification of the event |
| callback | `(chat: Chat, ...args: any[]) => void` | a callback function |

**Returns:** `this` - for chaining
___

<a id="start"></a>
###  `start()`

Starts the bot server.

**Returns:** `void`
___

<a id="stop"></a>
###  `stop()`

Stops the bot server.

**Returns:** `void`
___
