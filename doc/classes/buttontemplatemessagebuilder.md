[@aiteq/messenger-bot](../README.md) > [ButtonTemplateMessageBuilder](../classes/buttontemplatemessagebuilder.md)

# Class: ButtonTemplateMessageBuilder

Helps to create [Button Template](https://developers.facebook.com/docs/messenger-platform/send-api-reference/button-template) message.

Example of use:
```typescript
new ButtonTemplateMessageBuilder("What do you want to do next?")

.addButton(
    ButtonTemplateMessageBuilder.createUrlButton("Show website", "http://www.aiteq.com")
)
.addButton(
    ButtonTemplateMessageBuilder.createCallButton("Call us", "+88335739565")
);
```

## Hierarchy

[TemplateMessageBuilder](templatemessagebuilder.md)

**↳ ButtonTemplateMessageBuilder**

## Index

### Constructors

* [constructor(text)](buttontemplatemessagebuilder.md#constructor)

### Methods

* [addButton(buttonBuilder)](buttontemplatemessagebuilder.md#addbutton)
* [addLocationQuickReply()](buttontemplatemessagebuilder.md#addlocationquickreply)
* [addQuickReply(title, id, [data, [imageUrl]])](buttontemplatemessagebuilder.md#addquickreply)

### Static methods

* [createCallButton(title, phoneNumber)](buttontemplatemessagebuilder.md#createcallbutton)
* [createLoginButton(url)](buttontemplatemessagebuilder.md#createloginbutton)
* [createLogoutButton()](buttontemplatemessagebuilder.md#createlogoutbutton)
* [createPostbackButton(title, id, data)](buttontemplatemessagebuilder.md#createpostbackbutton)
* [createShareButton()](buttontemplatemessagebuilder.md#createsharebutton)
* [createUrlButton(title, url)](buttontemplatemessagebuilder.md#createurlbutton)



---
## Constructors
<a id="constructor"></a>
### `new ButtonTemplateMessageBuilder(text)`

Creates a new ButtonTemplateMessageBuilder instance.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  text of the message |

**Returns:** [ButtonTemplateMessageBuilder](buttontemplatemessagebuilder.md)
___

## Methods

<a id="addbutton"></a>
###  addButton(buttonBuilder)`

Adds a Button. Number of Buttons must be 1-3.

**Type parameters:**

#### T :  [Button](../modules/send.md#button)

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| buttonBuilder | [Builder](builder.md) | button builder |

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

<a id="createcallbutton"></a>
### `ButtonTemplateMessageBuilder.createCallButton(title, phoneNumber)`

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
### `ButtonTemplateMessageBuilder.createLoginButton(url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Login Button builder.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string` | [Authentication](https://developers.facebook.com/docs/messenger-platform/account-linking/authentication) callback URL (must use HTTPS protocol) |

**Returns:** [LoginButtonBuilder](loginbuttonbuilder.md)
___

<a id="createlogoutbutton"></a>
### `ButtonTemplateMessageBuilder.createLogoutButton()`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Logout Button builder.

**Returns:** [LogoutButtonBuilder](logoutbuttonbuilder.md)
___

<a id="createpostbackbutton"></a>
### `ButtonTemplateMessageBuilder.createPostbackButton(title, id, data)`

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
### `ButtonTemplateMessageBuilder.createShareButton()`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new Share Button builder.

**Returns:** [ShareButtonBuilder](sharebuttonbuilder.md)
___

<a id="createurlbutton"></a>
### `ButtonTemplateMessageBuilder.createUrlButton(title, url)`

*Inherited from [TemplateMessageBuilder](templatemessagebuilder.md)*

Creates a new URL Button builder.

**Parameters:**
| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button |
| url | `string`   | target URL |

**Returns:** [UrlButtonBuilder](urlbuttonbuilder.md)
___
