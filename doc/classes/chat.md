[@aiteq/messenger-bot](../README.md) > [Chat](../classes/chat.md)

# Class: Chat
Provides methods for two-way bot-to-user communication. An instance of [Chat](chat.md) is always passed to hear and event handlers to be used for interaction with the user. **Note:** all methods are non-blocking and call underlaying API asynchronously.

## Index

### Methods
* [ask(text, validator)](conversation.md#ask)
* [askWithMessage(messageOrBuilder, validator)](conversation.md#askwithmessage)
* [getPartnerId](chat.md#getpartnerid)
* [getUserProfile](chat.md#getuserprofile)
* [markSeen](chat.md#markseen)
* [say](chat.md#say)
* [sendAudio](chat.md#sendaudio)
* [sendFile](chat.md#sendfile)
* [sendImage](chat.md#sendimage)
* [sendMessage](chat.md#sendmessage)
* [sendVideo](chat.md#sendvideo)
* [typingOff](chat.md#typingoff)
* [typingOn](chat.md#typingon)
* [wait](chat.md#wait)

---

## Methods
<a id="ask"></a>
###  `ask(text, validator)`
Asks the user with a plain TEXT message and returns user's response (TEXT or QUICK REPLY).
If a validator is specified, the bot will automatically repeat the challenge until valid response.

As a validator you can use functions from [validator.js](https://github.com/chriso/validator.js) package:
```typescript
import * as validator from "validator";

bot.on(Webhook.Event.PERSISTENT_MENU, "menu-item-form", async (chat: Chat) => {
    //...
    let email: string = await chat.ask("Give me your email address, please", validator.isEmail)
    //...
});
```
The bot will automatically repeat the question until the user enters a valid email address.

**Note:** No events are emitted and no hear handlers called when the bot receives an answer to the question asked.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  a question |
| validator | `(text: string) => boolean` | optional validator function - returns `true` if the input is valid |

**Returns:** `Promise`<`string`>
___

<a id="askwithmessage"></a>
###  `askWithMessage(messageOrBuilder, validator)`
Asks the user with a message prepared manually or using message builder. It's necessary when we want to force the user to response using QUICK REPLY buttons.

If a validator is specified, the bot will automatically repeat the challenge until valid response.

**Note:** No events are emitted and no hear handlers called when the bot receives an answer to the question asked.

**Type parameters:**

T: `string` ⎮ [QuickReplyPayload](../interfaces/webhook.quickreplypayload.md)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| messageOrBuilder | [Message](../modules/send.md#message) ⎮ [MessageBuilder](messagebuilder.md) |structured message or message builder |
| validator | `(text: string) => boolean` | optional validator function - returns `true` if the input is valid |

**Returns:** `Promise`<`T`>
___

<a id="getpartnerid"></a>
###  `getPartnerId()`

Returns an ID of the chat partner.

**Returns:** `string`
___

<a id="getuserprofile"></a>
###  `getUserProfile()`

Returns user's profile containing public information.

**Returns:** `Promise`<`UserProfile`> - user's public profile information
___

<a id="markseen"></a>
###  `markSeen()`

Marks the last sent message as read.

**Returns:** `Promise`<`Send.Response`>
___

<a id="say"></a>
###  `say(text)`

The primary way to send a plain TEXT message to the user.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  a text to be send |

**Returns:** `Promise`<[Send.Response](../interfaces/send.response.md)>
___

<a id="sendaudio"></a>
###  `sendAudio(url, [reusable])`

Sends an audio file.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  |  | a URL of the audio file |
| reusable | `boolean`  | false | controls whether the attachment can be reused later |

**Returns:** `Promise`<[Send.Response](../interfaces/send.response.md)>
___

<a id="sendfile"></a>
###  `sendFile(url, [reusable])`

Sends a file.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  |  |   a URL of the file |
| reusable | `boolean`  | false | controls whether the attachment can be reused later |

**Returns:** `Promise`<[Send.Response](../interfaces/send.response.md)>
___

<a id="sendimage"></a>
###  `sendImage(url, [reusable])`

Sends an image.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   a URL of the image file |
| reusable | `boolean`  | false | controls whether the attachment can be reused later |

**Returns:** `Promise`<[Send.Response](../interfaces/send.response.md)>
___

<a id="sendmessage"></a>
###  `sendMessage(messageOrBuilder)`

Sends a message prepared manually or using message builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| messageOrBuilder | [Message](../modules/send.md#message) ⎮ [MessageBuilder](messagebuilder.md) | a structured message or message builder |

**Returns:** `Promise`<[Send.Response](../interfaces/send.response.md)>
___

<a id="sendvideo"></a>
###  `sendVideo(url, [reusable])`

Sends a video file.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | |   a URL of the video file |
| reusable | `boolean`  | false | controls whether the attachment can be reused later |

**Returns:** `Promise`<[Send.Response](../interfaces/send.response.md)>
___

<a id="typingoff"></a>
###  `typingOff()`

Turns typing indicator OFF.

**Returns:** `Promise`<`Send.Response`>
___

<a id="typingon"></a>
###  `typingOn()`

Turns typing indicator ON for 20 seconds or next message.

**Returns:** `Promise`<`Send.Response`>
___

<a id="wait"></a>
###  `wait()`

Wait for the given seconds before next chat action.
```typescript
bot.hear("order", async (chat: Chat) => {
    //...
    chat.wait(30).say("Sorry to disturb you yet again, but I want to ask you ...");
    //...
});
```

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| seconds | `number`  | | number of seconds to wait |

**Returns:** `this` - for chaining
___
