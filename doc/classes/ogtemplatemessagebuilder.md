[@aiteq/messenger-bot](../README.md) > [OgTemplateMessageBuilder](../classes/ogtemplatemessagebuilder.md)

# Class: OgTemplateMessageBuilder

Helps to create a [Open Graph Template](https://developers.facebook.com/docs/messenger-platform/open-graph-template) message.

## Hierarchy

[TemplateMessageBuilder](templatemessagebuilder.md)

**↳ OgTemplateMessageBuilder**

## Index

### Constructors

* [constructor()](ogtemplatemessagebuilder.md#constructor)

### Methods

* [addLocationQuickReply()](ogtemplatemessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](ogtemplatemessagebuilder.md#addquickreply)
* [setElement](ogtemplatemessagebuilder.md#setelement)

### Static methods

* [createCallButton(title, phoneNumber)](ogtemplatemessagebuilder.md#createcallbutton)
* [createLoginButton(url)](ogtemplatemessagebuilder.md#createloginbutton)
* [createLogoutButton()](ogtemplatemessagebuilder.md#createlogoutbutton)
* [createOgElement(url)](ogtemplatemessagebuilder.md#createogelement)
* [createPostbackButton(title, id, data)](ogtemplatemessagebuilder.md#createpostbackbutton)
* [createShareButton()](ogtemplatemessagebuilder.md#createsharebutton)
* [createUrlButton(title, url)](ogtemplatemessagebuilder.md#createurlbutton)

---

## Constructors

<a id="constructor"></a>
### `new OgTemplateMessageBuilder()`

**Returns:** [OgTemplateMessageBuilder](ogtemplatemessagebuilder.md)

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

<a id="setelement"></a>
###  `setElement(elementBuilder)`

Sets an Open Graph Element.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| elementBuilder | [OgElementBuilder](ogelementbuilder.md)   | |

**Returns:** `this` - for chaining
___

<a id="createcallbutton"></a>
### `OgTemplateMessageBuilder.createCallButton(title, phoneNumber)`

Creates a new Call Button builder.

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).*

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| phoneNumber | `string`   | phone number (must be prefixed with `"+"`) |

**Returns:** [CallButtonBuilder](callbuttonbuilder.md)
___

<a id="createloginbutton"></a>
### `OgTemplateMessageBuilder.createLoginButton(url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Login Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` | [Authentication](https://developers.facebook.com/docs/messenger-platform/account-linking/authentication) callback URL (must use HTTPS protocol) |

**Returns:** [LoginButtonBuilder](loginbuttonbuilder.md)
___

<a id="createlogoutbutton"></a>
### `OgTemplateMessageBuilder.createLogoutButton()`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Logout Button builder.

**Returns:** [LogoutButtonBuilder](logoutbuttonbuilder.md)
___

<a id="createogelement"></a>
### `OgTemplateMessageBuilder.createOgElement(url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Open Graph Element builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` | Open Graph URL for the element |

**Returns:** [OgElementBuilder](ogelementbuilder.md)
___

<a id="createpostbackbutton"></a>
### `OgTemplateMessageBuilder.createPostbackButton(title, id, data)`

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
### `OgTemplateMessageBuilder.createShareButton()`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Share Button builder.

**Returns:** [ShareButtonBuilder](sharebuttonbuilder.md)
___

<a id="createurlbutton"></a>
### `OgTemplateMessageBuilder.createUrlButton(title, url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new URL Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| url | `string`   | target URL |

**Returns:** [UrlButtonBuilder](urlbuttonbuilder.md)
___
