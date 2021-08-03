module.exports = {
  extends: ['prettier'],
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false
  },
  plugins: ['import', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '/']
      }
    }
  },
  rules: {
    semi: [2, 'never'],
    'no-console': 'error',
    'import/no-named-as-default': 0,
    'no-return-await': 2,
    'prettier/prettier': 'error'
  }
}
