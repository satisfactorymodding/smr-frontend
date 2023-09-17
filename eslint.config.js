import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";

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
  '@typescript-eslint/no-unused-vars': ['error', {
    varsIgnorePattern: '^_',
    argsIgnorePattern: '^_'
  }]
};

export default [
  {
    ignores: [".svelte-kit/**/*"],
  },

  {
    files: ["**/*.ts"],
    ignores: [
      "custom-theme.ts",
      "src/service-worker.ts",
      "tailwind.config.ts"
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...rules
    },
  },

  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser,
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
    },
    plugins: {
      svelte: sveltePlugin,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...sveltePlugin.configs.recommended.rules,
      ...rules,
      'svelte/no-at-html-tags': 'off'
    },
  },
];
