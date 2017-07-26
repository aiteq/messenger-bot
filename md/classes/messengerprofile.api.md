[@aiteq/messenger-bot](../README.md) > [MessengerProfile](../modules/messengerprofile.md) > [Api](../classes/messengerprofile.api.md)



# Class: Api

## Hierarchy


 [GraphApi](graphapi.md)[Request](../interfaces/messengerprofile.request.md)

**↳ Api**







## Index

### Modules

* [GraphApi](../modules/messengerprofile.api.graphapi.md)


### Constructors

* [constructor](messengerprofile.api.md#constructor)


### Properties

* [accessToken](messengerprofile.api.md#accesstoken)
* [version](messengerprofile.api.md#version)


### Methods

* [blacklistAudienceCountries](messengerprofile.api.md#blacklistaudiencecountries)
* [closeAudienceToAll](messengerprofile.api.md#closeaudiencetoall)
* [deleteAccountLinkingUrl](messengerprofile.api.md#deleteaccountlinkingurl)
* [deleteAudience](messengerprofile.api.md#deleteaudience)
* [deleteChatExtensionHomeUrl](messengerprofile.api.md#deletechatextensionhomeurl)
* [deleteDomainWhitelist](messengerprofile.api.md#deletedomainwhitelist)
* [deleteField](messengerprofile.api.md#deletefield)
* [deleteGetStartedButton](messengerprofile.api.md#deletegetstartedbutton)
* [deleteGreeting](messengerprofile.api.md#deletegreeting)
* [deletePersistentMenu](messengerprofile.api.md#deletepersistentmenu)
* [getField](messengerprofile.api.md#getfield)
* [getGetStartedButton](messengerprofile.api.md#getgetstartedbutton)
* [getGreeting](messengerprofile.api.md#getgreeting)
* [getWhitelistedDomains](messengerprofile.api.md#getwhitelisteddomains)
* [openAudienceToAll](messengerprofile.api.md#openaudiencetoall)
* [sendRequest](messengerprofile.api.md#sendrequest)
* [setAccountLinkingUrl](messengerprofile.api.md#setaccountlinkingurl)
* [setChatExtensionHomeUrl](messengerprofile.api.md#setchatextensionhomeurl)
* [setField](messengerprofile.api.md#setfield)
* [setGetStartedButton](messengerprofile.api.md#setgetstartedbutton)
* [setGreeting](messengerprofile.api.md#setgreeting)
* [setPersistentMenu](messengerprofile.api.md#setpersistentmenu)
* [whitelistAudienceCountries](messengerprofile.api.md#whitelistaudiencecountries)
* [whitelistDomains](messengerprofile.api.md#whitelistdomains)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Api**(accessToken: *`string`*): [Api](messengerprofile.api.md)



*Overrides [GraphApi](graphapi.md).[constructor](graphapi.md#constructor)*

*Defined in fb-api/messenger-profile.ts:10*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accessToken | `string`   |  - |





**Returns:** [Api](messengerprofile.api.md)

---


## Properties
<a id="accesstoken"></a>

### «Protected» accessToken

**●  accessToken**:  *`string`* 

*Overrides [GraphApi](graphapi.md).[accessToken](graphapi.md#accesstoken)*

*Defined in fb-api/messenger-profile.ts:12*





___

<a id="version"></a>

### «Protected»«Optional» version

**●  version**:  *`string`* 

*Inherited from [GraphApi](graphapi.md).[version](graphapi.md#version)*

*Defined in fb-api/graph-api.ts:12*





___


## Methods
<a id="blacklistaudiencecountries"></a>

###  blacklistAudienceCountries

► **blacklistAudienceCountries**(countries: *`string`⎮`Array`.<`string`>*): `this`




*Defined in fb-api/messenger-profile.ts:137*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| countries | `string`⎮`Array`.<`string`>   |  - |





**Returns:** `this`





___

<a id="closeaudiencetoall"></a>

###  closeAudienceToAll

► **closeAudienceToAll**(): `this`




*Defined in fb-api/messenger-profile.ts:164*





**Returns:** `this`





___

<a id="deleteaccountlinkingurl"></a>

###  deleteAccountLinkingUrl

► **deleteAccountLinkingUrl**(): `this`




*Defined in fb-api/messenger-profile.ts:114*





**Returns:** `this`





___

<a id="deleteaudience"></a>

###  deleteAudience

► **deleteAudience**(): `this`




*Defined in fb-api/messenger-profile.ts:175*





**Returns:** `this`





___

<a id="deletechatextensionhomeurl"></a>

###  deleteChatExtensionHomeUrl

► **deleteChatExtensionHomeUrl**(): `this`




*Defined in fb-api/messenger-profile.ts:209*





**Returns:** `this`





___

<a id="deletedomainwhitelist"></a>

###  deleteDomainWhitelist

► **deleteDomainWhitelist**(): `this`




*Defined in fb-api/messenger-profile.ts:98*





**Returns:** `this`





___

<a id="deletefield"></a>

### «Private» deleteField

► **deleteField**(fields: *`Array`.<[Field](../modules/messengerprofile.field.md)>*): `void`




*Defined in fb-api/messenger-profile.ts:246*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fields | `Array`.<[Field](../modules/messengerprofile.field.md)>   |  - |





**Returns:** `void`





___

<a id="deletegetstartedbutton"></a>

###  deleteGetStartedButton

► **deleteGetStartedButton**(): `this`




*Defined in fb-api/messenger-profile.ts:36*





**Returns:** `this`





___

<a id="deletegreeting"></a>

###  deleteGreeting

► **deleteGreeting**(): `this`




*Defined in fb-api/messenger-profile.ts:58*





**Returns:** `this`





___

<a id="deletepersistentmenu"></a>

###  deletePersistentMenu

► **deletePersistentMenu**(): `this`




*Defined in fb-api/messenger-profile.ts:76*





**Returns:** `this`





___

<a id="getfield"></a>

### «Private» getField

► **getField**(field: *[Field](../modules/messengerprofile.field.md)*): `Promise`.<`any`>




*Defined in fb-api/messenger-profile.ts:237*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | [Field](../modules/messengerprofile.field.md)   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="getgetstartedbutton"></a>

###  getGetStartedButton

► **getGetStartedButton**(): `Promise`.<[GetStartedButton](../interfaces/messengerprofile.getstartedbutton.md)>




*Defined in fb-api/messenger-profile.ts:32*





**Returns:** `Promise`.<[GetStartedButton](../interfaces/messengerprofile.getstartedbutton.md)>





___

<a id="getgreeting"></a>

###  getGreeting

► **getGreeting**(): `Promise`.<`Array`.<[Greeting](../modules/messengerprofile.greeting.md)>>




*Defined in fb-api/messenger-profile.ts:54*





**Returns:** `Promise`.<`Array`.<[Greeting](../modules/messengerprofile.greeting.md)>>





___

<a id="getwhitelisteddomains"></a>

###  getWhitelistedDomains

► **getWhitelistedDomains**(): `Array`.<`string`>




*Defined in fb-api/messenger-profile.ts:94*





**Returns:** `Array`.<`string`>





___

<a id="openaudiencetoall"></a>

###  openAudienceToAll

► **openAudienceToAll**(): `this`




*Defined in fb-api/messenger-profile.ts:153*





**Returns:** `this`





___

<a id="sendrequest"></a>

### «Protected» sendRequest

► **sendRequest**(data: *[Request](../interfaces/messengerprofile.request.md)*, config?: *`AxiosRequestConfig`*): `Promise`.<`any`>




*Inherited from [GraphApi](graphapi.md).[sendRequest](graphapi.md#sendrequest)*

*Defined in fb-api/graph-api.ts:21*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | [Request](../interfaces/messengerprofile.request.md)  | - |   - |
| config | `AxiosRequestConfig`  |  {} |   - |





**Returns:** `Promise`.<`any`>





___

<a id="setaccountlinkingurl"></a>

###  setAccountLinkingUrl

► **setAccountLinkingUrl**(url: *`string`*): `this`




*Defined in fb-api/messenger-profile.ts:105*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |





**Returns:** `this`





___

<a id="setchatextensionhomeurl"></a>

###  setChatExtensionHomeUrl

► **setChatExtensionHomeUrl**(url: *`string`*, inTest?: *`boolean`*, shareButton?: *[ShareButton](../modules/webview.sharebutton.md)*): `this`




*Defined in fb-api/messenger-profile.ts:182*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   - |
| inTest | `boolean`  | true |   - |
| shareButton | [ShareButton](../modules/webview.sharebutton.md)  |  Webview.ShareButton.HIDE |   - |





**Returns:** `this`





___

<a id="setfield"></a>

### «Private» setField

► **setField**(field: *[Field](../modules/messengerprofile.field.md)*, data: *`any`*): `void`




*Defined in fb-api/messenger-profile.ts:216*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | [Field](../modules/messengerprofile.field.md)   |  - |
| data | `any`   |  - |





**Returns:** `void`





___

<a id="setgetstartedbutton"></a>

###  setGetStartedButton

► **setGetStartedButton**(data?: *`any`*): `this`




*Defined in fb-api/messenger-profile.ts:17*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  - |





**Returns:** `this`





___

<a id="setgreeting"></a>

###  setGreeting

► **setGreeting**(greeting: *`string`⎮[Greeting](../modules/messengerprofile.greeting.md)⎮`Array`.<[Greeting](../modules/messengerprofile.greeting.md)>*): `this`




*Defined in fb-api/messenger-profile.ts:43*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| greeting | `string`⎮[Greeting](../modules/messengerprofile.greeting.md)⎮`Array`.<[Greeting](../modules/messengerprofile.greeting.md)>   |  - |





**Returns:** `this`





___

<a id="setpersistentmenu"></a>

###  setPersistentMenu

► **setPersistentMenu**(menuDef: *[PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)⎮`Array`.<[PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)>⎮[PersistentMenuBuilder](persistentmenubuilder.md)*): `this`




*Defined in fb-api/messenger-profile.ts:65*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| menuDef | [PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)⎮`Array`.<[PersistentMenu](../interfaces/messengerprofile.persistentmenu.md)>⎮[PersistentMenuBuilder](persistentmenubuilder.md)   |  - |





**Returns:** `this`





___

<a id="whitelistaudiencecountries"></a>

###  whitelistAudienceCountries

► **whitelistAudienceCountries**(countries: *`string`⎮`Array`.<`string`>*): `this`




*Defined in fb-api/messenger-profile.ts:121*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| countries | `string`⎮`Array`.<`string`>   |  - |





**Returns:** `this`





___

<a id="whitelistdomains"></a>

###  whitelistDomains

► **whitelistDomains**(domains: *`string`⎮`Array`.<`string`>*): `this`




*Defined in fb-api/messenger-profile.ts:83*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| domains | `string`⎮`Array`.<`string`>   |  - |





**Returns:** `this`





___


