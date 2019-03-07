module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react-hooks', 'prettier'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    // pretier
    'prettier/prettier': 'error',

    // override eslint-config-prettier options
    curly: ['error', 'all'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    // eslint base rules
    'no-shadow-restricted-names': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrors: 'all',
      },
    ],
    'one-var': ['error', 'never'],
    'no-var': 'error',

    'no-useless-computed-key': 'error',
    radix: 'error',
    yoda: 'error',

    // typescript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',

    // react-specific rules
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/prop-types': ['error', { skipUndeclared: true }],

    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': ['error', 'syntax'],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
