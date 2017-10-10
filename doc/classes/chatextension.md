[@aiteq/messenger-bot](../README.md) > [ChatExtension](../classes/chatextension.md)

# Class: ChatExtension

An abstract class represents a Chat Extension.

## Index

### Constructors

* [constructor(view)](chatextension.md#constructor)

### Methods

* [getModel()](chatextension.md#getmodel)
* [getView()](chatextension.md#getview)

---
## Constructors
<a id="constructor"></a>

### `new ChatExtension(view)`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| view | `string` | a name of the Chat Extension (will be used as a part of extension's URL) |

**Returns:** [ChatExtension](chatextension.md) - an instance created

---

## Methods

<a id="getmodel"></a>
###  «abstract» `getModel()`

Returns data to be rendered to extension's view. This method is called every time the extension is to be rendered.

It is an abstract method and must be implemented by the derrived class.

**Returns:** `any` - data to be rendered
___

<a id="getview"></a>
###  `getView()`

Returns name of extension's view.

**Returns:** `string` - name of extension's view
___
