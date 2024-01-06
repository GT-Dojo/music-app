module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:jsonc/recommended-with-jsonc',
  ],
  ignorePatterns: ['public', 'vendor'],
  rules: {
    // Disable console in production.
    // https://eslint.org/docs/latest/rules/no-console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Allow unused variables when they begin with an underscore.
    // https://eslint.org/docs/latest/rules/no-unused-vars
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    // Always have a new line between block and return statement.
    // https://eslint.org/docs/latest/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: 'return' },
    ],

    // Ensure the import order are align across files.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          orderImportKind: 'desc',
          caseInsensitive: true,
        },
      },
    ],

    // Enforce double quote instead of curly brace when passing string prop.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],

    // Disable this rule as we have typescript.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',

    // Disable this rules as we are using new JSX transform
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    'import/no-named-as-default': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      rules: {
        // Similar to `no-unused-vars` but including types.
        // https://typescript-eslint.io/rules/no-unused-vars/
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],

        // Enforce type import format.
        // https://typescript-eslint.io/rules/consistent-type-imports/
        '@typescript-eslint/consistent-type-imports': 'error',
      },
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
  ],
};
