# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Fixed
- using built-in 'crypto' module instead of deprecated external package (no more warnings)
- added @types/express to devDeps (solving "Cannot find type definition file for 'express'" error)

### Changed
- TypeScript upgraded to 2.4 -> string enums used instead namespace+type workaround

## [1.1.0-beta.3] - 2017-08-15
### Fixed
- emitting postback identified events

[Unreleased]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.4...HEAD
[1.1.0-beta.4]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.3...v1.1.0-beta.4
[1.1.0-beta.3]: https://github.com/aiteq/messenger-bot/compare/v1.1.0-beta.2...v1.1.0-beta.3

