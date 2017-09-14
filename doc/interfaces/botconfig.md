[@aiteq/messenger-bot](../README.md) > [BotConfig](../interfaces/botconfig.md)

# Interface: BotConfig

Represents configuration object for BotServer.

## Properties

<a id="accesstoken"></a>
###  `accessToken`

A [Page Access Token](https://developers.facebook.com/docs/messenger-platform/guides/setup#page_access_token) for calling Messenger Platform API.

**type**: `string`
___

<a id="appsecret"></a>
###  `appSecret`

An [App Secret](https://stackoverflow.com/questions/3203649/where-can-i-find-my-facebook-application-id-and-secret-key) of your FB application. It's used for verifying webhook request signatures.

**type**: `string`
___

<a id="asktimeout"></a>
###  «optional» `askTimeout`

Number of milliseconds to expire unanswered asking during conversation.

**type**: `number`
___

<a id="extensionspath"></a>
### «optional» `extensionsPath`

A custom endpoint name for Chat Extensions. Default value: `"/ext"`.

**type**: `string`
___

<a id="name"></a>
### «optional» `name`

A name of the bot. Optional. It's used only for logging in this time.

**type**: `string`
___

<a id="pingpath"></a>
### «optional» `pingPath`

A custom endpoint name for the ping service. Default value: `"/ping"`.

**type**: `string`
___

<a id="port"></a>
### «optional» `port`

A port number for bot server. Optional. If it is not specified the bot will try to use the `process.env.PORT` property or set the port to `8080`.

**type**: `(number | string)`
___

<a id="verifytoken"></a>
###  `verifyToken`

A [Verify Token](https://developers.facebook.com/docs/messenger-platform/guides/setup#webhook_setup) for webhook setup.

**type**: `string`
___

<a id="webhookpath"></a>
### «optional» `webhookPath`

A custom endpoint name for webhook. Default value: `"/webhook"`.

**type**: `string`
___
