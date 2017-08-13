[@aiteq/messenger-bot](../README.md) > [ReceiptElementBuilder](../classes/receiptelementbuilder.md)

# Class: ReceiptElementBuilder

Helps to create a [Receipt Element](https://developers.facebook.com/docs/messenger-platform/send-api-reference/receipt-template).

## Hierarchy

[Builder](builder.md)

**↳ ReceiptElementBuilder**

## Index

### Constructors

* [constructor(title, price)](receiptelementbuilder.md#constructor)

### Methods

* [setCurrency(currency)](receiptelementbuilder.md#setcurrency)
* [setImageUrl(imageUrl)](receiptelementbuilder.md#setimageurl)
* [setQuantity(quantity)](receiptelementbuilder.md#setquantity)
* [setSubtitle(subtitle)](receiptelementbuilder.md#setsubtitle)

---

## Constructors

<a id="constructor"></a>
### `new ReceiptElementBuilder(title, price)`

Creates an instance of ReceiptBuilder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the element |
| price | `number`   | price of the item |

**Returns:** [ReceiptElementBuilder](receiptelementbuilder.md)

---

## Methods

<a id="setcurrency"></a>
###  `setCurrency(currency)`

Sets receipt's currency.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| currency | `string`   | currency code |

**Returns:** `this` - for chaining
___

<a id="setimageurl"></a>
###  `setImageUrl(imageUrl)`

Sets Recipient Element's image.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| imageUrl | `string`   | URL of the image |

**Returns:** `this` - for chaining
___

<a id="setquantity"></a>
###  `setQuantity(quantity)`

Sets a number of quantity.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| quantity | `number`   |  |

**Returns:** `this` - for chaining
___

<a id="setsubtitle"></a>
###  `setSubtitle(subtitle)`

Sets a text for Receipt Element's subtitle.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| subtitle | `string`   | optional subtitle of the element |

**Returns:** `this` - for chaining
___
