# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Fixed
- storing reusable media ids (store module refactored)
- number of fixies according to tslint & Codacy findings

### Changed
- TypeScript 2.5, Node 8.4

### Added
- testing infrastructure using [Jest](https://facebook.github.io/jest/)
- test coverage: store
- tslint
- coveralls
- [Chat.wait](doc/classes/chat.md#wait)

<a id="latest"></a>
## [1.1.0-beta.4] - 2017-08-19
### Fixed
- using built-in 'crypto' module instead of deprecated external package (no more warnings)
- added @types/express to devDeps (solving "Cannot find type definition file for 'express'" error)

### Changed
- conversation redesigned (see [doc](./README.md#conversation))
- **!!! API CHANGE !!!** [Chat](./doc/classes/chat.md) - methods [ask()](./doc/classes/chat.md#ask) and [askWithMessage()](./doc/classes/chat.md#askwithmessage) moved from Conversation
- TypeScript upgraded to 2.4 -> string enums used instead *namespace+type* workaround
- changed type of Send.ShareButton.share_contents to proper type
- CLI: `--inTest` and `--shareButton` switches doesn't need following `true`/`false`

### Added
- validation support for Conversation.ask
- CLI: added alias `code generate` to `code create`

### Deleted
- **!!! API CHANGE !!!** class Conversation

## [1.1.0-beta.3] - 2017-08-15
### Fixed
- emitting postback identified events

[Unreleased]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.5...HEAD
[1.1.0-beta.5]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.4...v1.1.0-beta.5
[1.1.0-beta.4]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.3...v1.1.0-beta.4
[1.1.0-beta.3]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.2...v1.1.0-beta.3

