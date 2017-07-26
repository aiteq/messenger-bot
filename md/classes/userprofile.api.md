[@aiteq/messenger-bot](../README.md) > [UserProfile](../modules/userprofile.md) > [Api](../classes/userprofile.api.md)



# Class: Api

## Hierarchy


 [GraphApi](graphapi.md)[Request](../interfaces/userprofile.request.md)

**↳ Api**







## Index

### Modules

* [GraphApi](../modules/userprofile.api.graphapi.md)


### Constructors

* [constructor](userprofile.api.md#constructor)


### Properties

* [accessToken](userprofile.api.md#accesstoken)
* [version](userprofile.api.md#version)


### Methods

* [getFields](userprofile.api.md#getfields)
* [getUserProfile](userprofile.api.md#getuserprofile)
* [sendRequest](userprofile.api.md#sendrequest)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Api**(accessToken: *`string`*): [Api](userprofile.api.md)



*Overrides [GraphApi](graphapi.md).[constructor](graphapi.md#constructor)*

*Defined in fb-api/user-profile.ts:7*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accessToken | `string`   |  - |





**Returns:** [Api](userprofile.api.md)

---


## Properties
<a id="accesstoken"></a>

### «Protected» accessToken

**●  accessToken**:  *`string`* 

*Overrides [GraphApi](graphapi.md).[accessToken](graphapi.md#accesstoken)*

*Defined in fb-api/user-profile.ts:9*





___

<a id="version"></a>

### «Protected»«Optional» version

**●  version**:  *`string`* 

*Inherited from [GraphApi](graphapi.md).[version](graphapi.md#version)*

*Defined in fb-api/graph-api.ts:12*





___


## Methods
<a id="getfields"></a>

###  getFields

► **getFields**(userId: *`string`*, fields: *[Field](../modules/userprofile.field.md)⎮`Array`.<[Field](../modules/userprofile.field.md)>*): `Promise`.<[Response](../interfaces/userprofile.response.md)>




*Defined in fb-api/user-profile.ts:18*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| userId | `string`   |  - |
| fields | [Field](../modules/userprofile.field.md)⎮`Array`.<[Field](../modules/userprofile.field.md)>   |  - |





**Returns:** `Promise`.<[Response](../interfaces/userprofile.response.md)>





___

<a id="getuserprofile"></a>

###  getUserProfile

► **getUserProfile**(userId: *`string`*): `Promise`.<[Response](../interfaces/userprofile.response.md)>




*Defined in fb-api/user-profile.ts:14*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| userId | `string`   |  - |





**Returns:** `Promise`.<[Response](../interfaces/userprofile.response.md)>





___

<a id="sendrequest"></a>

### «Protected» sendRequest

► **sendRequest**(data: *[Request](../interfaces/userprofile.request.md)*, config?: *`AxiosRequestConfig`*): `Promise`.<`any`>




*Inherited from [GraphApi](graphapi.md).[sendRequest](graphapi.md#sendrequest)*

*Defined in fb-api/graph-api.ts:21*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | [Request](../interfaces/userprofile.request.md)  | - |   - |
| config | `AxiosRequestConfig`  |  {} |   - |





**Returns:** `Promise`.<`any`>





___


