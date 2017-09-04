[@aiteq/messenger-bot](../README.md) > [ListTemplateMessageBuilder](../classes/listtemplatemessagebuilder.md)

# Class: ListTemplateMessageBuilder

Helps to create a [List Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/list-template) message.

## Hierarchy

[TemplateMessageBuilder](templatemessagebuilder.md)

**↳ ListTemplateMessageBuilder**

## Index

### Constructors

* [constructor()](listtemplatemessagebuilder.md#constructor)

### Methods

* [addElement(elementBuilder)](listtemplatemessagebuilder.md#addelement)
* [addLocationQuickReply()](listtemplatemessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](listtemplatemessagebuilder.md#addquickreply)
* [setButton(buttonBuilder)](listtemplatemessagebuilder.md#setbutton)
* [setTopElementStyle(topElementStyle)](listtemplatemessagebuilder.md#settopelementstyle)

### Static methods

* [createCallButton(title, phoneNumber)](listtemplatemessagebuilder.md#createcallbutton)
* [createDefaultAction(url)](listtemplatemessagebuilder.md#createdefaultaction)
* [createElement(title)](listtemplatemessagebuilder.md#createelement)
* [createLoginButton(url)](listtemplatemessagebuilder.md#createloginbutton)
* [createLogoutButton()](listtemplatemessagebuilder.md#createlogoutbutton)
* [createPostbackButton(title, id, data)](listtemplatemessagebuilder.md#createpostbackbutton)
* [createShareButton()](listtemplatemessagebuilder.md#createsharebutton)
* [createUrlButton(title, url)](listtemplatemessagebuilder.md#createurlbutton)

---

## Constructors

<a id="constructor"></a>
### `new ListTemplateMessageBuilder()`

**Returns:** [ListTemplateMessageBuilder](listtemplatemessagebuilder.md)

---

## Methods

<a id="addelement"></a>
###  `addElement(elementBuilder)`

Adds an Element. Number of Elements must be 2-4.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| elementBuilder | [ElementBuilder](elementbuilder.md)   | |

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

<a id="setbutton"></a>
###  `setButton(buttonBuilder)`

Sets a Button for the List Template message.

**Type parameters:**

#### T :  [Button](../modules/send.md#button)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buttonBuilder | [Builder](builder.md)   | |

**Returns:** `this` - for chaining
___

<a id="settopelementstyle"></a>
###  `setTopElementStyle(topElementStyle)`

Sets a style for the first list item.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| topElementStyle | [ListTopElementStyle](../modules/send.listtopelementstyle.md) | |

**Returns:** `this` - for chaining
___

<a id="createcallbutton"></a>
### `ListTemplateMessageBuilder.createCallButton(title, phoneNumber)`

Creates a new Call Button builder.

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| phoneNumber | `string`   | phone number (must be prefixed with `"+"`) |

**Returns:** [CallButtonBuilder](callbuttonbuilder.md)
___

<a id="createdefaultaction"></a>
### `ListTemplateMessageBuilder.createDefaultAction(url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).*

Creates a new Default Action builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   | URL of the Default Action |

**Returns:** [DefaultActionBuilder](defaultactionbuilder.md)
___

<a id="createelement"></a>
### `ListTemplateMessageBuilder.createElement(title)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Element builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string` |  title of the Element |

**Returns:** [ElementBuilder](elementbuilder.md)
___

<a id="createloginbutton"></a>
### `ListTemplateMessageBuilder.createLoginButton(url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Login Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` | [Authentication](https://developers.facebook.com/docs/messenger-platform/account-linking/authentication) callback URL (must use HTTPS protocol) |

**Returns:** [LoginButtonBuilder](loginbuttonbuilder.md)
___

<a id="createlogoutbutton"></a>
### `ListTemplateMessageBuilder.createLogoutButton()`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Logout Button builder.

**Returns:** [LogoutButtonBuilder](logoutbuttonbuilder.md)
___

<a id="createpostbackbutton"></a>
### `ListTemplateMessageBuilder.createPostbackButton(title, id, data)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Postback Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| id | `string`   | id of the button |
| data | `string`   | data to be send with postback request |

**Returns:** [PostbackButtonBuilder](postbackbuttonbuilder.md)
___

<a id="createsharebutton"></a>
### `ListTemplateMessageBuilder.createShareButton()`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Share Button builder.

**Returns:** [ShareButtonBuilder](sharebuttonbuilder.md)
___

<a id="createurlbutton"></a>
### `ListTemplateMessageBuilder.createUrlButton(title, url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new URL Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| url | `string`   | target URL |

**Returns:** [UrlButtonBuilder](urlbuttonbuilder.md)
___
