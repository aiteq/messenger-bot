[@aiteq/messenger-bot](../README.md) > [ResponderService](../classes/responderservice.md) > [Event](../modules/responderservice.event.md)



# Module: Event

## Index

### Variables

* [ATTACHMENT](responderservice.event.md#attachment)
* [ATTACHMENT_AUDIO](responderservice.event.md#attachment_audio)
* [ATTACHMENT_FALLBACK](responderservice.event.md#attachment_fallback)
* [ATTACHMENT_FILE](responderservice.event.md#attachment_file)
* [ATTACHMENT_IMAGE](responderservice.event.md#attachment_image)
* [ATTACHMENT_LOCATION](responderservice.event.md#attachment_location)
* [ATTACHMENT_VIDEO](responderservice.event.md#attachment_video)
* [CONVERSATION](responderservice.event.md#conversation)
* [GET_STARTED_BUTTON](responderservice.event.md#get_started_button)
* [LOCATION_QUICK_REPLY](responderservice.event.md#location_quick_reply)
* [MESSAGE_DELIVERED](responderservice.event.md#message_delivered)
* [MESSAGE_ECHO](responderservice.event.md#message_echo)
* [MESSAGE_READ](responderservice.event.md#message_read)
* [PERSISTENT_MENU](responderservice.event.md#persistent_menu)
* [POSTBACK](responderservice.event.md#postback)
* [POSTBACK_BUTTON](responderservice.event.md#postback_button)
* [TEXT_MESSAGE](responderservice.event.md#text_message)
* [TEXT_QUICK_REPLY](responderservice.event.md#text_quick_reply)



---
## Variables
<a id="attachment"></a>

###  ATTACHMENT

**●  ATTACHMENT**:  *"attachment"*  = "attachment"

*Defined in [server/responder-service.ts:289](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L289)*





___

<a id="attachment_audio"></a>

###  ATTACHMENT_AUDIO

**●  ATTACHMENT_AUDIO**:  *`string`*  =  ATTACHMENT + ":" + Webhook.AttachmentType.AUDIO

*Defined in [server/responder-service.ts:291](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L291)*





___

<a id="attachment_fallback"></a>

###  ATTACHMENT_FALLBACK

**●  ATTACHMENT_FALLBACK**:  *`string`*  =  ATTACHMENT + ":" + Webhook.AttachmentType.FALLBACK

*Defined in [server/responder-service.ts:294](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L294)*





___

<a id="attachment_file"></a>

###  ATTACHMENT_FILE

**●  ATTACHMENT_FILE**:  *`string`*  =  ATTACHMENT + ":" + Webhook.AttachmentType.FILE

*Defined in [server/responder-service.ts:293](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L293)*





___

<a id="attachment_image"></a>

###  ATTACHMENT_IMAGE

**●  ATTACHMENT_IMAGE**:  *`string`*  =  ATTACHMENT + ":" + Webhook.AttachmentType.IMAGE

*Defined in [server/responder-service.ts:290](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L290)*





___

<a id="attachment_location"></a>

###  ATTACHMENT_LOCATION

**●  ATTACHMENT_LOCATION**:  *`string`*  =  ATTACHMENT + ":" + Webhook.AttachmentType.LOCATION

*Defined in [server/responder-service.ts:295](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L295)*





___

<a id="attachment_video"></a>

###  ATTACHMENT_VIDEO

**●  ATTACHMENT_VIDEO**:  *`string`*  =  ATTACHMENT + ":" + Webhook.AttachmentType.VIDEO

*Defined in [server/responder-service.ts:292](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L292)*





___

<a id="conversation"></a>

###  CONVERSATION

**●  CONVERSATION**:  *"conversation"*  = "conversation"

*Defined in [server/responder-service.ts:287](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L287)*





___

<a id="get_started_button"></a>

###  GET_STARTED_BUTTON

**●  GET_STARTED_BUTTON**:  *`string`*  =  POSTBACK + ":" + Webhook.PostbackSource.GET_STARTED_BUTTON

*Defined in [server/responder-service.ts:296](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L296)*





___

<a id="location_quick_reply"></a>

###  LOCATION_QUICK_REPLY

**●  LOCATION_QUICK_REPLY**:  *`string`*  =  "qr:" + Send.ContentType.LOCATION

*Defined in [server/responder-service.ts:300](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L300)*





___

<a id="message_delivered"></a>

###  MESSAGE_DELIVERED

**●  MESSAGE_DELIVERED**:  *"delivery"*  = "delivery"

*Defined in [server/responder-service.ts:284](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L284)*





___

<a id="message_echo"></a>

###  MESSAGE_ECHO

**●  MESSAGE_ECHO**:  *"echo"*  = "echo"

*Defined in [server/responder-service.ts:286](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L286)*





___

<a id="message_read"></a>

###  MESSAGE_READ

**●  MESSAGE_READ**:  *"read"*  = "read"

*Defined in [server/responder-service.ts:285](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L285)*





___

<a id="persistent_menu"></a>

###  PERSISTENT_MENU

**●  PERSISTENT_MENU**:  *`string`*  =  POSTBACK + ":" + Webhook.PostbackSource.PERSISTENT_MENU

*Defined in [server/responder-service.ts:298](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L298)*





___

<a id="postback"></a>

###  POSTBACK

**●  POSTBACK**:  *"postback"*  = "postback"

*Defined in [server/responder-service.ts:288](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L288)*





___

<a id="postback_button"></a>

###  POSTBACK_BUTTON

**●  POSTBACK_BUTTON**:  *`string`*  =  POSTBACK + ":" + Webhook.PostbackSource.POSTBACK_BUTTON

*Defined in [server/responder-service.ts:297](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L297)*





___

<a id="text_message"></a>

###  TEXT_MESSAGE

**●  TEXT_MESSAGE**:  *"message"*  = "message"

*Defined in [server/responder-service.ts:283](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L283)*





___

<a id="text_quick_reply"></a>

###  TEXT_QUICK_REPLY

**●  TEXT_QUICK_REPLY**:  *`string`*  =  "qr:" + Send.ContentType.TEXT

*Defined in [server/responder-service.ts:299](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/responder-service.ts#L299)*





___


