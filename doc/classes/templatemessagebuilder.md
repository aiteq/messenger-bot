[@aiteq/messenger-bot](../README.md) > [TemplateMessageBuilder](../classes/templatemessagebuilder.md)

# Class: TemplateMessageBuilder

An abstract parent class for template message builders.

## Type parameters

#### T 

## Hierarchy

[MessageBuilder](messagebuilder.md)

**↳ TemplateMessageBuilder**

&nbsp;&nbsp;&nbsp;&nbsp;↳ [ButtonTemplateMessageBuilder](buttontemplatemessagebuilder.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [GenericTemplateMessageBuilder](generictemplatemessagebuilder.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [ListTemplateMessageBuilder](listtemplatemessagebuilder.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [OgTemplateMessageBuilder](ogtemplatemessagebuilder.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [ReceiptTemplateMessageBuilder](receipttemplatemessagebuilder.md)

## Index

### Constructors

* [constructor()](templatemessagebuilder.md#constructor)

### Methods

* [addLocationQuickReply()](templatemessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](templatemessagebuilder.md#addquickreply)

### Methods

* [createCallButton(title, phoneNumber)](templatemessagebuilder.md#createcallbutton)
* [createDefaultAction(url)](templatemessagebuilder.md#createdefaultaction)
* [createElement(title)](templatemessagebuilder.md#createelement)
* [createLoginButton(url)](templatemessagebuilder.md#createloginbutton)
* [createLogoutButton()](templatemessagebuilder.md#createlogoutbutton)
* [createOgElement(url)](templatemessagebuilder.md#createogelement)
* [createPostbackButton(title, id, data)](templatemessagebuilder.md#createpostbackbutton)
* [createReceiptElement(title, price)](templatemessagebuilder.md#createreceiptelement)
* [createShareButton()](templatemessagebuilder.md#createsharebutton)
* [createUrlButton(title, url)](templatemessagebuilder.md#createurlbutton)

---

## Constructors

<a id="constructor"></a>
### `new TemplateMessageBuilder()`

**Returns:** [TemplateMessageBuilder](templatemessagebuilder.md)

---

## Methods

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

<a id="createcallbutton"></a>
### `TemplateMessageBuilder.createCallButton(title, phoneNumber)`

Creates a new Call Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| phoneNumber | `string`   | phone number (must be prefixed with `"+"`) |

**Returns:** [CallButtonBuilder](callbuttonbuilder.md)
___

<a id="createdefaultaction"></a>
### `TemplateMessageBuilder.createDefaultAction(url)`

Creates a new Default Action builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   | URL of the Default Action |

**Returns:** [DefaultActionBuilder](defaultactionbuilder.md)
___

<a id="createelement"></a>
### `ButtonTemplateMessageBuilder.createElement(title)`

Creates a new Element builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string` |  title of the Element |

**Returns:** [ElementBuilder](elementbuilder.md)
___

<a id="createloginbutton"></a>
### `TemplateMessageBuilder.createLoginButton(url)`

Creates a new Login Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` | [Authentication](https://developers.facebook.com/docs/messenger-platform/account-linking/authentication) callback URL (must use HTTPS protocol) |

**Returns:** [LoginButtonBuilder](loginbuttonbuilder.md)
___

<a id="createlogoutbutton"></a>
### `TemplateMessageBuilder.createLogoutButton()`

Creates a new Logout Button builder.

**Returns:** [LogoutButtonBuilder](logoutbuttonbuilder.md)
___

<a id="createogelement"></a>
### `TemplateMessageBuilder.createOgElement(url)`

Creates a new Open Graph Element builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` | Open Graph URL for the element |

**Returns:** [OgElementBuilder](ogelementbuilder.md)
___

<a id="createpostbackbutton"></a>
### `TemplateMessageBuilder.createPostbackButton(title, id, data)`

Creates a new Postback Button builder.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| id | `string`   | id of the button |
| data | `string`   | data to be send with postback request |

**Returns:** [PostbackButtonBuilder](postbackbuttonbuilder.md)
___

<a id="createreceiptelement"></a>
### `TemplateMessageBuilder.createReceiptElement(title, price)`

Creates a new Receipt Element builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  title of the Receipt Element |
| price | `number`   |  item price |

**Returns:** [ReceiptElementBuilder](receiptelementbuilder.md)
___

<a id="createsharebutton"></a>
### `TemplateMessageBuilder.createShareButton()`

Creates a new Share Button builder.

**Returns:** [ShareButtonBuilder](sharebuttonbuilder.md)
___

<a id="createurlbutton"></a>
### `TemplateMessageBuilder.createUrlButton(title, url)`

Creates a new URL Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| url | `string`   | target URL |

**Returns:** [UrlButtonBuilder](urlbuttonbuilder.md)
___
