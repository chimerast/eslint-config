module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'eqeqeq': ['error', 'allow-null'], // eslint-disable-line prettier/prettier
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // eslint-disable-line
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // eslint-disable-line
    'no-restricted-syntax': ['error', 'TSEnumDeclaration', 'ForInStatement', 'ForOfStatement', 'LabeledStatement', 'WithStatement'],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'unused-imports/no-unused-imports-ts': 'warn',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal'], ['index', 'parent', 'sibling']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 140,
        singleQuote: true,
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
    '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: false, allowNumber: false, allowNullableObject: false }],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
