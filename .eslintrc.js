module.exports = {
  extends: ['react-app', 'prettier'],
  root: true,
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true
    }
  },
  env: {
    node: true
  },
  parser: '@babel/eslint-parser',
  plugins: ['import', 'babel', 'react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: '17'
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '/']
      }
    }
  },
  rules: {
    semi: [2, 'never'],
    'no-console': 'error',
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'no-return-await': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 0,
    'import/no-anonymous-default-export': 0,
    'prettier/prettier': 'error'
  }
}
