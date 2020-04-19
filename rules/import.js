module.exports = {
  extends: ['plugin:import/typescript'],
  plugins: [
    // https://github.com/benmosher/eslint-plugin-import
    'import',
  ],
  rules: {
    'import/first': 'error',

    'import/no-duplicates': 'error',

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],

    'import/newline-after-import': 'error',

    'import/no-absolute-path': 'error',

    'import/no-mutable-exports': 'error',

    'import/export': 'error',

    'import/no-useless-path-segments': ['error', { commonjs: true }],

    'import/no-self-import': 'error',

    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
}
