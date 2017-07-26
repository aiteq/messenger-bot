[@aiteq/messenger-bot](../README.md) > [RegExpEscaped](../classes/regexpescaped.md)



# Class: RegExpEscaped

## Hierarchy


 `RegExp`

**↳ RegExpEscaped**







## Index

### Constructors

* [constructor](regexpescaped.md#constructor)


### Properties

* [RE_ESCAPE](regexpescaped.md#re_escape)
* [RegExp](regexpescaped.md#regexp)
* [SPECIALS](regexpescaped.md#specials)
* [flags](regexpescaped.md#flags)
* [global](regexpescaped.md#global)
* [ignoreCase](regexpescaped.md#ignorecase)
* [lastIndex](regexpescaped.md#lastindex)
* [multiline](regexpescaped.md#multiline)
* [source](regexpescaped.md#source)
* [sticky](regexpescaped.md#sticky)
* [unicode](regexpescaped.md#unicode)


### Methods

* [__@match](regexpescaped.md#___match)
* [__@replace](regexpescaped.md#___replace)
* [__@search](regexpescaped.md#___search)
* [__@split](regexpescaped.md#___split)
* [compile](regexpescaped.md#compile)
* [escape](regexpescaped.md#escape)
* [exec](regexpescaped.md#exec)
* [test](regexpescaped.md#test)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new RegExpEscaped**(pattern: *`RegExp`⎮`string`*, flags?: *`string`*): [RegExpEscaped](regexpescaped.md)



*Defined in utils/reg-exp-escaped.ts:24*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pattern | `RegExp`⎮`string`   |  - |
| flags | `string`   |  - |





**Returns:** [RegExpEscaped](regexpescaped.md)

---


## Properties
<a id="re_escape"></a>

### «Static»«Private» RE_ESCAPE

**●  RE_ESCAPE**:  *`RegExp`*  =  RegExp('[' + RegExpEscaped.SPECIALS.join('\\') + ']', 'g')

*Defined in utils/reg-exp-escaped.ts:24*





___

<a id="regexp"></a>

### «Static» RegExp

**●  RegExp**:  *`RegExpConstructor`* 

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:870*





___

<a id="specials"></a>

### «Static»«Private» SPECIALS

**●  SPECIALS**:  *`string`[]*  =  [
	  // order matters for these
	    "-"
	  , "["
	  , "]"
	  // order doesn't matter for any of these
	  , "/"
	  , "{"
	  , "}"
	  , "("
	  , ")"
	  , "*"
	  , "+"
	  , "?"
	  , "."
	  , "\\"
	  , "^"
	  , "$"
	  , "|"
	]

*Defined in utils/reg-exp-escaped.ts:3*





___

<a id="flags"></a>

### «Static» flags

**●  flags**:  *`string`* 

*Inherited from RegExp.flags*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:4678*



Returns a string indicating the flags of the regular expression in question. This field is read-only. The characters in this string are sequenced and concatenated in the following order:

*   "g" for global
*   "i" for ignoreCase
*   "m" for multiline
*   "u" for unicode
*   "y" for sticky

If no flags are set, the value is the empty string.




___

<a id="global"></a>

### «Static» global

**●  global**:  *`boolean`* 

*Inherited from RegExp.global*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:836*



Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only.




___

<a id="ignorecase"></a>

### «Static» ignoreCase

**●  ignoreCase**:  *`boolean`* 

*Inherited from RegExp.ignoreCase*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:839*



Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only.




___

<a id="lastindex"></a>

### «Static» lastIndex

**●  lastIndex**:  *`number`* 

*Inherited from RegExp.lastIndex*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:844*





___

<a id="multiline"></a>

### «Static» multiline

**●  multiline**:  *`boolean`* 

*Inherited from RegExp.multiline*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:842*



Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only.




___

<a id="source"></a>

### «Static» source

**●  source**:  *`string`* 

*Inherited from RegExp.source*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:833*



Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal.




___

<a id="sticky"></a>

### «Static» sticky

**●  sticky**:  *`boolean`* 

*Inherited from RegExp.sticky*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:4684*



Returns a Boolean value indicating the state of the sticky flag (y) used with a regular expression. Default is false. Read-only.




___

<a id="unicode"></a>

### «Static» unicode

**●  unicode**:  *`boolean`* 

*Inherited from RegExp.unicode*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:4690*



Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular expression. Default is false. Read-only.




___


## Methods
<a id="___match"></a>

### «Static» __@match

► **__@match**(string: *`string`*): `RegExpMatchArray`⎮`null`




*Inherited from RegExp.[Symbol.match]*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:5874*



Matches a string with this regular expression, and returns an array containing the results of that search.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string`   |  A string to search within. |





**Returns:** `RegExpMatchArray`⎮`null`





___

<a id="___replace"></a>

### «Static» __@replace

► **__@replace**(string: *`string`*, replaceValue: *`string`*): `string`

► **__@replace**(string: *`string`*, replacer: *function*): `string`




*Inherited from RegExp.[Symbol.replace]*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:5883*



Replaces text in a string, using this regular expression.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string`   |  A String object or string literal whose contents matching against              this regular expression will be replaced |
| replaceValue | `string`   |  A String object or string literal containing the text to replace for every                    successful match of this regular expression. |





**Returns:** `string`




*Inherited from RegExp.[Symbol.replace]*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:5891*



Replaces text in a string, using this regular expression.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string`   |  A String object or string literal whose contents matching against              this regular expression will be replaced |
| replacer | function   |  A function that returns the replacement text. |





**Returns:** `string`





___

<a id="___search"></a>

### «Static» __@search

► **__@search**(string: *`string`*): `number`




*Inherited from RegExp.[Symbol.search]*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:5899*



Finds the position beginning first substring match in a regular expression search using this regular expression.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string`   |  The string to search within. |





**Returns:** `number`





___

<a id="___split"></a>

### «Static» __@split

► **__@split**(string: *`string`*, limit?: *`number`*): `string`[]




*Inherited from RegExp.[Symbol.split]*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:5913*



Returns an array of substrings that were delimited by strings in the original input that match against this regular expression.

If the regular expression contains capturing parentheses, then each time this regular expression matches, the results (including any undefined results) of the capturing parentheses are spliced.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string`   |  string value to split |
| limit | `number`   |  if not undefined, the output array is truncated so that it contains no morethan 'limit' elements. |





**Returns:** `string`[]





___

<a id="compile"></a>

### «Static» compile

► **compile**(): `this`




*Inherited from RegExp.compile*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:847*





**Returns:** `this`





___

<a id="escape"></a>

### «Static» escape

► **escape**(text: *`string`*): `string`




*Defined in utils/reg-exp-escaped.ts:34*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| text | `string`   |  - |





**Returns:** `string`





___

<a id="exec"></a>

### «Static» exec

► **exec**(string: *`string`*): `RegExpExecArray`⎮`null`




*Inherited from RegExp.exec*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:824*



Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string`   |  The String object or string literal on which to perform the search. |





**Returns:** `RegExpExecArray`⎮`null`





___

<a id="test"></a>

### «Static» test

► **test**(string: *`string`*): `boolean`




*Inherited from RegExp.test*

*Defined in /Users/darbic/work-live/dev/messenger-bot/node_modules/typescript/lib/lib.es6.d.ts:830*



Returns a Boolean value that indicates whether or not a pattern exists in a searched string.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| string | `string`   |  String on which to perform the search. |





**Returns:** `boolean`





___


