# eslint-config

Our Netrex [ESLint](https://eslint.org/) config.

## Usage

**Install**:

```
$ yarn add --dev @netrex/eslint-config
```

**Edit `eslintrc.js/.eslintrc`**:

```
{
  // ...
  extends: ['@netrex/eslint-config'] // for nodejs
  extends: ['@netrex/eslint-config/react.json'] // for react
}
```

**We should update yarn, we need nodejs 18+**

**Custom rules are implemented in `./eslint-plugin` and are used (via postinstall script) in eslint plugin `@netrex`**
