[@aiteq/messenger-bot](../README.md) > [Chat](../classes/chat.md)

# Class: Chat
Provides methods for one-way bot-to-user communication. An instance of [Chat](chat.md) is always passed to hear and event handlers to be used for interaction with the user. **Note:** all methods are non-blocking and call underlaying API asynchronously.

## Index

### Methods
* [getPartnerId](chat.md#getpartnerid)
* [getUserProfile](chat.md#getuserprofile)
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

## Methods
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

**Returns:** `this` - for chaining
___

<a id="say"></a>
###  `say(text)`

The primary way to send a plain TEXT message to the user.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  a text to be send |

**Returns:** `this` - for chaining
___

<a id="sendaudio"></a>
###  `sendAudio(url, [reusable])`

Sends an audio file.

**Parameters:**
| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  |  | a URL of the audio file |
| reusable | `boolean`  | false | controls whether the attachment can be reused later |


**Returns:** `this` - for chaining
___

<a id="sendfile"></a>
###  `sendFile(url, [reusable])`

Sends a file.

**Parameters:**
| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  |  |   a URL of the file |
| reusable | `boolean`  | false | controls whether the attachment can be reused later |

**Returns:** `this` - for chaining
___

<a id="sendimage"></a>
###  `sendImage(url, [reusable])`

Sends an image.

**Parameters:**
| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   a URL of the image file |
| reusable | `boolean`  | false | controls whether the attachment can be reused later |

**Returns:** `this` - for chaining
___

<a id="sendmessage"></a>
###  `sendMessage(messageOrBuilder)`

Sends a message prepared manually or using message builder.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| messageOrBuilder | [Message](../modules/send.md#message) ⎮ [MessageBuilder](messagebuilder.md) | a structured message or message builder |

**Returns:** `this` - for chaining
___

<a id="sendvideo"></a>
###  `sendVideo(url, [reusable])`

Sends a video file.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | |   a URL of the video file |
| reusable | `boolean`  | false | controls whether the attachment can be reused later |

**Returns:** `this` - for chaining
___

<a id="startconversation"></a>
###  startConversation

Starts a new conversation.

**Returns:** [Conversation](conversation.md)
___

<a id="typingoff"></a>
###  `typingOff()`

Turns typing indicator OFF.

**Returns:** `this` - for chaining
___

<a id="typingon"></a>
###  `typingOn()`

Turns typing indicator ON for 20 seconds or next message.

**Returns:** `this` - for chaining
___
