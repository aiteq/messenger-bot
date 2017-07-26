[@aiteq/messenger-bot](../README.md) > [RouterService](../classes/routerservice.md)



# Class: RouterService

## Hierarchy

**RouterService**

↳  [VerificationService](verificationservice.md)




↳  [ResponderService](responderservice.md)




↳  [ExtensionService](extensionservice.md)








## Index

### Constructors

* [constructor](routerservice.md#constructor)


### Methods

* [get](routerservice.md#get)
* [getRouter](routerservice.md#getrouter)
* [post](routerservice.md#post)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new RouterService**(): [RouterService](routerservice.md)



*Defined in [server/router-service.ts:7](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/router-service.ts#L7)*





**Returns:** [RouterService](routerservice.md)

---



## Methods
<a id="get"></a>

### «Protected» get

► **get**(route: *`string`*, func: *`RequestHandler`*): `Router`




*Defined in [server/router-service.ts:17](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/router-service.ts#L17)*



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




*Defined in [server/router-service.ts:13](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/router-service.ts#L13)*





**Returns:** `Router`





___

<a id="post"></a>

### «Protected» post

► **post**(route: *`string`*, func: *`RequestHandler`*): `Router`




*Defined in [server/router-service.ts:22](https://github.com/aiteq/messenger-bot/blob/a540dbb/src/server/router-service.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| route | `string`   |  - |
| func | `RequestHandler`   |  - |





**Returns:** `Router`





___


