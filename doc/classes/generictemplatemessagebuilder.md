[@aiteq/messenger-bot](../README.md) > [GenericTemplateMessageBuilder](../classes/generictemplatemessagebuilder.md)

# Class: GenericTemplateMessageBuilder

Helps to create a [Generic Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template) message.

## Hierarchy

[TemplateMessageBuilder](templatemessagebuilder.md)

**↳ GenericTemplateMessageBuilder**

## Index

### Constructors

* [constructor()](generictemplatemessagebuilder.md#constructor)

### Methods

* [addElement(elementBuilder)](generictemplatemessagebuilder.md#addelement)
* [addLocationQuickReply()](generictemplatemessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](generictemplatemessagebuilder.md#addquickreply)
* [setImageAspectRatio(imageAspectRatio)](generictemplatemessagebuilder.md#setimageaspectratio)
* [setSherable(sherable)](generictemplatemessagebuilder.md#setsherable)

### Methods

* [createCallButton(title, phoneNumber)](generictemplatemessagebuilder.md#createcallbutton)
* [createDefaultAction(url)](generictemplatemessagebuilder.md#createdefaultaction)
* [createElement(title)](generictemplatemessagebuilder.md#createelement)
* [createLoginButton(url)](generictemplatemessagebuilder.md#createloginbutton)
* [createLogoutButton()](generictemplatemessagebuilder.md#createlogoutbutton)
* [createPostbackButton(title, id, data)](generictemplatemessagebuilder.md#createpostbackbutton)
* [createShareButton()](generictemplatemessagebuilder.md#createsharebutton)
* [createUrlButton(title, url)](generictemplatemessagebuilder.md#createurlbutton)

---
## Constructors

<a id="constructor"></a>
### `new GenericTemplateMessageBuilder()`

Creates an instance of GenericTemplateMessageBuilder.

**Returns:** [GenericTemplateMessageBuilder](generictemplatemessagebuilder.md)

---

## Methods

<a id="addelement"></a>
###  `addElement(elementBuilder)`

Adds an Element. Number of Elements is limited to 10.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| elementBuilder | [ElementBuilder](elementbuilder.md)   |  |

**Returns:** `this` - for chaining
___

<a id="addlocationquickreply"></a>
###  `addLocationQuickReply()`

*Inherited from [MessageBuilder](messagebuilder.md)*

Adds a Quick Reply button to quickly send user's location.

**Returns:** `this` - for chaining
___

<a id="addtextquickreply"></a>
###  `addQuickReply(title, id, [data, [imageUrl]])`

*Inherited from [MessageBuilder](messagebuilder.md)*

Adds a Quick Reply button to the message.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  title of the Quick Reply |
| id | `string`   |  ID of the button (required for proper generation of webhook events) |
| data | `string`⎮`any`   | optional data to be send when the user clicks on the Quick Reply button |
| imageUrl | `string`   | image of the Quick Reply |

**Returns:** `this` - for chaining
___

<a id="setimageaspectratio"></a>
###  `setImageAspectRatio(imageAspectRatio)`

Sets image aspect ratio. The aspect ratio is used to render images specified by image_url in element objects.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| imageAspectRatio | [ImageAspectRatio](../enums/send.imageaspectratio.md)   |  |

**Returns:** `this` - for chaining
___

<a id="setsherable"></a>
###  `setSherable(sherable)`

Controls native share button.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sherable | `boolean` | set to `false` to disable the native share button in Messenger |

**Returns:** `this` - for chaining
___

<a id="createcallbutton"></a>
### `GenericTemplateMessageBuilder.createCallButton(title, phoneNumber)`

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
### `GenericTemplateMessageBuilder.createDefaultAction(url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md).*

Creates a new Default Action builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   | URL of the Default Action |

**Returns:** [DefaultActionBuilder](defaultactionbuilder.md)
___

<a id="createelement"></a>
### `GenericTemplateMessageBuilder.createElement(title)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Element builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string` |  title of the Element |

**Returns:** [ElementBuilder](elementbuilder.md)
___

<a id="createloginbutton"></a>
### `GenericTemplateMessageBuilder.createLoginButton(url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Login Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` | [Authentication](https://developers.facebook.com/docs/messenger-platform/account-linking/authentication) callback URL (must use HTTPS protocol) |

**Returns:** [LoginButtonBuilder](loginbuttonbuilder.md)
___

<a id="createlogoutbutton"></a>
### `GenericTemplateMessageBuilder.createLogoutButton()`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Logout Button builder.

**Returns:** [LogoutButtonBuilder](logoutbuttonbuilder.md)
___

<a id="createpostbackbutton"></a>
### `GenericTemplateMessageBuilder.createPostbackButton(title, id, data)`

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
### `GenericTemplateMessageBuilder.createShareButton()`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Share Button builder.

**Returns:** [ShareButtonBuilder](sharebuttonbuilder.md)
___

<a id="createurlbutton"></a>
### `GenericTemplateMessageBuilder.createUrlButton(title, url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new URL Button builder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| url | `string`   | target URL |

**Returns:** [UrlButtonBuilder](urlbuttonbuilder.md)
___
