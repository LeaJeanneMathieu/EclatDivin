import globals from 'globals';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      prettier,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...(tsPlugin.configs.recommended?.rules ?? {}),
      ...(reactPlugin.configs.recommended?.rules ?? {}),
      ...(reactHooks.configs.recommended?.rules ?? {}),
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
];
