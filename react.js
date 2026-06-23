import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import baseConfig from './index.js';
import netrex from './eslint-plugin/index.js';

export default tseslint.config(...baseConfig, react.configs.flat.recommended, {
    settings: {
        react: { version: '19.2' },
    },
    plugins: {
        'react-hooks': reactHooks,
        '@netrex': netrex,
    },
    rules: {
        '@netrex/translation-placeholders': 'error',
        '@netrex/rc-translation-placeholders': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'classMethod',
                format: null,
                leadingUnderscore: 'forbid',
            },
            {
                selector: 'classMethod',
                modifiers: ['private'],
                format: null,
                leadingUnderscore: 'require',
            },
            {
                selector: 'classProperty',
                format: null,
                leadingUnderscore: 'forbid',
            },
            {
                selector: 'classProperty',
                modifiers: ['private'],
                format: null,
                leadingUnderscore: 'require',
            },
            {
                selector: 'parameterProperty',
                format: null,
                leadingUnderscore: 'forbid',
            },
            {
                selector: 'parameterProperty',
                modifiers: ['private'],
                format: null,
                leadingUnderscore: 'require',
            },
        ],
        'no-restricted-syntax': [
            'error',
            {
                selector:
                    "CallExpression[callee.name=/^(_|_rc)$/][arguments.0.type='TemplateLiteral']",
                message:
                    'Functions _() and _rc() cannot receive a template literal as the first argument.',
            },
            {
                selector:
                    "CallExpression[callee.name=/^(_|_rc)$/][arguments.0.type!='TemplateLiteral'][arguments.0.type!='Literal']",
                message:
                    'Functions _() and _rc() must receive a string literal as the first argument.',
            },
            {
                selector:
                    "CallExpression[callee.name=/^(_|_rc)$/][arguments.0.type='Literal'][arguments.0.value=/^\\s*%(s|d)\\s*$/]",
                message:
                    'Functions _() and _rc() cannot receive a placeholder-only string (e.g. %s, %d) as the first argument.',
            },
            {
                selector:
                    "CallExpression[callee.name=/^(_|_rc)$/][arguments.0.type='Literal'][arguments.0.raw!=/^[\"']/]",
                message:
                    'Functions _() and _rc() must receive a string literal as the first argument.',
            },
            {
                selector:
                    "BinaryExpression[operator=/^(==|===|!=|!==)$/][left.type='CallExpression'][left.callee.name=/^(_|_rc)$/]",
                message: 'Do not compare translated strings returned by _() or _rc().',
            },
            {
                selector:
                    "BinaryExpression[operator=/^(==|===|!=|!==)$/][right.type='CallExpression'][right.callee.name=/^(_|_rc)$/]",
                message: 'Do not compare translated strings returned by _() or _rc().',
            },
        ],
        'react/react-in-jsx-scope': 'off',
    },
});
