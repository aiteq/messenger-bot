[@aiteq/messenger-bot](../README.md) > [TemplateMessageBuilder](../classes/templatemessagebuilder.md)



# Class: TemplateMessageBuilder

## Type parameters
#### T 
## Hierarchy


↳  [AbstractMessageBuilder](abstractmessagebuilder.md)[AttachmentMessage](../interfaces/send.attachmentmessage.md)

**↳ TemplateMessageBuilder**

↳  [ButtonTemplateMessageBuilder](buttontemplatemessagebuilder.md)




↳  [GenericTemplateMessageBuilder](generictemplatemessagebuilder.md)




↳  [ListTemplateMessageBuilder](listtemplatemessagebuilder.md)




↳  [OgTemplateMessageBuilder](ogtemplatemessagebuilder.md)




↳  [ReceiptTemplateMessageBuilder](receipttemplatemessagebuilder.md)










## Index

### Classes

* [Button](templatemessagebuilder.button.md)
* [CallButton](templatemessagebuilder.callbutton.md)
* [DefaultAction](templatemessagebuilder.defaultaction.md)
* [Element](templatemessagebuilder.element.md)
* [LoginButton](templatemessagebuilder.loginbutton.md)
* [LogoutButton](templatemessagebuilder.logoutbutton.md)
* [OgElement](templatemessagebuilder.ogelement.md)
* [PostbackButton](templatemessagebuilder.postbackbutton.md)
* [ReceiptElement](templatemessagebuilder.receiptelement.md)
* [ShareButton](templatemessagebuilder.sharebutton.md)
* [Template](templatemessagebuilder.template.md)
* [UrlButton](templatemessagebuilder.urlbutton.md)


### Constructors

* [constructor](templatemessagebuilder.md#constructor)


### Properties

* [message](templatemessagebuilder.md#message)
* [template](templatemessagebuilder.md#template-1)


### Methods

* [addLocationQuickReply](templatemessagebuilder.md#addlocationquickreply)
* [addTextQuickReply](templatemessagebuilder.md#addtextquickreply)
* [build](templatemessagebuilder.md#build)
* [createMessage](templatemessagebuilder.md#createmessage)
* [createCallButton](templatemessagebuilder.md#createcallbutton)
* [createDefaultAction](templatemessagebuilder.md#createdefaultaction)
* [createElement](templatemessagebuilder.md#createelement)
* [createLoginButton](templatemessagebuilder.md#createloginbutton)
* [createLogoutButton](templatemessagebuilder.md#createlogoutbutton)
* [createPostbackButton](templatemessagebuilder.md#createpostbackbutton)
* [createShareButton](templatemessagebuilder.md#createsharebutton)
* [createUrlButton](templatemessagebuilder.md#createurlbutton)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new TemplateMessageBuilder**(): [TemplateMessageBuilder](templatemessagebuilder.md)



*Defined in fb-api-helpers/template-message-builder.ts:11*





**Returns:** [TemplateMessageBuilder](templatemessagebuilder.md)

---


## Properties
<a id="message"></a>

### «Protected» message

**●  message**:  *[AttachmentMessage](../interfaces/send.attachmentmessage.md)* 

*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[message](abstractmessagebuilder.md#message)*

*Defined in fb-api-helpers/abstract-message-builder.ts:7*





___

<a id="template-1"></a>

### «Protected» template

**●  template**:  *`T`* 

*Defined in fb-api-helpers/template-message-builder.ts:9*





___


## Methods
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




*Overrides [AbstractMessageBuilder](abstractmessagebuilder.md).[build](abstractmessagebuilder.md#build)*

*Defined in fb-api-helpers/template-message-builder.ts:55*





**Returns:** [AttachmentMessage](../interfaces/send.attachmentmessage.md)





___

<a id="createmessage"></a>

###  createMessage

► **createMessage**(...args: *`any`[]*): `this`




*Defined in fb-api-helpers/template-message-builder.ts:11*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| args | `any`[]   |  - |





**Returns:** `this`





___

<a id="createcallbutton"></a>

### «Static» createCallButton

► **createCallButton**(title: *`string`*, payload: *`string`*): [CallButton](templatemessagebuilder.callbutton.md)




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




*Defined in fb-api-helpers/template-message-builder.ts:51*





**Returns:** [LogoutButton](templatemessagebuilder.logoutbutton.md)





___

<a id="createpostbackbutton"></a>

### «Static» createPostbackButton

► **createPostbackButton**(title: *`string`*, data: *`string`*, id: *`string`*): [PostbackButton](templatemessagebuilder.postbackbutton.md)




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




*Defined in fb-api-helpers/template-message-builder.ts:43*





**Returns:** [ShareButton](templatemessagebuilder.sharebutton.md)





___

<a id="createurlbutton"></a>

### «Static» createUrlButton

► **createUrlButton**(title: *`string`*, url: *`string`*): [UrlButton](templatemessagebuilder.urlbutton.md)




*Defined in fb-api-helpers/template-message-builder.ts:31*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| url | `string`   |  - |





**Returns:** [UrlButton](templatemessagebuilder.urlbutton.md)





___


