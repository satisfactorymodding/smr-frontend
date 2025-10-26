import prettier from 'eslint-config-prettier';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

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
  'prefer-const': 'off',
  "yoda": 'error',
  'array-bracket-newline': ['error', { multiline: true }],
  'brace-style': 'error',
  'no-shadow': 'error',
  'no-use-before-define': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_'
    }
  ],
  'svelte/no-navigation-without-resolve': 'off',
  'svelte/no-unused-props': [
    'error',
    {
      'allowUnusedNestedProperties': true,
    }
  ]
};

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      "no-undef": 'off',
      ...rules
    }
  },
  {
    files: [
      '**/*.svelte',
      '**/*.svelte.ts',
      '**/*.svelte.js'
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        svelteConfig
      }
    }
  },

  // {
  //   files: ["**/*.ts"],
  //   languageOptions: {
  //     parser: typescriptParser,
  //     parserOptions: {
  //       project: "./tsconfig.json",
  //       extraFileExtensions: [".svelte"],
  //     },
  //   },
  //   plugins: {
  //     "@typescript-eslint": typescriptPlugin,
  //   },
  //   rules: {
  //     ...typescriptPlugin.configs.recommended.rules,
  //     ...rules
  //   },
  // },
  //
  // {
  //   files: ["**/*.svelte"],
  //   languageOptions: {
  //     parser: svelteParser,
  //     parserOptions: {
  //       parser: typescriptParser,
  //       project: "./tsconfig.json",
  //       extraFileExtensions: [".svelte"],
  //     },
  //   },
  //   plugins: {
  //     svelte: sveltePlugin,
  //     "@typescript-eslint": typescriptPlugin,
  //   },
  //   rules: {
  //     ...typescriptPlugin.configs.recommended.rules,
  //     ...sveltePlugin.configs.recommended.rules,
  //     ...rules,
  //     'svelte/no-at-html-tags': 'off'
  //   },
  // },
);
