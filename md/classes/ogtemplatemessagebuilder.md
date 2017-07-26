[@aiteq/messenger-bot](../README.md) > [OgTemplateMessageBuilder](../classes/ogtemplatemessagebuilder.md)



# Class: OgTemplateMessageBuilder

## Hierarchy


↳  [TemplateMessageBuilder](templatemessagebuilder.md)[OpenGraphTemplate](../interfaces/send.opengraphtemplate.md)

**↳ OgTemplateMessageBuilder**







## Index

### Modules

* [TemplateMessageBuilder](../modules/ogtemplatemessagebuilder.templatemessagebuilder.md)


### Constructors

* [constructor](ogtemplatemessagebuilder.md#constructor)


### Properties

* [message](ogtemplatemessagebuilder.md#message)
* [template](ogtemplatemessagebuilder.md#template)


### Methods

* [addElement](ogtemplatemessagebuilder.md#addelement)
* [addLocationQuickReply](ogtemplatemessagebuilder.md#addlocationquickreply)
* [addTextQuickReply](ogtemplatemessagebuilder.md#addtextquickreply)
* [build](ogtemplatemessagebuilder.md#build)
* [createMessage](ogtemplatemessagebuilder.md#createmessage)
* [createCallButton](ogtemplatemessagebuilder.md#createcallbutton)
* [createDefaultAction](ogtemplatemessagebuilder.md#createdefaultaction)
* [createElement](ogtemplatemessagebuilder.md#createelement)
* [createLoginButton](ogtemplatemessagebuilder.md#createloginbutton)
* [createLogoutButton](ogtemplatemessagebuilder.md#createlogoutbutton)
* [createPostbackButton](ogtemplatemessagebuilder.md#createpostbackbutton)
* [createShareButton](ogtemplatemessagebuilder.md#createsharebutton)
* [createUrlButton](ogtemplatemessagebuilder.md#createurlbutton)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new OgTemplateMessageBuilder**(): [OgTemplateMessageBuilder](ogtemplatemessagebuilder.md)



*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[constructor](templatemessagebuilder.md#constructor)*

*Defined in fb-api-helpers/template-message-builder.ts:11*





**Returns:** [OgTemplateMessageBuilder](ogtemplatemessagebuilder.md)

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

**●  template**:  *[OpenGraphTemplate](../interfaces/send.opengraphtemplate.md)* 

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[template](templatemessagebuilder.md#template-1)*

*Defined in fb-api-helpers/template-message-builder.ts:9*





___


## Methods
<a id="addelement"></a>

###  addElement

► **addElement**(element: *[OgElement](templatemessagebuilder.ogelement.md)*): `this`




*Defined in fb-api-helpers/og-template-message-builder.ts:16*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| element | [OgElement](templatemessagebuilder.ogelement.md)   |  - |





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

► **createMessage**(): `this`




*Overrides [TemplateMessageBuilder](templatemessagebuilder.md).[createMessage](templatemessagebuilder.md#createmessage)*

*Defined in fb-api-helpers/og-template-message-builder.ts:8*





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


