[@aiteq/messenger-bot](../README.md) > [MessengerCodes](../modules/messengercodes.md) > [Api](../classes/messengercodes.api.md)



# Class: Api

## Hierarchy


 [GraphApi](graphapi.md)[Request](../interfaces/messengercodes.request.md)

**↳ Api**







## Index

### Modules

* [GraphApi](../modules/messengercodes.api.graphapi.md)


### Constructors

* [constructor](messengercodes.api.md#constructor)


### Properties

* [accessToken](messengercodes.api.md#accesstoken)
* [version](messengercodes.api.md#version)


### Methods

* [generateCode](messengercodes.api.md#generatecode)
* [sendRequest](messengercodes.api.md#sendrequest)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Api**(accessToken: *`string`*): [Api](messengercodes.api.md)



*Overrides [GraphApi](graphapi.md).[constructor](graphapi.md#constructor)*

*Defined in fb-api/messenger-codes.ts:8*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accessToken | `string`   |  - |





**Returns:** [Api](messengercodes.api.md)

---


## Properties
<a id="accesstoken"></a>

### «Protected» accessToken

**●  accessToken**:  *`string`* 

*Overrides [GraphApi](graphapi.md).[accessToken](graphapi.md#accesstoken)*

*Defined in fb-api/messenger-codes.ts:10*





___

<a id="version"></a>

### «Protected»«Optional» version

**●  version**:  *`string`* 

*Inherited from [GraphApi](graphapi.md).[version](graphapi.md#version)*

*Defined in fb-api/graph-api.ts:12*





___


## Methods
<a id="generatecode"></a>

###  generateCode

► **generateCode**(size?: *`number`*, ref?: *`string`*): `void`




*Defined in fb-api/messenger-codes.ts:15*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| size | `number`   |  - |
| ref | `string`   |  - |





**Returns:** `void`





___

<a id="sendrequest"></a>

### «Protected» sendRequest

► **sendRequest**(data: *[Request](../interfaces/messengercodes.request.md)*, config?: *`AxiosRequestConfig`*): `Promise`.<`any`>




*Inherited from [GraphApi](graphapi.md).[sendRequest](graphapi.md#sendrequest)*

*Defined in fb-api/graph-api.ts:21*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | [Request](../interfaces/messengercodes.request.md)  | - |   - |
| config | `AxiosRequestConfig`  |  {} |   - |





**Returns:** `Promise`.<`any`>





___


