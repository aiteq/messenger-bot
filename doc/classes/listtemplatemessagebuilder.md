[@aiteq/messenger-bot](../README.md) > [ListTemplateMessageBuilder](../classes/listtemplatemessagebuilder.md)



# Class: ListTemplateMessageBuilder

## Hierarchy


↳  [TemplateMessageBuilder](templatemessagebuilder.md)[ListTemplate](../interfaces/send.listtemplate.md)

**↳ ListTemplateMessageBuilder**







## Index

### Modules

* [TemplateMessageBuilder](../modules/listtemplatemessagebuilder.templatemessagebuilder.md)


### Constructors

* [constructor](listtemplatemessagebuilder.md#constructor)


### Properties

* [message](listtemplatemessagebuilder.md#message)
* [template](listtemplatemessagebuilder.md#template)


### Methods

* [addButton](listtemplatemessagebuilder.md#addbutton)
* [addElement](listtemplatemessagebuilder.md#addelement)
* [addLocationQuickReply](listtemplatemessagebuilder.md#addlocationquickreply)
* [addTextQuickReply](listtemplatemessagebuilder.md#addtextquickreply)
* [build](listtemplatemessagebuilder.md#build)
* [createMessage](listtemplatemessagebuilder.md#createmessage)
* [setSherable](listtemplatemessagebuilder.md#setsherable)
* [setTopElementStyle](listtemplatemessagebuilder.md#settopelementstyle)
* [createCallButton](listtemplatemessagebuilder.md#createcallbutton)
* [createDefaultAction](listtemplatemessagebuilder.md#createdefaultaction)
* [createElement](listtemplatemessagebuilder.md#createelement)
* [createLoginButton](listtemplatemessagebuilder.md#createloginbutton)
* [createLogoutButton](listtemplatemessagebuilder.md#createlogoutbutton)
* [createPostbackButton](listtemplatemessagebuilder.md#createpostbackbutton)
* [createShareButton](listtemplatemessagebuilder.md#createsharebutton)
* [createUrlButton](listtemplatemessagebuilder.md#createurlbutton)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ListTemplateMessageBuilder**(): [ListTemplateMessageBuilder](listtemplatemessagebuilder.md)



*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[constructor](templatemessagebuilder.md#constructor)*

*Defined in [fb-api-helpers/template-message-builder.ts:11](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L11)*





**Returns:** [ListTemplateMessageBuilder](listtemplatemessagebuilder.md)

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

**●  template**:  *[ListTemplate](../interfaces/send.listtemplate.md)* 

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).[template](templatemessagebuilder.md#template-1)*

*Defined in [fb-api-helpers/template-message-builder.ts:9](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L9)*





___


## Methods
<a id="addbutton"></a>

###  addButton

► **addButton**(button: *[Button](templatemessagebuilder.button.md)[Button](../modules/send.md#button)*): `this`




*Defined in [fb-api-helpers/list-template-message-builder.ts:31](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/list-template-message-builder.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| button | [Button](templatemessagebuilder.button.md)[Button](../modules/send.md#button)   |  - |





**Returns:** `this`





___

<a id="addelement"></a>

###  addElement

► **addElement**(element: *[Element](templatemessagebuilder.element.md)*): `this`




*Defined in [fb-api-helpers/list-template-message-builder.ts:26](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/list-template-message-builder.ts#L26)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| element | [Element](templatemessagebuilder.element.md)   |  - |





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

► **createMessage**(): `this`




*Overrides [TemplateMessageBuilder](templatemessagebuilder.md).[createMessage](templatemessagebuilder.md#createmessage)*

*Defined in [fb-api-helpers/list-template-message-builder.ts:8](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/list-template-message-builder.ts#L8)*





**Returns:** `this`





___

<a id="setsherable"></a>

###  setSherable

► **setSherable**(sherable: *`boolean`*): `this`




*Defined in [fb-api-helpers/list-template-message-builder.ts:21](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/list-template-message-builder.ts#L21)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sherable | `boolean`   |  - |





**Returns:** `this`





___

<a id="settopelementstyle"></a>

###  setTopElementStyle

► **setTopElementStyle**(topElementStyle: *[ListTopElementStyle](../modules/send.listtopelementstyle.md)*): `this`




*Defined in [fb-api-helpers/list-template-message-builder.ts:16](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/list-template-message-builder.ts#L16)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| topElementStyle | [ListTopElementStyle](../modules/send.listtopelementstyle.md)   |  - |





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


