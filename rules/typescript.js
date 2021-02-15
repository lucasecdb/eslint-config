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
        // Prevent unused declared variables
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        'no-unused-vars': 'off',
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
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
        '@typescript-eslint/prefer-optional-chain': 'warn',

        // Enforce optional chaining over chaining AND (&&) operators
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        // Enforce nullish coalescing instead of short-circuiting (?? instead of &&)
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
        '@typescript-eslint/prefer-nullish-coalescing': [
          'warn',
          {
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: true,
            forceSuggestionFixer: false,
          },
        ],

        // Explicitly defines what a module scoped method returns
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Require a consistent naming convention
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'default',
            format: ['camelCase'],
          },

          {
            selector: 'variableLike',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },

          {
            selector: 'property',
            format: null,
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },

          {
            selector: 'enumMember',
            format: ['PascalCase', 'UPPER_CASE'],
          },

          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],

        // Enforces consistent usage of type imports
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: false,
          },
        ],
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
