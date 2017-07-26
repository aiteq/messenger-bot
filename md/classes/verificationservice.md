[@aiteq/messenger-bot](../README.md) > [VerificationService](../classes/verificationservice.md)



# Class: VerificationService

## Hierarchy


 [RouterService](routerservice.md)

**↳ VerificationService**







## Index

### Constructors

* [constructor](verificationservice.md#constructor)


### Methods

* [get](verificationservice.md#get)
* [getRouter](verificationservice.md#getrouter)
* [post](verificationservice.md#post)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new VerificationService**(verifyToken?: *`string`*): [VerificationService](verificationservice.md)



*Overrides [RouterService](routerservice.md).[constructor](routerservice.md#constructor)*

*Defined in server/verification-service.ts:5*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| verifyToken | `string`   |  - |





**Returns:** [VerificationService](verificationservice.md)

---



## Methods
<a id="get"></a>

### «Protected» get

► **get**(route: *`string`*, func: *`RequestHandler`*): `Router`




*Inherited from [RouterService](routerservice.md).[get](routerservice.md#get)*

*Defined in server/router-service.ts:17*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| route | `string`   |  - |
| func | `RequestHandler`   |  - |





**Returns:** `Router`





___

<a id="getrouter"></a>

###  getRouter

► **getRouter**(): `Router`




*Inherited from [RouterService](routerservice.md).[getRouter](routerservice.md#getrouter)*

*Defined in server/router-service.ts:13*





**Returns:** `Router`





___

<a id="post"></a>

### «Protected» post

► **post**(route: *`string`*, func: *`RequestHandler`*): `Router`




*Inherited from [RouterService](routerservice.md).[post](routerservice.md#post)*

*Defined in server/router-service.ts:22*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| route | `string`   |  - |
| func | `RequestHandler`   |  - |





**Returns:** `Router`





___


