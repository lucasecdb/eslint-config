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

        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/naming-convention': 'warn',
      },
    },
    {
      // disable import rules for declaration files as they
      // may be false-negatives when you have multiple `declare`
      // blocks in the same file.
      files: ['*.d.ts'],
      rules: {
        'import/order': 'off',
        'import/no-duplicates': 'off',
        'import/export': 'off',
      },
    },
  ],
}
