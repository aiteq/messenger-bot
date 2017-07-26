[@aiteq/messenger-bot](../README.md) > [ReceiptTemplateMessageBuilder](../classes/receipttemplatemessagebuilder.md)



# Class: ReceiptTemplateMessageBuilder

## Hierarchy


↳  [TemplateMessageBuilder](templatemessagebuilder.md)[ReceiptTemplate](../interfaces/send.receipttemplate.md)

**↳ ReceiptTemplateMessageBuilder**







## Index

### Modules

* [TemplateMessageBuilder](../modules/receipttemplatemessagebuilder.templatemessagebuilder.md)


### Constructors

* [constructor](receipttemplatemessagebuilder.md#constructor)


### Properties

* [message](receipttemplatemessagebuilder.md#message)
* [template](receipttemplatemessagebuilder.md#template)


### Methods

* [addElement](receipttemplatemessagebuilder.md#addelement)
* [addLocationQuickReply](receipttemplatemessagebuilder.md#addlocationquickreply)
* [addTextQuickReply](receipttemplatemessagebuilder.md#addtextquickreply)
* [build](receipttemplatemessagebuilder.md#build)
* [createMessage](receipttemplatemessagebuilder.md#createmessage)
* [setAddress](receipttemplatemessagebuilder.md#setaddress)
* [setMerchantName](receipttemplatemessagebuilder.md#setmerchantname)
* [setOrderUrl](receipttemplatemessagebuilder.md#setorderurl)
* [setPaymentAdjustments](receipttemplatemessagebuilder.md#setpaymentadjustments)
* [setSherable](receipttemplatemessagebuilder.md#setsherable)
* [setShippingCost](receipttemplatemessagebuilder.md#setshippingcost)
* [setSubtotal](receipttemplatemessagebuilder.md#setsubtotal)
* [setTimestamp](receipttemplatemessagebuilder.md#settimestamp)
* [setTotalTax](receipttemplatemessagebuilder.md#settotaltax)
* [createCallButton](receipttemplatemessagebuilder.md#createcallbutton)
* [createDefaultAction](receipttemplatemessagebuilder.md#createdefaultaction)
* [createElement](receipttemplatemessagebuilder.md#createelement)
* [createLoginButton](receipttemplatemessagebuilder.md#createloginbutton)
* [createLogoutButton](receipttemplatemessagebuilder.md#createlogoutbutton)
* [createPostbackButton](receipttemplatemessagebuilder.md#createpostbackbutton)
* [createShareButton](receipttemplatemessagebuilder.md#createsharebutton)
* [createUrlButton](receipttemplatemessagebuilder.md#createurlbutton)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ReceiptTemplateMessageBuilder**(): [ReceiptTemplateMessageBuilder](receipttemplatemessagebuilder.md)



*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[constructor](templatemessagebuilder.md#constructor)*

*Defined in fb-api-helpers/template-message-builder.ts:11*





**Returns:** [ReceiptTemplateMessageBuilder](receipttemplatemessagebuilder.md)

---


## Properties
<a id="message"></a>

### «Protected» message

**●  message**:  *[AttachmentMessage](../interfaces/send.attachmentmessage.md)* 

*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[message](abstractmessagebuilder.md#message)*

*Defined in fb-api-helpers/abstract-message-builder.ts:7*





___

<a id="template"></a>

### «Protected» template

**●  template**:  *[ReceiptTemplate](../interfaces/send.receipttemplate.md)* 

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[template](templatemessagebuilder.md#template-1)*

*Defined in fb-api-helpers/template-message-builder.ts:9*





___


## Methods
<a id="addelement"></a>

###  addElement

► **addElement**(element: *[ReceiptElement](templatemessagebuilder.receiptelement.md)*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:40*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| element | [ReceiptElement](templatemessagebuilder.receiptelement.md)   |  - |





**Returns:** `this`





___

<a id="addlocationquickreply"></a>

###  addLocationQuickReply

► **addLocationQuickReply**(): `this`




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[addLocationQuickReply](abstractmessagebuilder.md#addlocationquickreply)*

*Defined in fb-api-helpers/abstract-message-builder.ts:29*





**Returns:** `this`





___

<a id="addtextquickreply"></a>

###  addTextQuickReply

► **addTextQuickReply**(title: *`string`*, id: *`string`*, data?: *`string`⎮`any`*, imageUrl?: *`string`*): `this`




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[addTextQuickReply](abstractmessagebuilder.md#addtextquickreply)*

*Defined in fb-api-helpers/abstract-message-builder.ts:10*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| id | `string`   |  - |
| data | `string`⎮`any`   |  - |
| imageUrl | `string`   |  - |





**Returns:** `this`





___

<a id="build"></a>

###  build

► **build**(): [AttachmentMessage](../interfaces/send.attachmentmessage.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[build](templatemessagebuilder.md#build)*

*Overrides [AbstractMessageBuilder](abstractmessagebuilder.md).[build](abstractmessagebuilder.md#build)*

*Defined in fb-api-helpers/template-message-builder.ts:55*





**Returns:** [AttachmentMessage](../interfaces/send.attachmentmessage.md)





___

<a id="createmessage"></a>

###  createMessage

► **createMessage**(recipientName: *`string`*, orderNumber: *`string`*, currency: *`string`*, paymentMethod: *`string`*, totalCost: *`number`*): `this`




*Overrides [TemplateMessageBuilder](templatemessagebuilder.md).[createMessage](templatemessagebuilder.md#createmessage)*

*Defined in fb-api-helpers/receipt-template-message-builder.ts:8*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientName | `string`   |  - |
| orderNumber | `string`   |  - |
| currency | `string`   |  - |
| paymentMethod | `string`   |  - |
| totalCost | `number`   |  - |





**Returns:** `this`





___

<a id="setaddress"></a>

###  setAddress

► **setAddress**(address: *[Address](../interfaces/send.address.md)*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:45*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | [Address](../interfaces/send.address.md)   |  - |





**Returns:** `this`





___

<a id="setmerchantname"></a>

###  setMerchantName

► **setMerchantName**(merchantName: *`string`*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:25*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| merchantName | `string`   |  - |





**Returns:** `this`





___

<a id="setorderurl"></a>

###  setOrderUrl

► **setOrderUrl**(orderUrl: *`string`*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:35*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| orderUrl | `string`   |  - |





**Returns:** `this`





___

<a id="setpaymentadjustments"></a>

###  setPaymentAdjustments

► **setPaymentAdjustments**(adjustments: *[PaymentAdjustments](../interfaces/send.paymentadjustments.md)*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:65*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| adjustments | [PaymentAdjustments](../interfaces/send.paymentadjustments.md)   |  - |





**Returns:** `this`





___

<a id="setsherable"></a>

###  setSherable

► **setSherable**(sherable: *`boolean`*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:20*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sherable | `boolean`   |  - |





**Returns:** `this`





___

<a id="setshippingcost"></a>

###  setShippingCost

► **setShippingCost**(shippingCost: *`number`*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:55*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| shippingCost | `number`   |  - |





**Returns:** `this`





___

<a id="setsubtotal"></a>

###  setSubtotal

► **setSubtotal**(subtotal: *`number`*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:50*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| subtotal | `number`   |  - |





**Returns:** `this`





___

<a id="settimestamp"></a>

###  setTimestamp

► **setTimestamp**(timestamp: *`string`*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:30*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| timestamp | `string`   |  - |





**Returns:** `this`





___

<a id="settotaltax"></a>

###  setTotalTax

► **setTotalTax**(totalTax: *`number`*): `this`




*Defined in fb-api-helpers/receipt-template-message-builder.ts:60*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| totalTax | `number`   |  - |





**Returns:** `this`





___

<a id="createcallbutton"></a>

### «Static» createCallButton

► **createCallButton**(title: *`string`*, payload: *`string`*): [CallButton](templatemessagebuilder.callbutton.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createCallButton](templatemessagebuilder.md#createcallbutton)*

*Defined in fb-api-helpers/template-message-builder.ts:39*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| payload | `string`   |  - |





**Returns:** [CallButton](templatemessagebuilder.callbutton.md)





___

<a id="createdefaultaction"></a>

### «Static» createDefaultAction

► **createDefaultAction**(url: *`string`*): [DefaultAction](templatemessagebuilder.defaultaction.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createDefaultAction](templatemessagebuilder.md#createdefaultaction)*

*Defined in fb-api-helpers/template-message-builder.ts:27*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |





**Returns:** [DefaultAction](templatemessagebuilder.defaultaction.md)





___

<a id="createelement"></a>

### «Static» createElement

► **createElement**(title: *`string`*): [Element](templatemessagebuilder.element.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createElement](templatemessagebuilder.md#createelement)*

*Defined in fb-api-helpers/template-message-builder.ts:23*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |





**Returns:** [Element](templatemessagebuilder.element.md)





___

<a id="createloginbutton"></a>

### «Static» createLoginButton

► **createLoginButton**(url: *`string`*): [LoginButton](templatemessagebuilder.loginbutton.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createLoginButton](templatemessagebuilder.md#createloginbutton)*

*Defined in fb-api-helpers/template-message-builder.ts:47*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |





**Returns:** [LoginButton](templatemessagebuilder.loginbutton.md)





___

<a id="createlogoutbutton"></a>

### «Static» createLogoutButton

► **createLogoutButton**(): [LogoutButton](templatemessagebuilder.logoutbutton.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createLogoutButton](templatemessagebuilder.md#createlogoutbutton)*

*Defined in fb-api-helpers/template-message-builder.ts:51*





**Returns:** [LogoutButton](templatemessagebuilder.logoutbutton.md)





___

<a id="createpostbackbutton"></a>

### «Static» createPostbackButton

► **createPostbackButton**(title: *`string`*, data: *`string`*, id: *`string`*): [PostbackButton](templatemessagebuilder.postbackbutton.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createPostbackButton](templatemessagebuilder.md#createpostbackbutton)*

*Defined in fb-api-helpers/template-message-builder.ts:35*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| data | `string`   |  - |
| id | `string`   |  - |





**Returns:** [PostbackButton](templatemessagebuilder.postbackbutton.md)





___

<a id="createsharebutton"></a>

### «Static» createShareButton

► **createShareButton**(): [ShareButton](templatemessagebuilder.sharebutton.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createShareButton](templatemessagebuilder.md#createsharebutton)*

*Defined in fb-api-helpers/template-message-builder.ts:43*





**Returns:** [ShareButton](templatemessagebuilder.sharebutton.md)





___

<a id="createurlbutton"></a>

### «Static» createUrlButton

► **createUrlButton**(title: *`string`*, url: *`string`*): [UrlButton](templatemessagebuilder.urlbutton.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createUrlButton](templatemessagebuilder.md#createurlbutton)*

*Defined in fb-api-helpers/template-message-builder.ts:31*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| url | `string`   |  - |





**Returns:** [UrlButton](templatemessagebuilder.urlbutton.md)





___


