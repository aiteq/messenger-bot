[@aiteq/messenger-bot](../README.md) > [ButtonTemplateMessageBuilder](../classes/buttontemplatemessagebuilder.md)



# Class: ButtonTemplateMessageBuilder

## Hierarchy


↳  [TemplateMessageBuilder](templatemessagebuilder.md)[ButtonTemplate](../interfaces/send.buttontemplate.md)

**↳ ButtonTemplateMessageBuilder**







## Index

### Modules

* [TemplateMessageBuilder](../modules/buttontemplatemessagebuilder.templatemessagebuilder.md)


### Constructors

* [constructor](buttontemplatemessagebuilder.md#constructor)


### Properties

* [message](buttontemplatemessagebuilder.md#message)
* [template](buttontemplatemessagebuilder.md#template)


### Methods

* [addButton](buttontemplatemessagebuilder.md#addbutton)
* [addLocationQuickReply](buttontemplatemessagebuilder.md#addlocationquickreply)
* [addTextQuickReply](buttontemplatemessagebuilder.md#addtextquickreply)
* [build](buttontemplatemessagebuilder.md#build)
* [createMessage](buttontemplatemessagebuilder.md#createmessage)
* [setText](buttontemplatemessagebuilder.md#settext)
* [createCallButton](buttontemplatemessagebuilder.md#createcallbutton)
* [createDefaultAction](buttontemplatemessagebuilder.md#createdefaultaction)
* [createElement](buttontemplatemessagebuilder.md#createelement)
* [createLoginButton](buttontemplatemessagebuilder.md#createloginbutton)
* [createLogoutButton](buttontemplatemessagebuilder.md#createlogoutbutton)
* [createPostbackButton](buttontemplatemessagebuilder.md#createpostbackbutton)
* [createShareButton](buttontemplatemessagebuilder.md#createsharebutton)
* [createUrlButton](buttontemplatemessagebuilder.md#createurlbutton)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ButtonTemplateMessageBuilder**(): [ButtonTemplateMessageBuilder](buttontemplatemessagebuilder.md)



*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[constructor](templatemessagebuilder.md#constructor)*

*Defined in [fb-api-helpers/template-message-builder.ts:11](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L11)*





**Returns:** [ButtonTemplateMessageBuilder](buttontemplatemessagebuilder.md)

---


## Properties
<a id="message"></a>

### «Protected» message

**●  message**:  *[AttachmentMessage](../interfaces/send.attachmentmessage.md)* 

*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[message](abstractmessagebuilder.md#message)*

*Defined in [fb-api-helpers/abstract-message-builder.ts:7](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L7)*





___

<a id="template"></a>

### «Protected» template

**●  template**:  *[ButtonTemplate](../interfaces/send.buttontemplate.md)* 

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[template](templatemessagebuilder.md#template-1)*

*Defined in [fb-api-helpers/template-message-builder.ts:9](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L9)*





___


## Methods
<a id="addbutton"></a>

###  addButton

► **addButton**(button: *[Button](templatemessagebuilder.button.md)[Button](../modules/send.md#button)*): `this`




*Defined in [fb-api-helpers/button-template-message-builder.ts:22](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/button-template-message-builder.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| button | [Button](templatemessagebuilder.button.md)[Button](../modules/send.md#button)   |  - |





**Returns:** `this`





___

<a id="addlocationquickreply"></a>

###  addLocationQuickReply

► **addLocationQuickReply**(): `this`




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[addLocationQuickReply](abstractmessagebuilder.md#addlocationquickreply)*

*Defined in [fb-api-helpers/abstract-message-builder.ts:29](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L29)*





**Returns:** `this`





___

<a id="addtextquickreply"></a>

###  addTextQuickReply

► **addTextQuickReply**(title: *`string`*, id: *`string`*, data?: *`string`⎮`any`*, imageUrl?: *`string`*): `this`




*Inherited from [AbstractMessageBuilder](abstractmessagebuilder.md).[addTextQuickReply](abstractmessagebuilder.md#addtextquickreply)*

*Defined in [fb-api-helpers/abstract-message-builder.ts:10](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/abstract-message-builder.ts#L10)*



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

*Defined in [fb-api-helpers/template-message-builder.ts:55](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L55)*





**Returns:** [AttachmentMessage](../interfaces/send.attachmentmessage.md)





___

<a id="createmessage"></a>

###  createMessage

► **createMessage**(text: *`string`*): `this`




*Overrides [TemplateMessageBuilder](templatemessagebuilder.md).[createMessage](templatemessagebuilder.md#createmessage)*

*Defined in [fb-api-helpers/button-template-message-builder.ts:8](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/button-template-message-builder.ts#L8)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  - |





**Returns:** `this`





___

<a id="settext"></a>

###  setText

► **setText**(text: *`string`*): `this`




*Defined in [fb-api-helpers/button-template-message-builder.ts:17](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/button-template-message-builder.ts#L17)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  - |





**Returns:** `this`





___

<a id="createcallbutton"></a>

### «Static» createCallButton

► **createCallButton**(title: *`string`*, payload: *`string`*): [CallButton](templatemessagebuilder.callbutton.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createCallButton](templatemessagebuilder.md#createcallbutton)*

*Defined in [fb-api-helpers/template-message-builder.ts:39](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L39)*



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

*Defined in [fb-api-helpers/template-message-builder.ts:27](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L27)*



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

*Defined in [fb-api-helpers/template-message-builder.ts:23](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L23)*



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

*Defined in [fb-api-helpers/template-message-builder.ts:47](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L47)*



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

*Defined in [fb-api-helpers/template-message-builder.ts:51](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L51)*





**Returns:** [LogoutButton](templatemessagebuilder.logoutbutton.md)





___

<a id="createpostbackbutton"></a>

### «Static» createPostbackButton

► **createPostbackButton**(title: *`string`*, data: *`string`*, id: *`string`*): [PostbackButton](templatemessagebuilder.postbackbutton.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createPostbackButton](templatemessagebuilder.md#createpostbackbutton)*

*Defined in [fb-api-helpers/template-message-builder.ts:35](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L35)*



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

*Defined in [fb-api-helpers/template-message-builder.ts:43](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L43)*





**Returns:** [ShareButton](templatemessagebuilder.sharebutton.md)





___

<a id="createurlbutton"></a>

### «Static» createUrlButton

► **createUrlButton**(title: *`string`*, url: *`string`*): [UrlButton](templatemessagebuilder.urlbutton.md)




*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[createUrlButton](templatemessagebuilder.md#createurlbutton)*

*Defined in [fb-api-helpers/template-message-builder.ts:31](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| url | `string`   |  - |





**Returns:** [UrlButton](templatemessagebuilder.urlbutton.md)





___


