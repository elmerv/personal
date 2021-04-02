const { ESLint } = require("eslint");

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: babel-eslint,
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
