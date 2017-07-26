[@aiteq/messenger-bot](../README.md) > [GraphApi](../classes/graphapi.md)



# Class: GraphApi

## Type parameters
#### T :  [Request](../interfaces/graphapi.request.md)
## Hierarchy

**GraphApi**

↳  [Api](send.api.md)




↳  [Api](userprofile.api.md)




↳  [Api](messengerprofile.api.md)




↳  [Api](messengercodes.api.md)








## Index

### Modules

* [Endpoint](../modules/graphapi.endpoint.md)
* [Method](../modules/graphapi.method.md)


### Interfaces

* [Request](../interfaces/graphapi.request.md)


### Type aliases

* [Endpoint](graphapi.md#endpoint-1)
* [Method](graphapi.md#method-1)


### Constructors

* [constructor](graphapi.md#constructor)


### Properties

* [accessToken](graphapi.md#accesstoken)
* [client](graphapi.md#client)
* [endpoint](graphapi.md#endpoint-2)
* [method](graphapi.md#method-2)
* [version](graphapi.md#version)
* [DEFAULT_VERSION](graphapi.md#default_version)


### Methods

* [sendRequest](graphapi.md#sendrequest)



---
## Type aliases
<a id="endpoint-1"></a>

### «Static» Endpoint

**Τ Endpoint**:  *"me/messages"⎮"me/messenger_profile"⎮"me/messenger_codes"* 

*Defined in fb-api/graph-api.ts:87*





___

<a id="method-1"></a>

### «Static» Method

**Τ Method**:  *"get"⎮"post"⎮"delete"* 

*Defined in fb-api/graph-api.ts:78*





___


## Constructors
<a id="constructor"></a>


### ⊕ **new GraphApi**(accessToken: *`string`*, endpoint?: *[Endpoint](../modules/graphapi.endpoint.md)⎮`string`*, method?: *[Method](../modules/graphapi.method.md)*, version?: *`string`*): [GraphApi](graphapi.md)



*Defined in fb-api/graph-api.ts:10*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| accessToken | `string`  | - |   - |
| endpoint | [Endpoint](../modules/graphapi.endpoint.md)⎮`string`  | &quot;&quot; |   - |
| method | [Method](../modules/graphapi.method.md)  | - |   - |
| version | `string`  | - |   - |





**Returns:** [GraphApi](graphapi.md)

---


## Properties
<a id="accesstoken"></a>

### «Protected» accessToken

**●  accessToken**:  *`string`* 

*Defined in fb-api/graph-api.ts:12*





___

<a id="client"></a>

### «Private» client

**●  client**:  *`AxiosInstance`* 

*Defined in fb-api/graph-api.ts:10*





___

<a id="endpoint-2"></a>

### «Private» endpoint

**●  endpoint**:  *[Endpoint](../modules/graphapi.endpoint.md)⎮`string`* 

*Defined in fb-api/graph-api.ts:12*





___

<a id="method-2"></a>

### «Private»«Optional» method

**●  method**:  *[Method](../modules/graphapi.method.md)* 

*Defined in fb-api/graph-api.ts:12*





___

<a id="version"></a>

### «Protected»«Optional» version

**●  version**:  *`string`* 

*Defined in fb-api/graph-api.ts:12*





___

<a id="default_version"></a>

### «Static»«Private» DEFAULT_VERSION

**●  DEFAULT_VERSION**:  *"2.9"*  = "2.9"

*Defined in fb-api/graph-api.ts:8*





___


## Methods
<a id="sendrequest"></a>

### «Protected» sendRequest

► **sendRequest**(data: *`T`*, config?: *`AxiosRequestConfig`*): `Promise`.<`any`>




*Defined in fb-api/graph-api.ts:21*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | `T`  | - |   - |
| config | `AxiosRequestConfig`  |  {} |   - |





**Returns:** `Promise`.<`any`>





___


