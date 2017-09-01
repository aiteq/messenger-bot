[@aiteq/messenger-bot](../README.md) > [BotUtils](../classes/botutils.md)

# Class: BotUtils
Provides an interface to non-interactive services of Messenger Platform API through a set of convenient methods.

## Index

### Constructors

* [constructor(accessToken)](botutils.md#constructor)

### Methods

* [blacklistAudienceCountries(countries)](botutils.md#blacklistaudiencecountries)
* [closeTargetAudience()](botutils.md#closetargetaudience)
* [deleteAccountLinkingUrl()](botutils.md#deleteaccountlinkingurl)
* [deleteChatExtensionHomeUrl()](botutils.md#deletechatextensionhomeurl)
* [deleteDomainWhitelist()](botutils.md#deletedomainwhitelist)
* [deleteGetStartedButton()](botutils.md#deletegetstartedbutton)
* [deleteGreeting()](botutils.md#deletegreeting)
* [deletePersistentMenu()](botutils.md#deletepersistentmenu)
* [deleteTargetAudience()](botutils.md#deletetargetaudience)
* [generateMessengerCode(fileName, [size, [ref]])](botutils.md#generatemessengercode)
* [getAccountLinkingUrl()](botutils.md#getaccountlinkingurl)
* [getChatExtensionHomeUrl()](botutils.md#getchatextensionhomeurl)
* [getDomainWhitelist()](botutils.md#getdomainwhitelist)
* [getGetStartedButton()](botutils.md#getgetstartedbutton)
* [getGreeting()](botutils.md#getgreeting)
* [getPersistentMenu()](botutils.md#getpersistentmenu)
* [getTargetAudience()](botutils.md#gettargetaudience)
* [openTargetAudience()](botutils.md#opentargetaudience)
* [sendAudio(recipientId, url, reusable)](botutils.md#sendaudio)
* [sendFile(recipientId, url, reusable)](botutils.md#sendfile)
* [sendImage(recipientId, url, reusable)](botutils.md#sendimage)
* [sendText(recipientId, text)](botutils.md#sendtext)
* [sendVideo(recipientId, url, reusable)](botutils.md#sendvideo)
* [setAccountLinkingUrl(url)](botutils.md#setaccountlinkingurl)
* [setChatExtensionHomeUrl(url, [inTest, [shareButton]])](botutils.md#setchatextensionhomeurl)
* [setGetStartedButton([data])](botutils.md#setgetstartedbutton)
* [setGreeting(text, [locale])](botutils.md#setgreeting)
* [setPersistentMenu(menuDef)](botutils.md#setpersistentmenu)
* [whitelistAudienceCountries(countries)](botutils.md#whitelistaudiencecountries)
* [whitelistDomains(domains)](botutils.md#whitelistdomains)

---
## Constructors
<a id="constructor"></a>
### `new BotUtils(config)`

Creates an instance of [BotUtils](botutils.md).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accessToken | `string` | bot configuration object (only the `accessToken` property is required) |

**Returns:** [BotUtils](botutils.md)

---

## Methods

<a id="setgreeting"></a>
###  `setGreeting(text, [locale])`

Sets the [Greeting](https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text) for the Page. If it is already set for the locale, it will be changed.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| text | `string`  | |   a greeting text |
| locale | `string`  | `"default"` | a locale of the greeting ([supported locales](https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales)) |

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="blacklistaudiencecountries"></a>
###  `blacklistAudienceCountries(countries)`

Adds countries to Target Audience blacklist.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| countries | `Array`<`string`> | a list of [ISO 3166 Alpha-2 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of countries to be blacklisted |

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="closetargetaudience"></a>
###  `closeTargetAudience()`

Close Target Audience to all.

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="deleteaccountlinkingurl"></a>
###  `deleteAccountLinkingUrl()`

Removes current setting of Account Linking URL.

**Returns:** `Promise.<`MessengerProfile.Response`>
___

<a id="deletechatextensionhomeurl"></a>
###  `deleteChatExtensionHomeUrl()`

Removes current setting of Chat Extension home URL.

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="deletedomainwhitelist"></a>
###  `deleteDomainWhitelist()!

Removes all domains from whitelist.

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="deletegetstartedbutton"></a>
###  `deleteGetStartedButton()`

Disables the Get Started button on the Page.

**Note:** Get Started button can't be removed when a Persistent Menu is set while Persistent Menu can't be used without Get Started button.

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="deletegreeting"></a>
###  `deleteGreeting()`

Removes the current Greeting.

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="deletepersistentmenu"></a>
###  `deletePersistentMenu()`

Removes the current Persistent Menu.

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="deletetargetaudience"></a>
###  `deleteTargetAudience()`

Removes all countris from both whitelist and blacklist.

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="generatemessengercode"></a>
###  `generateMessengerCode(fileName, [size, [ref]])`

Generates and saves a new Messenger Code as PNG image.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fileName | `string` |  a path and name of the file to be saved |
| size | `number` | a size of the image (ragnge: `100` - `2000`, default: `1000`) |
| ref | `string` | optional data to be sent when the user scans the code |

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="getaccountlinkingurl"></a>
###  `getAccountLinkingUrl()'

Returns current Account Linking URL.

**Returns:** `Promise`<`string`> - current Account Linking URL
___

<a id="getchatextensionhomeurl"></a>
###  `getChatExtensionHomeUrl()`

Returns Chat Extension home URL.

**Returns:** `Promise`<`string`> - current Chat Extension home URL
___

<a id="getdomainwhitelist"></a>
###  `getDomainWhitelist()`

Returns current list of whitelisted domains.

**Returns:** `Promise`<`any`> - a list of whitelisted domains
___

<a id="getgetstartedbutton"></a>
###  `getGetStartedButton()`

Reads the current Get Started button setting.

**Returns:** `Promise`<`MessengerProfile.GetStartedButton`> - an object with Get Started button setting
___

<a id="getgreeting"></a>
###  `getGreeting()`

Reads the current Greeting.

**Returns:** `Promise`<`MessengerProfile.Greeting[]`> - an array of greetings
___

<a id="getpersistentmenu"></a>
###  `getPersistentMenu()`

Returns the current Persistent Menu.

**Returns:** `Promise`<`any`> - an object with Persistent Menu definition
___

<a id="gettargetaudience"></a>
###  `getTargetAudience()`

Returns current Target Audience setting.

**Returns:** `Promise`<`any`> - an object with current Target Audience settings
___

<a id="opentargetaudience"></a>
###  `openTargetAudience()`

Open Target Audience to all.

**Returns:** `Promise`<`any`>
___

<a id="sendaudio"></a>
###  `sendAudio(recipientId, url, reusable)`

Sends a message with audio attachment.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  ID of the recipient |
| url | `string`   |  URL of the audio file |
| reusable | `boolean` | controls whether the attachment is to be reused |

**Returns:** `Promise`<`Send.Response`>

**Note**: The attachment reusing is managed automatically by the package. So, when you don't intend to reuse the attachment outside the package, you can forget the returned value.
___

<a id="sendfile"></a>
###  `sendFile(recipientId, url, reusable)`

Sends a message with file attachment.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  ID of the recipient |
| url | `string`   |  URL of the file |
| reusable | `boolean` | controls whether the attachment is to be reused |

**Returns:** `Promise`<`Send.Response`>

**Note**: The attachment reusing is managed automatically by the package. So, when you don't intend to reuse the attachment outside the package, you can forget the returned value.
___

<a id="sendimage"></a>
###  `sendImage(recipientId, url, reusable)`

Sends a message with image attachment.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  ID of the recipient |
| url | `string`   |  URL of the image |
| reusable | `boolean` | controls whether the attachment is to be reused |

**Returns:** `Promise`<`Send.Response`>

**Note**: The attachment reusing is managed automatically by the package. So, when you don't intend to reuse the attachment outside the package, you can forget the returned value.
___

<a id="sendtext"></a>
###  `sendText(recipientId, text)`

Sends a plain text message.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  ID of the recipient |
| text | `string`   |  a text to be send |

**Returns:** `Promise`<`Send.Response`>
___

<a id="sendvideo"></a>
###  `sendVideo(recipientId, url, reusable)`

Sends a message with video attachment.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| recipientId | `string`   |  ID of the recipient |
| url | `string`   |  URL of the video file |
| reusable | `boolean` | controls whether the attachment is to be reused |

**Returns:** `Promise`<`Send.Response`>

**Note**: The attachment reusing is managed automatically by the package. So, when you don't intend to reuse the attachment outside the package, you can forget the returned value.
___

<a id="setaccountlinkingurl"></a>
###  `setAccountLinkingUrl(url)`

Sets a new Account Linking URL.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  new Account Linking URL |

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="setchatextensionhomeurl"></a>
###  `setChatExtensionHomeUrl(url, [inTest, [shareButton]])`

Sets a new Chat Extension home URL. If the URL is not whitelisted it will be done first.

**Parameters:**

| Param | Type |  Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string` | | new Chat Extension home URL |
| inTest | `boolean` | `false` | controls whether the Chat Extension is in test mode |
| shareButton | `boolean` | `true` | controls whether the share button in the webview is enabled |

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="setgetstartedbutton"></a>
###  `setGetStartedButton([data])`

Sets [Get Started button](https://developers.facebook.com/docs/messenger-platform/messenger-profile/get-started-button) for the Page.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   | optional data to be sent when the user clicks on the button |

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="setpersistentmenu"></a>
###  `setPersistentMenu(menuDef)`

Sets Persistent Menu for the Page.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| menuDef | [PersistentMenuDef](../interfaces/persistentmenudef.md) ⎮ `Array`<[PersistentMenuDef](../interfaces/persistentmenudef.md)> ⎮ [PersistentMenuBuilder](persistentmenubuilder.md)   | definition of Persistent Menu |

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="whitelistaudiencecountries"></a>
###  `whitelistAudienceCountries(countries)`

Adds countries to Target Audience whitelist.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| countries | `Array`<`string`> | list of [ISO 3166 Alpha-2 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of countries to be whitelisted |

**Returns:** `Promise`<`MessengerProfile.Response`>
___

<a id="whitelistdomains"></a>
###  `whitelistDomains(domains)`

Adds domains to the whitelist.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| domains | `string` | `Array`<`string`> | array of domains to be whitelisted |

**Returns:** `Promise`<`void`>
___
