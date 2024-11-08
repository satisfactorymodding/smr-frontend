import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';


const rules = {
  'array-callback-return': 'error',
  'no-constant-binary-expression': 'error',
  'no-self-compare': 'error',
  'no-template-curly-in-string': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unreachable-loop': 'error',
  'arrow-body-style': ['error', 'as-needed'],
  'block-scoped-var': 'error',
  'curly': ['error', 'all'],
  'dot-notation': 'error',
  'no-eval': 'error',
  'no-implied-eval': 'error',
  'no-var': 'error',
  'one-var': ['error', 'never'],
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  "yoda": 'error',
  'array-bracket-newline': ['error', { multiline: true }],
  'brace-style': 'error',
  'no-shadow': 'error',
  'no-use-before-define': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    }
  ],
  '@typescript-eslint/no-unused-expressions': 'warn',
  'svelte/no-at-html-tags': 'warn',
};

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      ".svelte-kit/**/*",
      "node_modules/**/*",
      "dist/**/*",
      "build/**/*",
      "src/i18n/**/*",
      "postcss.config.cjs",
    ],
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    rules
  }
];