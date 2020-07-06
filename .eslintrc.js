module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'prettier/prettier': 'error'
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from typescript-eslint/eslint-plugin
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect
      // the version of React to use
    }
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
};
