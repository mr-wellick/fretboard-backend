module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'no-console': 'off',
  },
};
