[@aiteq/messenger-bot](../README.md) > [ReceiptTemplateMessageBuilder](../classes/receipttemplatemessagebuilder.md) > [TemplateMessageBuilder](../modules/receipttemplatemessagebuilder.templatemessagebuilder.md) > [UrlButton](../classes/receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md)



# Class: UrlButton

## Index

### Constructors

* [constructor](receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md#constructor)


### Properties

* [buttonObject](receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md#buttonobject)


### Methods

* [getOject](receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md#getoject)
* [setFallbackUrl](receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md#setfallbackurl)
* [setMessengerEtensions](receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md#setmessengeretensions)
* [setWebviewHeightRatio](receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md#setwebviewheightratio)
* [setWebviewShareButton](receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md#setwebviewsharebutton)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new UrlButton**(title: *`string`*, url: *`string`*): [UrlButton](receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md)



*Defined in [fb-api-helpers/template-message-builder.ts:208](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L208)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| url | `string`   |  - |





**Returns:** [UrlButton](receipttemplatemessagebuilder.templatemessagebuilder.urlbutton.md)

---


## Properties
<a id="buttonobject"></a>

### «Protected» buttonObject

**●  buttonObject**:  *[UrlButton](../interfaces/send.urlbutton.md)* 

*Inherited from [Button](templatemessagebuilder.button.md).[buttonObject](templatemessagebuilder.button.md#buttonobject)*

*Defined in [fb-api-helpers/template-message-builder.ts:201](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L201)*





___


## Methods
<a id="getoject"></a>

###  getOject

► **getOject**(): [UrlButton](../interfaces/send.urlbutton.md)




*Inherited from [Button](templatemessagebuilder.button.md).[getOject](templatemessagebuilder.button.md#getoject)*

*Defined in [fb-api-helpers/template-message-builder.ts:203](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L203)*





**Returns:** [UrlButton](../interfaces/send.urlbutton.md)





___

<a id="setfallbackurl"></a>

###  setFallbackUrl

► **setFallbackUrl**(fallbackUrl: *`string`*): `this`




*Defined in [fb-api-helpers/template-message-builder.ts:229](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L229)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fallbackUrl | `string`   |  - |





**Returns:** `this`





___

<a id="setmessengeretensions"></a>

###  setMessengerEtensions

► **setMessengerEtensions**(messengerExtensions: *`boolean`*): `this`




*Defined in [fb-api-helpers/template-message-builder.ts:224](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L224)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| messengerExtensions | `boolean`   |  - |





**Returns:** `this`





___

<a id="setwebviewheightratio"></a>

###  setWebviewHeightRatio

► **setWebviewHeightRatio**(webviewHeightRatio: *[HeightRatio](../modules/webview.heightratio.md)*): `this`




*Defined in [fb-api-helpers/template-message-builder.ts:219](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L219)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webviewHeightRatio | [HeightRatio](../modules/webview.heightratio.md)   |  - |





**Returns:** `this`





___

<a id="setwebviewsharebutton"></a>

###  setWebviewShareButton

► **setWebviewShareButton**(webviewShareButton: *[ShareButton](../modules/webview.sharebutton.md)*): `this`




*Defined in [fb-api-helpers/template-message-builder.ts:234](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/fb-api-helpers/template-message-builder.ts#L234)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| webviewShareButton | [ShareButton](../modules/webview.sharebutton.md)   |  - |





**Returns:** `this`





___


