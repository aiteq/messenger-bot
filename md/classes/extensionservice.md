[@aiteq/messenger-bot](../README.md) > [ExtensionService](../classes/extensionservice.md)



# Class: ExtensionService

## Hierarchy


 [RouterService](routerservice.md)

**↳ ExtensionService**







## Index

### Constructors

* [constructor](extensionservice.md#constructor)


### Methods

* [addExtension](extensionservice.md#addextension)
* [get](extensionservice.md#get)
* [getRouter](extensionservice.md#getrouter)
* [post](extensionservice.md#post)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ExtensionService**(): [ExtensionService](extensionservice.md)



*Inherited from [RouterService](routerservice.md).[constructor](routerservice.md#constructor)*

*Defined in server/router-service.ts:7*





**Returns:** [ExtensionService](extensionservice.md)

---


## Methods
<a id="addextension"></a>

###  addExtension

► **addExtension**(extension: *[MessengerExtension](../interfaces/messengerextension.md)*): `this`




*Defined in server/extension-service.ts:9*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| extension | [MessengerExtension](../interfaces/messengerextension.md)   |  - |





**Returns:** `this`





___

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


