[@aiteq/messenger-bot](../README.md) > [Send](../modules/send.md) > [ShareButton](../interfaces/send.sharebutton.md)

# Interface: ShareButton

Interface for [Share Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/share-button).

## Properties

<a id="share_contents"></a>
### «optional» `share_contents`

The message that you wish the recipient of the share to see, if it is different from the one this button is attached to. The format follows that used in [Send API](https://developers.facebook.com/docs/messenger-platform/send-api-reference), but must be a [generic template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template) with up to one [URL Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/url-button).

**type**: { attachment: [Send.GenericTemplateAttachment](../interfaces/send.generictemplateattachment.md) }
___

<a id="type"></a>
###  `type`

Type of button. Must be `"element_share"`.

**type**: `"element_share"`
___


