# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- simplified and more consistent creation of template messages using builders

### Added
- adding `X-Frame-Options` and `Content-Security-Policy` headers for extensions
- adding support for convenient adding URL Buttons and Default Actions linking Chat Extensions
- **API CHANGE** ButtonTemplateMessageBuilder, ListTemplateMessageBuilder, ElementBuilder and OgElementBuilder have new add...Button methods for adding buttons (they replace removed button builders)
- **API CHANGE** ElementBuilder has new methods setDefaultAction and setExtensionDefaultAction for adding Deafault Actions (they replace removed DefaultActionBuilder)

### Deleted
- **API CHANGE** CallButtonBuilder, LoginButtonBuilder, LogoutButtonBuilder, PostbackButtonBuilder, ShareButtonBuilder, UrlButtonBuilder and DefaultActionBuilder in order to simplify creating template messages
- **API CHANGE** TemplateMessageBuilder lost its static methods createElement, createOgElement, createReceiptElement, createDefaultAction, createUrlButton, createPostbackButton, createCallButton, createShareButton, createLoginButton and createLogoutButton in order to simplify and to have more consistent creating template messages using builders

<a id="latest"></a>

## [1.1.0-RC.1] - 2017-09-15
### Fixed
- several minor fixies according to unit testing

### Changed
- CLI refactored to not using `process.exit()`
- [Chat.askWithMessage()](./doc/classes/chat.md) supports validator

### Added
- **tests coveraging almost all code**
- ping service
- expiration of unanswered questions ([BotConfig.askTimeout](doc/interfaces/botconfig.md#asktimeout))
- documentation (monitoring, expiration, intro example)

## [1.1.0-beta.5] - 2017-09-01
### Fixed
- storing reusable media ids (store module refactored)
- number of fixies according to tslint & Codacy findings
- messenger code generating error handling

### Changed
- TypeScript 2.5, Node 8.4
- **API CHANGE** BotUtils.constructor() needs only accessToken (instead of all BotConfig object)
- **API CHANGE** BotUtils.sendAudio|sendFile|sendImage|sendVideo have new optional parameter reusable
- **API CHANGE** BotUtils.addGreeting() changed to setGreeting (according to its logic)
- **API CHANGE** BotUtils.setPersistentMenu() accepts [PersistentMenuDef](./doc/interfaces/persistentmenudef.md) instead of Messenger API type (MessengerProfile.PersistentMenu)
- all BotUtils & Chat methods now return Promises with response (prior this version they were returning Promise<void>)
- **API CHANGE** MessengerProfile.setPersistentMenu() no longer accepts [PersistentMenuBuilder](./doc/classes/persistentmenubuilder.md)
- [PersistentMenuBuilder](./doc/classes/persistentmenubuilder.md) now accepts [PersistentMenuDef](./doc/interfaces/persistentmenudef.md) in [constructor](./doc/classes/persistentmenubuilder.md#constructor)

### Added
- [PersistentMenuDef](./doc/interfaces/persistentmenudef.md) interface for better separation from Messenger API types and simplified menu definition in declarative way
- testing infrastructure using [Jest](https://facebook.github.io/jest/)
- test coverage: store, BotUtils
- tslint
- coveralls
- [Chat.wait](doc/classes/chat.md#wait)

## [1.1.0-beta.4] - 2017-08-19
### Fixed
- using built-in 'crypto' module instead of deprecated external package (no more warnings)
- added @types/express to devDeps (solving "Cannot find type definition file for 'express'" error)

### Changed
- conversation redesigned (see [doc](./README.md#conversation))
- **API CHANGE** [Chat](./doc/classes/chat.md) - methods [ask()](./doc/classes/chat.md#ask) and [askWithMessage()](./doc/classes/chat.md#askwithmessage) moved from Conversation
- TypeScript upgraded to 2.4 -> string enums used instead *namespace+type* workaround
- changed type of Send.ShareButton.share_contents to proper type
- CLI: `--inTest` and `--shareButton` switches doesn't need following `true`/`false`

### Added
- validation support for Conversation.ask
- CLI: added alias `code generate` to `code create`

### Deleted
- **API CHANGE** class Conversation

## [1.1.0-beta.3] - 2017-08-15
### Fixed
- emitting postback identified events

[Unreleased]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-RC.1...HEAD
[1.1.0-RC.1]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.5...v1.1.0-RC.1
[1.1.0-beta.5]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.4...v1.1.0-beta.5
[1.1.0-beta.4]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.3...v1.1.0-beta.4
[1.1.0-beta.3]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.2...v1.1.0-beta.3
