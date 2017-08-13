[@aiteq/messenger-bot](../README.md) > [CallButtonBuilder](../classes/callbuttonbuilder.md)

# Class: CallButtonBuilder

Helps to create a [Call Button](https://developers.facebook.com/docs/messenger-platform/send-api-reference/call-button).

## Index

### Constructors

* [constructor(title, payload)](callbuttonbuilder.md#constructor)

---
## Constructors
<a id="constructor"></a>
### `new CallButtonBuilder(title, payload)`

Creates an instance of CallButtonBuilder.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   | title of the button, max length is 20 characters |
| payload | `string`   | phone number, format must have `"+"` prefix followed by the country code, area code and local number (e.g. +16505551234) |

**Returns:** [CallButtonBuilder](callbuttonbuilder.md)
___
