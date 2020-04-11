module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },

      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'local',
            args: 'all',
            argsIgnorePattern: '^_+$',
            varsIgnorePattern: '^_+$',
            ignoreRestSiblings: true,
            caughtErrors: 'all',
          },
        ],

        // Enforce optional chaining over chaining AND (&&) operators
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        // Enforce nullish coalescing instead of short-circuiting (?? instead of &&)
        '@typescript-eslint/prefer-nullish-coalescing': [
          'warn',
          {
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: true,
            forceSuggestionFixer: false,
          },
        ],

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
      },
    },
  ],
}
