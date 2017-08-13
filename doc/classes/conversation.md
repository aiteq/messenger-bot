[@aiteq/messenger-bot](../README.md) > [Conversation](../classes/conversation.md)

# Class: Conversation
Allows synchronous, contextual interaction between the bot and user. The instance is created by calling the [Chat.startConversation()](./chat.md#startConversation).

**Note:** In this time, only TEXT and QUICK REPLY messages can be used as parts of conversations.

## Index

### Methods
* [ask](conversation.md#ask)
* [askWithMessage](conversation.md#askwithmessage)
* [end](conversation.md#end)
* [say](conversation.md#say)
---
## Methods
<a id="ask"></a>
###  `ask(text)`
Asks the user with a plain TEXT message and returns user's response (TEXT or QUICK REPLY).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  a question |

**Returns:** `Promise`<`string`>
___

<a id="askwithmessage"></a>
###  `askWithMessage(messageOrBuilder)`
Asks the user with a message prepared manually or using message builder. It's necessary when we want to force the user to response using QUICK REPLY buttons.

**Type parameters:**

T:  `string` ⎮ [QuickReplyPayload](../interfaces/webhook.quickreplypayload.md)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| messageOrBuilder | [Message](../modules/send.md#message) ⎮ [MessageBuilder](messagebuilder.md) |structured message or message builder |

**Returns:** `Promise`<`T`>
___

<a id="end"></a>
###  `end()`
Ends the conversation.

**Returns:** `void`
___

<a id="say"></a>
###  `say(text)`
Sends a plain TEXT message. Unlike the [Chat.say()](./chat.md#say) this method return a `Promise` so you can wait for the message to be send.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string` | a text to be send |

**Returns:** `Promise`<`void`>
___
