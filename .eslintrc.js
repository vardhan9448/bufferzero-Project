module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  // eslint-disable-next-line no-dupe-keys
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react', 'import', 'jsx-a11y', 'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': 0,
    'linebreak-style': 0,
    indent: 'off',
    'react/jsx-indent': ['error', 4],
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'arrow-body-style': 0,
  },
};
