# @uscreen.de/eslint-config-prettystandard-vue

[![Test CI](https://github.com/uscreen/eslint-config-prettystandard-vue/actions/workflows/main.yml/badge.svg)](https://github.com/uscreen/eslint-config-prettystandard-vue/actions/workflows/main.yml)
[![Test Coverage](https://coveralls.io/repos/github/uscreen/eslint-config-prettystandard-vue/badge.svg?branch=master)](https://coveralls.io/github/uscreen/eslint-config-prettystandard-vue?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/uscreen/eslint-config-prettystandard-vue/badge.svg?targetFile=package.json)](https://snyk.io/test/github/uscreen/eslint-config-prettystandard-vue?targetFile=package.json)
[![NPM Version](https://badge.fury.io/js/@uscreen.de%2Feslint-config-prettystandard-vue.svg)](https://badge.fury.io/js/@uscreen.de%2Feslint-config-prettystandard-vue)

> ESLint sharable config: prettier &amp; standard for Vue

While maintaining a larger number of projects with different versions of Node.js, Vue.js,modules, and linters, we can't recommend installing any global packages or binaries at all. Thus ESLint and it's config get installed as configured devDependency within their projects package.json. Editors are configured to use local `eslint` if found to overcome compatibility issues throughout different projects.

This package aims to avoid boilerplate and cope&paste with dozens of dotfiles in that scenario.

## Install

Install all required __plugins__ together with the __ESLint__ and __Prettier__ binaries as direct dependencies by adding this package to your devDependencies.

> This is _not_ following the proposed best-practice (see roadmap below), but _works_.

__yarn:__
```bash
yarn add @uscreen.de/eslint-config-prettystandard-vue -D
```

__npm:__
```bash
npm install @uscreen.de/eslint-config-prettystandard-vue -D
```

## Usage

Add or modify your `.eslintrc.js` to extend `@uscreen.de/eslint-config-prettystandard-vue`, for example:

```js
module.exports = {
  extends: ['@uscreen.de/eslint-config-prettystandard-vue']
}
```

This includes Prettier configuration, so you don't need to apply any extra `.prettierrc`.

## Roadmap

- declare plugin deps properly:
  - a) https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config
  - b) https://github.com/eslint/eslint/pull/12460#issuecomment-549108202
  - c) https://www.npmjs.com/package/@rushstack/eslint-patch
  - d) https://github.com/eslint/eslint/issues/13481

## Changelog

> Format according to https://keepachangelog.com

### v0.3.0

#### Changed

- eslint 8.5.x
- prettier 2.5.x
- vue-eslint-parser replaces @babel/eslint-parser

### v0.0.0

#### Added

- Readme with instructions
- initially bootstrapped

---

## License

Licensed under [MIT](./LICENSE).

## Credits

Maintained, Supported and Sponsored by [u|screen](https://uscreen.de)
