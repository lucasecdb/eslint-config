module.exports = {
  extends: [
    './rules/core.js',
    './rules/import.js',
    './rules/prettier.js',
    './rules/typescript.js',
    './rules/react.js',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
}
