module.exports = {
  parser: 'vue-eslint-parser',
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:prettier/recommended'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'space-before-function-paren': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // vue3 specific
    'vue/no-multiple-template-root': 'off',

    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  }
}
