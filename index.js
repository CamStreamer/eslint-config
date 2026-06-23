import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
    js.configs.recommended,
    tseslint.configs.base,
    // Turns off core ESLint rules already covered by TypeScript.
    tseslint.configs.eslintRecommended,
    {
        plugins: {
            'unused-imports': unusedImports,
        },
        rules: {
            '@typescript-eslint/no-deprecated': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/no-unnecessary-condition': 'error',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { vars: 'all', args: 'none', ignoreRestSiblings: false },
            ],
            '@typescript-eslint/strict-boolean-expressions': [
                'error',
                { allowNullableObject: true, allowNullableBoolean: true },
            ],
            'no-unused-vars': 'off',
            '@typescript-eslint/default-param-last': 'error',
            'default-param-last': 'off',
            '@typescript-eslint/require-await': 'error',
            'require-await': 'off',
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                { accessibility: 'no-public' },
            ],
            'unused-imports/no-unused-imports': 'error',
            'array-callback-return': 'error',
            'no-constant-binary-expression': 'error',
            'no-constructor-return': 'error',
            'no-duplicate-imports': 'error',
            'no-new-native-nonconstructor': 'error',
            'no-promise-executor-return': 'error',
            'no-self-compare': 'error',
            'no-template-curly-in-string': 'error',
            'no-unreachable-loop': 'error',
            'no-unused-private-class-members': 'error',
            curly: 'error',
            'no-eq-null': 'error',
            'no-lonely-if': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-promise-reject-errors': 'error',
            'spaced-comment': ['warn', 'always', { exceptions: ['-', '+'] }],
            'no-console': 'error',
            eqeqeq: 'error',
            'no-param-reassign': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
        },
    },
);
