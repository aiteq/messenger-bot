[@aiteq/messenger-bot](../README.md) > [Webhook](../modules/webhook.md) > [Event](../enums/webhook.event.md)

# Enum: Event

Events emitted on incoming messages.

## Index

### Members

* [ATTACHMENT](webhook.event.md#attachment)
* [ATTACHMENT_AUDIO](webhook.event.md#attachment_audio)
* [ATTACHMENT_FALLBACK](webhook.event.md#attachment_fallback)
* [ATTACHMENT_FILE](webhook.event.md#attachment_file)
* [ATTACHMENT_IMAGE](webhook.event.md#attachment_image)
* [ATTACHMENT_LOCATION](webhook.event.md#attachment_location)
* [ATTACHMENT_VIDEO](webhook.event.md#attachment_video)
* [GET_STARTED_BUTTON](webhook.event.md#get_started_button)
* [LOCATION_QUICK_REPLY](webhook.event.md#location_quick_reply)
* [MESSAGE_DELIVERED](webhook.event.md#message_delivered)
* [MESSAGE_ECHO](webhook.event.md#message_echo)
* [MESSAGE_READ](webhook.event.md#message_read)
* [PERSISTENT_MENU](webhook.event.md#persistent_menu)
* [POSTBACK](webhook.event.md#postback)
* [POSTBACK_BUTTON](webhook.event.md#postback_button)
* [TEXT_MESSAGE](webhook.event.md#text_message)
* [TEXT_QUICK_REPLY](webhook.event.md#text_quick_reply)

---

## Members

<a id="attachment"></a>
###  `ATTACHMENT`

Emitted when the incoming message contains an attachment of any type. This event is emitted after the attachment-specific event (`ATTACHMENT_AUDIO`, `ATTACHMENT_FALLBACK`, `ATTACHMENT_FILE`, `ATTACHMENT_IMAGE`, `ATTACHMENT_LOCATION` or `ATTACHMENT_VIDEO`). Thus, the receiving an attachment message causes emitting two events:
1. an attachment-specific event (e.g. `ATTACHMENT_IMAGE`)
2. the `ATTACHMENT` event.
___

<a id="attachment_audio"></a>
###  `ATTACHMENT_AUDIO`

Emitted when the incoming message contains an audio file.
___

<a id="attachment_fallback"></a>
###  `ATTACHMENT_FALLBACK`

Emitted when the incoming message contains a fallback attachment.
___

<a id="attachment_file"></a>
###  `ATTACHMENT_FILE`

Emitted when the incoming message contains a file attachment.
___

<a id="attachment_image"></a>
###  `ATTACHMENT_IMAGE`

Emitted when the incoming message contains an image file.
___

<a id="attachment_location"></a>
###  `ATTACHMENT_LOCATION`

Emitted when the incoming message contains a location.
___

<a id="attachment_video"></a>
###  `ATTACHMENT_VIDEO`

Emitted when the incoming message contains a video file.
___

<a id="get_started_button"></a>
###  `GET_STARTED_BUTTON`

Emitted when the user tapped on the Get Started button.
___

<a id="location_quick_reply"></a>
###  `LOCATION_QUICK_REPLY`

Emitted when the user sent his location using Quick Reply button.
___

<a id="message_delivered"></a>
###  `MESSAGE_DELIVERED`

Emitted when a delivery confirmation is received.
___

<a id="message_echo"></a>
###  `MESSAGE_ECHO`

Emitted when an echo message is received.
___

<a id="message_read"></a>
###  `MESSAGE_READ`

Emitted when a read confirmation is received.
___

<a id="persistent_menu"></a>
###  `PERSISTENT_MENU`

Emitted when the user tapped on a persistent menu item.
___

<a id="postback"></a>
###  `POSTBACK`

Emitted when a postback message is received. This event is emitted after the source-specific event (`POSTBACK_BUTTON`, `GET_STARTED_BUTTON`, or `PERSISTENT_MENU`). Thus, the receiving a postback message causes emitting two events:
1. a source-specific event (e.g. `POSTBACK_BUTTON`)
2. the `POSTBACK` event.
___

<a id="postback_button"></a>
###  `POSTBACK_BUTTON`

Emitted when the user tapped on a postback button.
___

<a id="text_message"></a>
###  `TEXT_MESSAGE`

Emitted when a text message is received.
___

<a id="text_quick_reply"></a>
###  `TEXT_QUICK_REPLY`

Emitted when the user tapped on a quick reply button.
___
