module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'airbnb',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
  },
  plugins: ['react', 'prettier', 'react-hooks', 'eslint-plugin-prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    // 'no-console': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
