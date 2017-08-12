[@aiteq/messenger-bot](../README.md) > [Send](../modules/send.md) > [GenericTemplate](../interfaces/send.generictemplate.md)

# Interface: GenericTemplate

## Properties

<a id="elements"></a>
###  `elements`

Data for each bubble in message.

**type**: `Array`<[Element](send.element.md)>
___

<a id="image_aspect_ratio"></a>
### «optional» `image_aspect_ratio`

Aspect ratio used to render images specified by `image_url` in `element` objects. Must be [ImageAspectRatio.HORIZONTAL](../enums/send.imageaspectratio.md#horizontal) or [ImageAspectRatio.SQUARE](../enums/send.imageaspectratio.md#square). Defaults to ImageAspectRatio.HORIZONTAL.

**type**: [ImageAspectRatio](../modules/send.imageaspectratio.md)
___

<a id="sherable"></a>
### «optional» `sherable`

Set to `false` to disable the native share button in Messenger for the template message.

**type**: `boolean`
___

<a id="template_type"></a>
###  `template_type`

**type**: `"generic"`
___
