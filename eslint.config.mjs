import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginReact from 'eslint-plugin-react'; // Import React plugin
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'; // Import TypeScript ESLint plugin

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extending existing configs
  ...compat.extends('next', 'next/typescript'),

  // Adding custom rules and settings
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react: eslintPluginReact,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'import/extensions': [
        'error',
        {
          js: 'ignorePackages',
          ts: 'never',
        },
      ],
      '@tanstack/query/exhaustive-deps': 0,
      '@typescript-eslint/no-unsafe-function-type': 0,
      'react/react-in-jsx-scope': 0,
      'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
      'react/display-name': 0,
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/jsx-props-no-spreading': 0,
      'react/no-unknown-property': ['error', { ignore: ['tw'] }],
      'react/prop-types': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/member-delimiter-style': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-unused-vars': [
        0,
        {
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': [
        2,
        {
          allow: ['warn', 'error'],
        },
      ],
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      '**/temp.js',
      'config/*',
      '**/.next/*',
      'next-env.d.ts',
      '**/out/*',
      '**/node_modules/*',
    ],
  },
];

export default eslintConfig;
