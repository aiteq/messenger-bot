# @aiteq/messenger-bot

[![npm version](https://badge.fury.io/js/%40aiteq%2Fmessenger-bot.svg)](https://badge.fury.io/js/%40aiteq%2Fmessenger-bot)&nbsp;&nbsp;[![Dependency Status](https://david-dm.org/aiteq/messenger-bot.svg)](https://david-dm.org/aiteq/messenger-bot)&nbsp;&nbsp;[![Build Status](https://travis-ci.org/aiteq/messenger-bot.svg?branch=master)](https://travis-ci.org/aiteq/messenger-bot)&nbsp;&nbsp;[![Coverage Status](https://coveralls.io/repos/github/aiteq/messenger-bot/badge.svg?branch=master)](https://coveralls.io/github/aiteq/messenger-bot?branch=master)&nbsp;&nbsp;[![Codacy Badge](https://api.codacy.com/project/badge/Grade/292b507c8c744281ba35a2cb821a7104)](https://www.codacy.com/app/tomasklima/messenger-bot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=aiteq/messenger-bot&amp;utm_campaign=Badge_Grade)

#### A TypeScript coded Node.js package for effective building and managing Facebook Messenger Bots.

<table><tr>
<td><b><a href="#major-features">Features</a></b></td>
<td><b><a href="#technologies-used">Technologies</a></b></td>
<td><b><a href="#getting-started">Getting started</a></b></td>
<td><b><a href="#use-cases">Usage</a></b></td>
<td><b><a href="#chat-extensions">Chat extensions</a></b></td>
<td><b><a href="#cli">CLI</a></b></td>
<td><b><a href="doc/README.md">API Doc</a></b></td>
<td><b><a href="https://aiteq.slack.com/messages/#messenger-bot/"><img src="https://a.slack-edge.com/436da/marketing/img/meta/slack_hash_128.png" width="20"></a></b></td>
</tr></table>

```typescript
new BotServer({
    verifyToken: "hasta-la-vista-baby",
    accessToken: "open-sesame",
    appSecret: "too-secret-to-say"
})
.hear("order", async (chat: Chat) => {
    await chat.say("Well, let's order some Botcoins. I'll just ask you a few details.");
    botcoinMachine.placeOrder({
        amount: await chat.ask("How many Botcoins you want to buy?"),
        wallet: await chat.ask("What's the address of your Botcoin wallet?"),
        email: await chat.ask("And finally, tell me your email where I should send instructions.")
    });
    chat.say("Thank you for your order!");
})
.start();
```

## Major features

* Express.js based, **event-driven bot server** handling both **[Webhook](https://developers.facebook.com/docs/messenger-platform/webhook-reference)** and **[Chat Extension](https://developers.facebook.com/docs/messenger-platform/guides/chat-extensions)** requests.
* **Subscribing** to incoming text messages using regular expresions or to events emitted by the webhook middleware.
* Support for synchronous **conversations** between the bot and users.
* **Utilities** for calling [Messenger Platform API](https://developers.facebook.com/docs/messenger-platform) functions from code **outside** chatbot flow.
* Standalone **CLI** for instant access to backing functions of the Messenger API.
* Complete **type definitions** so the package is ready to be used in both **JavaScript** and **TypeScript** projects.

## Technologies used

#### Node.js
[Node](https://nodejs.org/) is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Fot its event-driven architecture capable non-blocking I/O it is perfectly fitting platform for **building chatbots**.

#### TypeScript
A syntactical superset of JavaScript adding static typing, implementing object-oriented principles and adopting latest ES features like generics, decorators or reflection. For Node projects the [TypeScript](http://www.typescriptlang.org/) especially brings a **higher level of maintainability**.

#### Express
[Express](https://expressjs.com/) is a helpful framework built around Node.js for performing actions as a web server. The package uses the Express for **handling webhook** requests (incoming chat messages) as well as providing access to **Chat Extensions**.

#### Axios
[Axios](https://github.com/mzabriskie/axios) provides fully Promise based HTTP client functionality, so it was a clear choice for implementation of **calling Facebook Graph APIs**.

#### Embedded JavaScript Templates
[EJS](http://ejs.co/) is a very simple templating language that helps to create HTML for the pages to be shown in a programmatic way with injecting values. The package uses the EJS for **rendering Chat Extensions**.

#### Jest
[Jest](https://facebook.github.io/jest/) is yet another unit testing framework by Facebook. It covers all needed unit testing areas: tests definition, assertion and code coverage measuring and reporting. In addition the Jest supports TypeScript and Promises. It's interface is just right balanced between descriptiveness and verbosity, so its using is very intuitive..

#### Grunt
As a task runner the [Grunt](https://gruntjs.com/) helps to organize building, releasing and maintaining the package.

## Getting started

### Prerequisites
- [Node](https://nodejs.org/en/download/) installed
- [TypeScript](http://www.typescriptlang.org/index.html#download-links) installed
- [Facebook developers account](https://developers.facebook.com)
- «optional» [ngrok](https://ngrok.com/download) (or any other tunnel tool) for developing and debuging locally

### Install
```bash
npm install @aiteq/messenger-bot --save
```

### Facebook application
Create and setup a Facebook application using [Quick Start Guide](https://developers.facebook.com/docs/messenger-platform/guides/quick-start) and find out *access token* and *app secret*.

### Bot code
Create ```index.ts``` and let's go to start coding:
```typescript
import { BotServer, Chat } from "@aiteq/messenger-bot";
```

<a id="createinstance"></a>
Create an instance of [BotServer](doc/classes/botserver.md):
```typescript
let bot: BotServer = new BotServer({
    name: "MyBot",
    port: process.env.PORT || 8080,
    verifyToken: "hasta-la-vista-baby",
    accessToken: "open-sesame",
    appSecret: "too-secret-to-say"
});
```

Subscribe for some text:
```typescript
bot.hear("hello", (chat: Chat) => {
    chat.say("Hello! I'm Emil, the Bot. How are you?");
});
```

Start the server:
```typescript
bot.start();
```

### Build and start
Add some scripts to ```package.json```:
```json
"scripts": {
    "compile": "tsc -p .",
    "start": "node ./dist/index.js"
},
```

Create ```tsconfig.json```:
```json
{
    "compilerOptions":
    {
        "module": "commonjs",
        "target": "es6",
        "rootDir": "src",
        "outDir": "bin"
    },
    "include": [ "src/**/*" ]
}
```

Transpile the source:
```bash
npm run compile
```

Now the bot is ready and you can bring it to live:
```bash
npm run start
```

Start ngrok:
```bash
ngrok http 8080
```
and copy the provided https:// URL for the following step.

### Setup the webhook
Follow [the guide](https://developers.facebook.com/docs/messenger-platform/guides/quick-start#steps), paste the previously copied URL to *Callback URL* and add ```/webhook```. So, if the URL provided by ngrok is e.g. ```https://54d4f722.ngrok.io```, the Callback URL will be ```https://54d4f722.ngrok.io/webhook```.

Set ```hasta-la-vista-baby``` (see [creating the bot above](#createinstance)) as *Verify Token* and click *Verify and Save*.

### It's alive!
Now the bot is listening for messages sent to your page. Try to send message "hello".

## Use cases

### Hooking text
You can subscribe to specific content of incoming text messages in two ways: exact *commands* and *regular expressions*. The subscribing is done using the [BotServer.hear()](doc/classes/botserver.md#hear) method.

#### Commands
Hooking exact words or phrases can be useful when your bot is supposed to listen for commands like a CLI. Commands are specified as strings or arrays of strings and are considered to be case-insensitive.
```typescript
bot.hear("wait", (chat: Chat) => {
    chat.say("I'm waiting ...");
})
.hear(["sleep", "go sleep", "go to sleep"], (chat: Chat) => {
    chat.say("Well, good night");
});
```

#### Regular expressions
Subscribing to specific content using regular expressions is much more flexible than listing exact words. Like commands, regular expressions can be specified as an array or single. If the regular expression contains capturing groups they are passed to the callback as third argument.
```typescript
bot.hear(/^good (night|morning)$/i, (chat: Chat, text: string, captured: string[]) => {
    chat.say(`Hi, good ${captured[0]}!`);
});
```
In addition, you can mix commands and regular expressions in the same array.

**Note**: The regular expressions are used exactly as given, so if you want to test the text in case-insensitive manner you must explictily indicate it (the `i` flag).

### Hooking events
Besides searching for specific text you can also subscribe to a number of events emitted while the bot is receiving messages through webhook. The subscribing is done using the [BotServer.on()](doc/classes/botserver.md#on) method.

Check the [Webhook.Event](doc/enums/webhook.event.md) enum for complete set of available events.

#### Identified Postback events
When subscribing to Postback based events
- [Postback button](doc/enums/webhook.event.md#postback_button)
- [Persistent Menu item](doc/enums/webhook.event.md#persistent_menu)
- [Quick Reply button](doc/enums/webhook.event.md#text_quick_reply)

you have two options:
1. subscribe to the **type** of the event and receive all events of this type (e.g. Persistent Menu item selected):
```typescript
bot.on(Webhook.Event.PERSISTENT_MENU, (chat: Chat) => {
    chat.say("You've selected some menu item, but I really don't know what you want to do...");
});
```

2. subscribe to the specific **ID** in addition to the type, what is much more useful way:
```typescript
bot.on(Webhook.Event.PERSISTENT_MENU, "menu-item-about", (chat: Chat) => {
    chat.say("What can I say about myself... I'm a bot.");
});
```
<a id="conversation"></a>

### Conversation
Conversation is synchronous message exchange between users and the bot by setting a flow of questions and answers. It's a useful way to get conventional UI tasks, like form filling, closer to interpersonal communication.

In order to ensure execution of steps of the conversation synchronously, all methods of the [Chat](doc/classes/chat.md) class return Promises. So you can call next step after resolving the current. And when you add a little bit of syntactic sugar using the ```async```/```await``` concept, the conversation flow will look much more readable, almost like a real dialog.

There are two methods for interaction with the user:
* [ask()](doc/classes/chat.md#ask) - asking with plain text question
* [askWithMessage()](doc/classes/chat.md#askwithmessage) - asking with structured message

**Note:** No events are emitted and no hear handlers called when the bot receives an answer to the question asked.

```typescript
bot.on(Webhook.Event.PERSISTENT_MENU, "menu-item-song", async (chat: Chat) => {
    profile.favSong = await chat.ask("What's your favourite song?");
});
```

Or more complex flow:

```typescript
bot.on(Webhook.Event.PERSISTENT_MENU, "menu-item-order", async (chat: Chat) => {
    await chat.say("Well, let's order some Botcoins. I'll just ask you a few details.");
    order.amount = await chat.ask("How many Botcoins you want to buy?");
    order.wallet = await chat.ask("What's the address of your Botcoin wallet?");
    order.email = await chat.ask("And finally, tell me your email where I should send instructions for payment.");
    chat.say("Thank you for your order!");
});
```

#### Input validation
As with classic forms, even in the case of a conversation, we need to validate user inputs. Therefore, the interface offers the ability to call a validation function wich you can pass when calling the [ask()](./doc/classes/chat.md#ask) method. As a validator you can conveniently use functions from [validator.js](https://github.com/chriso/validator.js) package:
```typescript
import * as validator from "validator";

bot.on(Webhook.Event.PERSISTENT_MENU, "menu-item-form", async (chat: Chat) => {
    //...
    let email: string = await chat.ask("Give me your email address, please", validator.isEmail)
    //...
});
```
The bot will automatically repeat the question until the user enters a valid email address.

#### Unanswered questions
The questions asked using the [ask()](doc/classes/chat.md#ask) or [askWithMessage()](doc/classes/chat.md#askwithmessage) method may remain unanswered by the user. In order to avoid pending Promises these questions are set to automatically expire. The expiration period is set to 5 minutes by default but you can override it using [BotConfig.askTimeout](doc/interfaces/botconfig.md#asktimeout) parameter. The unanswered question is rejected after its expiration. If you want to react to this situation you may catch the rejection:

```typescript
bot.on(Webhook.Event.PERSISTENT_MENU, "menu-item-name", async (chat: Chat) => {
    try {
        let name = await chat.ask("What's your name?");
        chat.say(`Hello, ${name}. My name is Emil.`);
    } catch (error) {
        chat.say("I'm so sorry you have no name.");
    }
});
```
If you won't catch the expiration the bot will swallow it without consequences. Don't worry about it.

### Media reusing

When you're about to send a message with a media attached you can indicate wheather the media should be reused. The bot stores all reusable attachment ID's. When you try to send the same attachment (with the same URL and `reusable` set to `true`) twice or more times the bot replace media's URL with stored attachment ID.

### BotUtils

The [Facebook Messenger Platform API](https://developers.facebook.com/docs/messenger-platform) contains not only interactive functions for message exchange between the bot and users. There are a lot of services in the API backing the communication like activating [Get Started button](https://developers.facebook.com/docs/messenger-platform/messenger-profile/get-started-button), installing [Persistent Menu](https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu) or generating [Messenger Code](https://developers.facebook.com/docs/messenger-platform/messenger-code).

Sometimes, we also want to send a *push message* - a message sent to the user proactively, not just as a response to some incoming message.

The above cases are not quite bot-aware functions. Thus, in order to keep [BotServer](doc/classes/botserver.md)'s interface clean, these services are made available through the [BotUtils](doc/classes/botutils.md) class.

An instance of the [BotUtils](doc/classes/botutils.md) is initialized passing the the ```accessToken```.
```typescript
let utils: BotUtils = new BotUtils("open, sesame");
```

#### Example: send push message
```typescript
utils.sendText("123450987643", "RATE ALERT: Botcoin price has reached $1,000");
```
See [BotUtils.sendText()](doc/classes/botutils.md#sendtext)

#### Example: activate Get Started button
```typescript
utils.setGetStartedButton();
```
See [BotUtils.setGetStartedButton()](doc/classes/botutils.md#setgetstartedbutton)

#### Example: generate Messenger Code
```typescript
utils.generateMessengerCode("my-m-code.png");
```
See [BotUtils.generateMessengerCode()](doc/classes/botutils.md#generatemessengercode)

## Server monitoring

The bot server supports responding for *ping* requests. By default, the ping service is attached to `/ping` path and may be overrided by [BotConfig.pingPath](doc/interfaces/botconfig.md#pingpath) configuration parameter. The ping request must use the GET method. If all goes well the `"OK"` string is returned with 200 HTTP code.

The ping feature is useful with conjunction with up-time monitoring services like [Uptime Robot](https://uptimerobot.com/).

## Chat extensions

The package supports [Embedded JavaScript Templates (EJS)](http://ejs.co/) for rendering Chat Extension views. For creating a new extension follow these steps.

#### 1. Implement [ChatExtension](doc/interfaces/chatextension.md) interface
```typescript
import { ChatExtension } from "@aiteq/messenger-bot";

export class MyExtension implements ChatExtension {

    constructor() {
        // name your extension - the name will be a part of extension's URL
        super("my");
    }

    // implement abstract method getModel()
    public getModel(): any {
        return {
            name: "Captain Nemo"
        };
    }
}
```
The chat extension class must implement abstract method `getModel()` that provides data to be used in the view.

The `getModel` is called every time an extension is requested.

#### 2. Create view

In your project root create `views` folder (default for placing views in Express application) and `my.ejs` file within it.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Extension</title>
    </head>
    <body>
        <div>Greetings, <%= name %>!</div>
    </body>
</html>
```
#### 3. Add the extension

At last you have to register the extension to the bot server using the [addChatExtension](doc/classes/botserver.md#addchatextension) method.

```typescript
bot.addChatExtension(new MyExtension());
```

Now the extension is ready to use and you can test it pointing to `<your-bot-url>/ext/my`.

*Note that the default path for extensions is `/ext` and you can chanage it by setting the `extensionPath` property of [BotConfig](doc/interfaces/botconfig.md).*


## CLI

The [BotUtils](doc/classes/botutils.md) class is useful if you need non-interactive functions of the Messenger API to be called within your application. More often, however, you will need to use these features one-time, operatively, or as a part of such automated workflow like shell script. There is a Command Line Interface ready for these cases.

#### General usage

```bash
mbutil <group> [command] [options]
```

A *group* represents a specific part of the Messenger API. Available groups are:

Group|Functions
---|---
```send```|Send text or attachment message
```getstarted```|Manage Get Started button
```greeting```|Manage page's localized greetings
```menu```|Manage Persistent Menu
```domains```|Manage Domain Whitelist
```audience```|Manage Target Audience settings
```accountlinking```|Manage Account Linking settings
```chatext```|Manage Chat Extensions settings
```code```|Generate Messenger Code

For each group, you can view help by:
```bash
mbutil <group> --help
```

Global options:

Option|Function
---|---
```--config <path>```|path to the config JSON file; must contain the ```accessToken``` property
```--accessToken <token>```|*access token* (one of ```--config``` or ```--accessToken``` must be specified)
```--help```|display help for the group


#### Group: ```send```
Send plain text or attachment push message.

Usage:
```bash
mbutil send "<text>" --recipient <id> [options]
mbutil send image|audio|video|file --url <url> --recipient <id> [options]
```

Options:
Option|Function
---|---
```--recipient <id>```|ID of the recipient
```--url <url>```|URL of the file to be attached

#### Group: ```getstarted```
Manage [Get Started button](https://developers.facebook.com/docs/messenger-platform/messenger-profile/get-started-button).

Display current setting:
```bash
mbutil getstarted get [options]
```

Activate the button with optional data:
```bash
mbutil getstarted set [--data "<data>"] [options]
```

Remove the button:
```bash
mbutil getstarted delete [options]
```

Options:
Option|Function
---|---
```--data "<data>"```|text or JSON to be send when the user tapped the button

#### Group: ```greeting```
Manage page's localized [Greeting](https://developers.facebook.com/docs/messenger-platform/messenger-profile/greeting-text).

Display current setting:
```bash
mbutil greeting get [options]
```

Add localized greeting text:
```bash
mbutil greeting add "<text>" [--locale <locale>] [options]
```

Remove greeting text:
```bash
mbutil greeting delete [options]
```

Options:
Option|Function
---|---
```--locale <locale>```|greeting's locale ([supported locales](https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales)); if omitted the text will be set as default

#### Group: ```menu```
Manage [Persistent Menu](https://developers.facebook.com/docs/messenger-platform/messenger-profile/persistent-menu).

Display current setting:
```bash
mbutil menu get [options]
```

Set Persistent Menu according to definition in a JSON file:
```bash
mbutil menu set --file <path> [--locale <locale>] [options]
```

Remove Persistent Menu:
```bash
mbutil menu delete [options]
```

Options:
Option|Function
---|---
```--file <path>```|path to menu definition JSON file

Required structure of the JSON menu definition file is clear from the following example (object contains two variants of the menu for `"default"` and `"cs_CZ"` locales):
```json
{
    "default": {
        "composerInputDisabled": false,
        "items": [
            {
                "title": "Show exchange rate",
                "id": "menu-rate"
            },
            {
                "title": "Buy Botcoins",
                "id": "menu-buy"
            },
            {
                "title": "Aiteq International, Ltd.",
                "url": "http://www.aiteq.international"
            }
        ]
    },
    "cs_CZ": {
        "composerInputDisabled": false,
        "items": [
            {
                "title": "Aktuální kurz",
                "id": "menu-rate"
            },
            {
                "title": "Koupit Botcoiny",
                "id": "menu-buy"
            },
            {
                "title": "Aiteq Reloaded, s.r.o.",
                "url": "http://www.aiteq.com"
            }
        ]
    }
}
```

#### Group: ```domains```
Manage [Domain Whitelist](https://developers.facebook.com/docs/messenger-platform/messenger-profile/domain-whitelisting).

Display current whitelisted domains:
```bash
mbutil domains get [options]
```

Add one or more domains (space separated list) to the whitelist:
```bash
mbutil domains add <domain> [domains] [options]
```

Delete the domain whitelist:
```bash
mbutil domains delete [options]
```

#### Group: ```audience```
Manage [Target Audience](https://developers.facebook.com/docs/messenger-platform/messenger-profile/target-audience) settings.
Countries are identified by [ISO 3166 Alpha-2 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

Display current setting:
```bash
mbutil audience get [options]
```

Open Target Audience for all countries:
```bash
mbutil audience open [options]
```

Close Target Audience for all countries:
```bash
mbutil audience close [options]
```

Add one or more countries (space separated list) to the whitelist:
```bash
mbutil audience whitelist <country> [countries] [options]
```

Add one or more countries (space separated list) to the blacklist:
```bash
mbutil audience blacklist <country> [countries] [options]
```

Remove all Target Audience settings:
```bash
mbutil audience delete [options]
```

#### Group: ```accountlinking```
Manage [Account Linking URL](https://developers.facebook.com/docs/messenger-platform/messenger-profile/account-linking-url).

Display currently set Account Linking URL:
```bash
mbutil accountlinking get [options]
```

Set Account Linking URL:
```bash
mbutil accountlinking set <url> [options]
```

Delete currently set Account Linking URL:
```bash
mbutil accountlinking delete [options]
```

#### Group: ```chatext```
Manage [Chat Extension URL](https://developers.facebook.com/docs/messenger-platform/messenger-profile/home-url).

Display currently set Chat Extension URL and settings:
```bash
mbutil chatext get [options]
```

Set Chat Extension URL:
```bash
mbutil chatext set <url> [options]
```

Delete currently set Chat Extension URL:
```bash
mbutil chatext delete [options]
```

Options:
Option|Value|Function
---|---|---
```--inTest```| |controls whether public users can see the Chat Extension
```--shareButton```| |controls whether the share button in the webview is enabled

#### Group: ```code```
Generate [Messenger Code](https://developers.facebook.com/docs/messenger-platform/messenger-code).

Set Chat Extension URL:
```bash
mbutil code generate [options]
```

Options:
Option|Value|Function
---|---|---
```--out```|path|output file's path and name (default: ```./code.png```)
```--size```|number between ```100``` - ```2000```|size of generated image, in pixels (default: ```1000```)
```--ref```|text|data to be received when user scans the code (optional)

## API documentation
Package's [reference API documentation](doc/README.md) is located in [doc](doc/README.md) folder.

## Credits
Tomáš Klíma, [Aiteq](http://www.aiteq.com) & [Aiteq](http://www.aiteq.international)

## License
MIT
