[@aiteq/messenger-bot](../README.md) > [Send](../modules/send.md)

# Module: Send

Types for [Send API](https://developers.facebook.com/docs/messenger-platform/send-api-reference).

## Index

### Enums

* [ImageAspectRatio](../enums/send.imageaspectratio.md)
* [ListTopElementStyle](../enums/send.listtopelementstyle.md)
* [NotificationType](../enums/send.notificationtype.md)

### Interfaces

* [AbstractMessage](../interfaces/send.abstractmessage.md)
* [Address](../interfaces/send.address.md)
* [AttachmentMessage](../interfaces/send.attachmentmessage.md)
* [AudioAttachment](../interfaces/send.audioattachment.md)
* [ButtonTemplate](../interfaces/send.buttontemplate.md)
* [CallButton](../interfaces/send.callbutton.md)
* [DefaultAction](../interfaces/send.defaultaction.md)
* [Element](../interfaces/send.element.md)
* [FileAttachment](../interfaces/send.fileattachment.md)
* [GenericTemplate](../interfaces/send.generictemplate.md)
* [ImageAttachment](../interfaces/send.imageattachment.md)
* [ListTemplate](../interfaces/send.listtemplate.md)
* [LocationQuickReply](../interfaces/send.locationquickreply.md)
* [LoginButton](../interfaces/send.loginbutton.md)
* [LogoutButton](../interfaces/send.logoutbutton.md)
* [MediaPayload](../interfaces/send.mediapayload.md)
* [OpenGraphElement](../interfaces/send.opengraphelement.md)
* [OpenGraphTemplate](../interfaces/send.opengraphtemplate.md)
* [PaymentAdjustments](../interfaces/send.paymentadjustments.md)
* [PaymentSummary](../interfaces/send.paymentsummary.md)
* [PostbackButton](../interfaces/send.postbackbutton.md)
* [ReceiptElement](../interfaces/send.receiptelement.md)
* [ReceiptTemplate](../interfaces/send.receipttemplate.md)
* [ShareButton](../interfaces/send.sharebutton.md)
* [TemplateAttachment](../interfaces/send.templateattachment.md)
* [TextMessage](../interfaces/send.textmessage.md)
* [TextQuickReply](../interfaces/send.textquickreply.md)
* [UrlButton](../interfaces/send.urlbutton.md)
* [VideoAttachment](../interfaces/send.videoattachment.md)

### Type aliases

* [Attachment](send.md#attachment)
* [Button](send.md#button)
* [MediaAttachment](send.md#mediaattachment)
* [MediaAttachmentType](send.md#mediaattachmenttype)
* [Message](send.md#message)
* [QuickReply](send.md#quickreply)
* [Template](send.md#template)

---

## Type aliases

<a id="attachment"></a>
###  `Attachment`

**Τ Attachment**: *[MediaAttachment](send.md#mediaattachment)⎮[TemplateAttachment](../interfaces/send.templateattachment.md)* 
___

<a id="button"></a>
###  `Button`

**Τ Button**: *[UrlButton](../interfaces/send.urlbutton.md)⎮[PostbackButton](../interfaces/send.postbackbutton.md)⎮[CallButton](../interfaces/send.callbutton.md)⎮[ShareButton](../interfaces/send.sharebutton.md)⎮[LoginButton](../interfaces/send.loginbutton.md)⎮[LogoutButton](../interfaces/send.logoutbutton.md)* 
___

<a id="mediaattachment"></a>
###  `MediaAttachment`

**Τ MediaAttachment**: *[ImageAttachment](../interfaces/send.imageattachment.md)⎮[AudioAttachment](../interfaces/send.audioattachment.md)⎮[VideoAttachment](../interfaces/send.videoattachment.md)⎮[FileAttachment](../interfaces/send.fileattachment.md)* 
___

<a id="mediaattachmenttype"></a>
###  `MediaAttachmentType`

**Τ MediaAttachmentType**: *"image"⎮"audio"⎮"video"⎮"file"*
___

<a id="message"></a>
###  `Message`

**Τ Message**: *[TextMessage](../interfaces/send.textmessage.md)⎮[AttachmentMessage](../interfaces/send.attachmentmessage.md)*
___

<a id="quickreply"></a>
###  `QuickReply`

**Τ QuickReply**: *[TextQuickReply](../interfaces/send.textquickreply.md)⎮[LocationQuickReply](../interfaces/send.locationquickreply.md)* 
___

<a id="template"></a>
###  `Template`

**Τ Template**: *[GenericTemplate](../interfaces/send.generictemplate.md)⎮[ButtonTemplate](../interfaces/send.buttontemplate.md)⎮[ListTemplate](../interfaces/send.listtemplate.md)⎮[ReceiptTemplate](../interfaces/send.receipttemplate.md)⎮[OpenGraphTemplate](../interfaces/send.opengraphtemplate.md)* 
___
