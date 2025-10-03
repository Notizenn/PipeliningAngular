// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';

export default [
  // JS/TS de base
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Angular (TS files)
  {
    files: ['**/*.ts'],
    plugins: { '@angular-eslint': angular },
    rules: {
      'no-var': 'error',
      'prefer-const': 'warn',
    },
  },

  // Angular templates (HTML)
  {
    files: ['**/*.html'],
    languageOptions: { parser: angularTemplateParser },
    plugins: { '@angular-eslint/template': angularTemplate },
    rules: {
      // Désactive les règles TS qui ne s'appliquent PAS aux templates
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // Ignore build artefacts
  { ignores: ['dist/**', '.angular/**', 'node_modules/**'] },
];
