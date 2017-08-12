[@aiteq/messenger-bot](../README.md) > [Send](../modules/send.md) > [Element](../interfaces/send.element.md)

# Interface: Element

## Properties

<a id="buttons"></a>
### «optional» `buttons`

List of buttons on the element.

**type**: `Array`<[Button](../modules/send.md#button)>
___

<a id="default_action"></a>
### «optional» `default_action`

Default action to be triggered when user taps on the element row.

**type**: [DefaultAction](send.defaultaction.md)
___

<a id="image_url"></a>
### «optional» `image_url`

URL to image in list view item. It is required for the first element if `top_element_style` is `large`.

**type**: `string`
___

<a id="subtitle"></a>
### «optional» `subtitle`

Subtitle of the element.

**type**: `string`
___

<a id="title"></a>
###  `title`

Title of the element.

**type**: `string`
___
