module.exports = {
  extends: [
    'eslint:recommended',
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

    // possible errors https://eslint.org/docs/rules/#possible-errors
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',

    // best practices https://eslint.org/docs/rules/#best-practices
    'no-else-return': 'error',
    'no-extra-bind': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    radix: 'error',
    yoda: 'error',

    // variables https://eslint.org/docs/rules/#variables
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

    // stylistic issues https://eslint.org/docs/rules/#stylistic-issues
    'one-var': ['error', 'never'],

    // es6 https://eslint.org/docs/rules/#ecmascript-6
    'no-var': 'error',
    'no-useless-computed-key': 'error',

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
