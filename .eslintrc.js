module.exports = {
  extends: [
    'codingitwrong',
  ],
  rules: {
    indent: ["error", 2]
  },
  parser: 'babel-eslint',
  plugins: [
    'cypress',
    'jest',
    'react'
  ],
  env: {
    'browser': true,
    'es6': true,
    'jest/globals': true,
    'cypress/globals': true
  },
};