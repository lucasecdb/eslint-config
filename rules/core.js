module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    // possible errors https://eslint.org/docs/rules/#possible-errors
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
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

    // stylistic issues https://eslint.org/docs/rules/#stylistic-issues
    'one-var': ['error', 'never'],

    // es6 https://eslint.org/docs/rules/#ecmascript-6
    'no-var': 'error',
    'no-useless-computed-key': 'error',
  },
}
