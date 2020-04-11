module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],

  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'latest',
    },
  },

  rules: {
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/prop-types': ['error', { skipUndeclared: true }],

    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': ['error', 'syntax'],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
