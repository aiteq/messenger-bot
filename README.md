# @aiteq/messenger-bot
#### A TypeScript coded Node.js package for accessing Facebook Messenger Platform API and effective building Messenger Bots.

*Please note that it is still not fully tested Alpha version. Any ideas and tips are welcomed.*

## Major features

- Express.js based and event-driven bot server that can handle both webhook and Messenger Extensions requests.
- Standalone CLI for instant access to functions of the Messenger Platform API (e.g. proactive message sending, create Persistent Menu, enable Get Started button).
- The package contains complete type definitions so it's ready to be used in both JavaScript and TypeScript projects.
- Subscribe to incoming text messages using regular expresion or to specific events emitted by the webhook middleware.
- Start and manage conversations for contextual, synchronous message exchange with users.

## Technologies used

#### Node.js
Node is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Fot its event-driven architecture capable non-blocking I/O it is perfectly fitting platform for building chatbots.

#### TypeScript
A syntactical superset of JavaScript adding static typing, implementing object-oriented principles and adopting latest ES features like generics, decorators or reflection. For Node projects the TypeScript especially brings a higher level of maintainability.

#### Express
Express is a helpful framework built around Node.js for performing actions as a web server. The @aiteq/messenger-bot uses the Express for handling webhook callings (incoming chat messages) as well as providing access to Messenger Extensions.

#### Axios
[Axios](https://github.com/mzabriskie/axios) provides fully Promise based HTTP client functionality, so it was a clear choice for implementation of calling Facebook Graph APIs.

#### Embedded JavaScript Templates
[EJS](http://ejs.co/) is a very simple templating language that helps to create HTML for the pages to be shown in a programmatic way with injecting values. The @aiteq/messenger-bot uses the EJS for rendering Messenger Extensions.

#### Grunt
As a task runner the [Grunt](https://gruntjs.com/) helps to organize building, releasing and maintaining the package.

## Getting started

### Prerequisites
- [Node](https://nodejs.org/en/download/) installed
- [TypeScript](http://www.typescriptlang.org/index.html#download-links) installed
- [Facebook developers account](https://developers.facebook.com)
- [ngrok](https://ngrok.com/download) (or any other tunnel tool) for developing and debuging locally

### Install
```bash
npm install @aiteq/messenger-bot --save
```

### Facebook application
Create and setup a Facebook application using [Quick Start Guide](https://developers.facebook.com/docs/messenger-platform/guides/quick-start) and find out *access token* and *app secret*.

### Bot's code
Create ```index.ts``` and start coding:
```typescript
import { BotServer, PersistentMenuBuilder, TextMessageBuilder, Chat, Conversation, WebhookEvent } from "@aiteq/messenger-bot";
```

Create an instance of ```BotServer```:
```typescript
let bot: BotServer = new BotServer({
  name: "MyBot",
  port: process.env.PORT || 8080,
  verifyToken: "hasta-la-vista-baby",
  accessToken: "<your access token>",
  appSecret: "<your app secret>"
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
Add scripts to ```package.json```:
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

Start ngrok
```bash
ngrok http 8080
```
and copy the provided https:// URL.

### Setup webhook
Follow [the guide](https://developers.facebook.com/docs/messenger-platform/guides/quick-start#steps), paste the copied URL to *Callback URL* and add ```/webhook```. So, if the URL provided by ngrok is e.g. ```https://54d4f722.ngrok.io```, the Callback URL will be ```https://54d4f722.ngrok.io/webhook```.

Set ```hasta-la-vista-baby``` (see creating the bot above) as *Verify Token* and click *Verify and Save*.

### It's alive!
Now the bot is listening for messages sent to your page. Try to send message "hello".

## Use cases

### Hooking text
You can subscribe to specific content of incoming text messages in two ways: exact *commands* and *regular expressions*.

#### Commands
Hooking exact words or phrases can be usefull when your bot is supposed to listen commands like a CLI. Commands are specified as strings or arrays of strings and are considered to be case-insensitive.
```typescript
bot.hear("wait", (chat: Chat) => {
    chat.say("I'm waiting ...");
})
.hear(["sleep", "go sleep", "go to sleep"], (chat: Chat) => {
    chat.say("Well, good night");
});
```

#### Regular expressions
Subscribing to specific content using regular expressions is more flexible and closer to real communication. Like commands, regulars expressions can be specified as an array or single. If the regular expression contains capturing groups they are passed to the callback as third argument.
```typescript
bot.hear(/^good (night|morning)$/i, (chat: Chat, text: string, matches: string[]) => {
    chat.say(`Hi, good ${matches[0]}!`);
});
```
In addition, you can mix commands and regular expressions in one hook.

### Hooking events
You can subscribe to a number of events emitted by the bot while it is receiving messages through [webhook](https://developers.facebook.com/docs/messenger-platform/webhook-reference).

Event|Trigger of emission
---|---
```WebhookEvent.TEXT_MESSAGE```|Text message received
```WebhookEvent.MESSAGE_DELIVERED```|[Delivery confirmation](https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-delivered) received
```WebhookEvent.MESSAGE_READ```|[Read confirmation](https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-read) received
```WebhookEvent.MESSAGE_ECHO```|Message echo received
```WebhookEvent.CONVERSATION```|?
```WebhookEvent.POSTBACK```|Postback received
```WebhookEvent.ATTACHMENT```|Attachment (regardless of type) received
```WebhookEvent.ATTACHMENT_IMAGE```|Image attachment received
```WebhookEvent.ATTACHMENT_AUDIO```|Audio attachment received
```WebhookEvent.ATTACHMENT_VIDEO```|Video attachment received
```WebhookEvent.ATTACHMENT_FILE```|File attachment received
```WebhookEvent.ATTACHMENT_FALLBACK```|Fallback attachment received
```WebhookEvent.ATTACHMENT_LOCATION```|Location received
```WebhookEvent.GET_STARTED_BUTTON```|Gest Started button used
```WebhookEvent.PERSISTENT_MENU```|Item from Persistent Menu selected
```WebhookEvent.TEXT_QUICK_REPLY```|Text Quick Reply received
```WebhookEvent.LOCATION_QUICK_REPLY```|Location Quick Reply received

#### Identified events
Some communication components (e.g. Postback Button, Persistent Menu item) can be *identified* with given ID.

- ```WebhookEvent.POSTBACK```
- ```WebhookEvent.TEXT_QUICK_REPLY```
- ```WebhookEvent.PERSISTENT_MENU```


### Coversation

### BotUtil

## CLI


```typescript
```
