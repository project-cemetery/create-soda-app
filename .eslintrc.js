module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': 1,
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
  },
}
