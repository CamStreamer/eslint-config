# eslint-config

Our CamStreamer [ESLint](https://eslint.org/) config.

## Usage

**Install**:

```
$ yarn add --dev @camstreamer/eslint-config
$ npm install @camstreamer/eslint-config --save-dev
```

**Edit `eslintrc.js/.eslintrc`**:

```
{
  // ...
  extends: ['@camstreamer/eslint-config'] // for nodejs
  extends: ['@camstreamer/eslint-config/react.json'] // for react
}
```

**We should update yarn, we need nodejs 18+**

**Custom rules are implemented in `./eslint-plugin` and are used (via postinstall script) in eslint plugin `@camstreamer`**
