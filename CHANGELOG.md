# Change Log

## [5.0.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/5.0.0) (2024-09-21)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/4.3.0...5.0.0)
Summary Changelog:
- Updated requirements to Fastify '^5.0.0'
- Updated all dependencies to latest (for Node.js 20 LTS)

## [4.3.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/4.3.0) (2023-02-09)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/4.2.0...4.3.0)
Summary Changelog:
- Updated requirements to Fastify '^4.12.0'; 
  updated all other dependencies to latest
- Compatibility with TypeScript 4.9 and NodeNext / ESNext
- Ensure all works even with Node.js 18 LTS

## [4.2.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/4.2.0) (2022-08-25)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/4.1.0...4.2.0)
Summary Changelog:
- Updated requirements to Fastify '^4.5.2' and Fastify-plugin '^4.2.0'
- Updated all dependencies to latest
- Improved performance (a lot) by caching the favicon, see related plugin option
- Simplified test code
- Ensure all works with latest Node.js 14 LTS and later LTS releases
- Improve JSDoc comments, generated documentation is much better now

## [4.1.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/4.1.0) (2022-07-19)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/4.0.0...4.1.0)
Summary Changelog:
- Updated requirements to Fastify '^4.0.1' and Fastify-plugin '^4.0.0'
- Ensure all is good as before

## [4.0.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/4.0.0) (2022-06-13)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/3.2.0...4.0.0)
Summary Changelog:
- Updated requirements to Fastify '^4.0.0'
- Updated all dependencies to latest (for Node.js 14 LTS)
- Update and simplified example and test code
- Update documentation from sources with JSDoc

## [3.2.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/3.2.0) (2022-06-13)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/3.1.0...3.2.0)
Summary Changelog:
- Updated requirements to Fastify '3.11.0' or higher (but still 3.x)
- Updated all dependencies to latest (for Node.js 10 LTS)
- Update TypeScript types
- Update Copyright year
- Update Tap configuration
- Generate documentation from sources with JSDoc

## [3.1.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/3.1.0) (2021-02-10)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/3.0.0...3.1.0)
Summary Changelog:
- Updated all dependencies to latest
- Update TypeScript types
- Update code to more modern JavaScript
- Add option to specify favicon file name

## [3.0.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/3.0.0) (2020-07-23)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/2.1.0...3.0.0)
Summary Changelog:
- Updated requirements to Fastify '^3.0.0' (as dev dependency)
- Updated all dependencies to latest
- Update TypeScript types

## [2.1.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/2.1.0) (2020-06-01)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/2.0.0...2.1.0)
Summary Changelog:
- Updated requirements to Fastify '^2.12.0' (as dev dependency)
- Updated all dependencies to latest
- Add TypeScript types

## [2.0.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/2.0.0) (2019-03-01)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/1.0.0...2.0.0)
Summary Changelog:
- Update requirements to Fastify v2
- Update all dependencies

## [1.0.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/1.0.0) (2019-02-27)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.3.2...1.0.0)
Summary Changelog:
- Updated all dependencies
- Note that this release number means that the plugin is stable, 
  and for Fastify v1

## [0.3.2](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.3.2) (2019-02-14)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.3.1...0.3.2)
Summary Changelog:
- Update dependency on 'fastify-plugin' to '^1.5.0'
- Update all dependencies to latest
- Update Tap tests

## [0.3.1](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.3.1) (2019-02-03)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.3.0...0.3.1)
Summary Changelog:
- Update dependency on 'fastify-plugin' to '^1.4.0'
- Update all dependencies to latest
- Update Tap tests

## [0.3.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.3.0) (2018-11-28)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.2.4...0.3.0)
Summary Changelog:
- Update required Fastify version to '^1.1.0', but stay on 1.x
- Update dependency on 'fastify-plugin' to '^1.2.1'
- Updated plugins
- Updated unit tests and examples to use new Fastify syntax/features
- In examples, listen to '127.0.0.1' and no more to all addresses ('0.0.0.0'),
  best practice for examples (unless you need to publish from a container)
- Move plugin main source in a 'src' folder, and even default favicon

## [0.2.4](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.2.4) (2018-05-19)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.2.3...0.2.4)
Summary Changelog:
- Like in Fastify and core plugins, change dev dependency from 'request' to 'simple-get'
- Custom path for favicon: add a test to ensure that when is not found the default favicon (bundled with the plugin) is served

## [0.2.3](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.2.3) (2018-05-17)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.2.2...0.2.3)
Summary Changelog:
- Custom path for favicon: write a warning in Fastify log when using a custom path is not found (so the default one bundled with the plugin is served)
- Custom path for favicon: update info in README, and add some sample usage in the example

## [0.2.2](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.2.2) (2018-05-08)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.2.1...0.2.2)
Summary Changelog:
- Fix typo in README

## [0.2.1](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.2.1) (2018-04-15)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.2.0...0.2.1)
Summary Changelog:
- Update dependencies (and cleaned up 'peerDependencies')
- For now stay on Fastify 0.43.x, but note that next release will be for Fastify 1.2.1 or later

## [0.2.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.2.0) (2018-03-28)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.1.2...0.2.0)
Summary Changelog:
- Fix Issue#2, 'Custom favicon path', to be able to searching 'favicon.ico' from project root, otherwise returning the default one provided by the plugin; or specify a local path to get it
- Update dependencies (need even to add some 'peerDependencies' as needed by latest release of 'standard' and maybe even other package); for now stay on Fastify 0.43.x or later

## [0.1.2](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.1.2) (2018-02-22)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.1.1...0.1.2)
Summary Changelog:
- Small optimization to not calculate path at every request

## [0.1.1](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.1.1) (2018-02-21)
[Full Changelog](https://github.com/smartiniOnGitHub/fastify-favicon/compare/0.1.0...0.1.1)
Summary Changelog:
- Fix Issue#1, 'Unable to serve favicon.ico' (when using the plugin from a real project)

## [0.1.0](https://github.com/smartiniOnGitHub/fastify-favicon/releases/tag/0.1.0) (2018-02-20)
Summary Changelog:
- First release
- Add Fastify favicon, thanks to Fastify Team for the permission

----
