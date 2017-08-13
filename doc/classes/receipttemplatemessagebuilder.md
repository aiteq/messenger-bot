[@aiteq/messenger-bot](../README.md) > [ReceiptTemplateMessageBuilder](../classes/receipttemplatemessagebuilder.md)

# Class: ReceiptTemplateMessageBuilder

Helps to create a [Open Graph Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/receipt-template) message.

## Hierarchy

[TemplateMessageBuilder](templatemessagebuilder.md)

**↳ ReceiptTemplateMessageBuilder**

## Index

### Constructors

* [constructor(recipientName, orderNumber, currency, paymentMethod, totalCost)](receipttemplatemessagebuilder.md#constructor)

### Methods

* [addElement(elementBuilder)](receipttemplatemessagebuilder.md#addelement)
* [addLocationQuickReply()](receipttemplatemessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](receipttemplatemessagebuilder.md#addquickreply)
* [setAddress(address)](receipttemplatemessagebuilder.md#setaddress)
* [setMerchantName(merchantName)](receipttemplatemessagebuilder.md#setmerchantname)
* [setOrderUrl(orderUrl)](receipttemplatemessagebuilder.md#setorderurl)
* [setPaymentAdjustments(adjustments)](receipttemplatemessagebuilder.md#setpaymentadjustments)
* [setSherable(sherable)](receipttemplatemessagebuilder.md#setsherable)
* [setShippingCost(shippingCost)](receipttemplatemessagebuilder.md#setshippingcost)
* [setSubtotal(subtotal)](receipttemplatemessagebuilder.md#setsubtotal)
* [setTimestamp(timestamp)](receipttemplatemessagebuilder.md#settimestamp)
* [setTotalTax(totalTax)](receipttemplatemessagebuilder.md#settotaltax)

### Static methods

* [createReceiptElement(title, price)](receipttemplatemessagebuilder.md#createreceiptelement)

---

## Constructors

<a id="constructor"></a>
### `new ReceiptTemplateMessageBuilder(recipientName, orderNumber, currency, paymentMethod, totalCost)`

Creates an instance of ReceiptTemplateMessageBuilder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientName | `string`   |  |
| orderNumber | `string`   |  |
| currency | `string`   |  |
| paymentMethod | `string`   |  |
| totalCost | `number`   |  |

**Returns:** [ReceiptTemplateMessageBuilder](receipttemplatemessagebuilder.md)

---

## Methods

<a id="addelement"></a>
###  `addElement(elementBuilder)`

Adds a Receipt Element representing items of the order. Max number of elements is limited to 100.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| elementBuilder | [ReceiptElementBuilder](receiptelementbuilder.md)   | |

**Returns:** `this` - for chaining
___

<a id="addlocationquickreply"></a>
###  `addLocationQuickReply()`

*Inherited from [MessageBuilder](messagebuilder.md)*

Adds a Quick Reply button to quickly send user's location.

**Returns:** `this` - for chaining
___

<a id="addquickreply"></a>
###  `addQuickReply(title, id, [data, [imageUrl]])`

*Inherited from [MessageBuilder](messagebuilder.md)*

Adds a Quick Reply button to the message.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string` | title of the Quick Reply |
| id | `string` | ID of the button (required for proper generation of webhook events) |
| data | `any` | optional data to be send when the user click on the Quick Reply button |
| imageUrl | `string` | URL of optional image |

**Returns:** `this` - for chaining
___

<a id="setaddress"></a>
###  `setAddress(address)`

Sets an address.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | [Address](../interfaces/send.address.md)   |  |

**Returns:** `this` - for chaining
___

<a id="setmerchantname"></a>
###  `setMerchantName(merchantName)`

Sets a name of the the merchant.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| merchantName | `string`   |  |

**Returns:** `this` - for chaining
___

<a id="setorderurl"></a>
###  `setOrderUrl(orderUrl)`

Sets a URL of the order.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| orderUrl | `string`   | URL |

**Returns:** `this` - for chaining
___

<a id="setpaymentadjustments"></a>
###  `setPaymentAdjustments(adjustments)`

Sets payment adjustements.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| adjustments | [PaymentAdjustments](../interfaces/send.paymentadjustments.md)   |  |

**Returns:** `this` - for chaining
___

<a id="setsherable"></a>
###  `setSherable(sherable)`

Controls native share button.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sherable | `boolean`   |  set to `false` to disable the native share button in Messenger |

**Returns:** `this` - for chaining
___

<a id="setshippingcost"></a>
###  `setShippingCost(shippingCost)`

Sets order's shipping cost.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| shippingCost | `number`   |  |

**Returns:** `this` - for chaining
___

<a id="setsubtotal"></a>
###  `setSubtotal(subtotal)`

Sets receipt's subtotal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| subtotal | `number`   |  |

**Returns:** `this` - for chaining
___

<a id="settimestamp"></a>
###  `setTimestamp(timestamp)`

Sets the timestamp.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| timestamp | `string`   |  |

**Returns:** `this` - for chaining
___

<a id="settotaltax"></a>
###  `setTotalTax(totalTax)`

Sets receipt's total tax.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| totalTax | `number`   |  |

**Returns:** `this` - for chaining
___

<a id="createreceiptelement"></a>
### `ReceiptTemplateMessageBuilder.createReceiptElement(title, price)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Receipt Element builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  title of the Receipt Element |
| price | `number`   |  item price |

**Returns:** [ReceiptElementBuilder](receiptelementbuilder.md)
___
