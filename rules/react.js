module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],

  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'latest',
    },
  },

  rules: {
    // Prevent from trying to read props via this.state on stateless components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // Prevents common typos
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': ['error', { skipUndeclared: true }],

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': 'error',

    // Enforce a consistent way of using JSX Fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // Enforce Rules of Hooks
    // https://reactjs.org/docs/hooks-rules.html#eslint-plugin
    'react-hooks/rules-of-hooks': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://reactjs.org/docs/hooks-rules.html#eslint-plugin
    'react-hooks/exhaustive-deps': 'warn',
  },
}
