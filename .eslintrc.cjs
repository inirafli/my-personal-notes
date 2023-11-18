module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-restricted-globals': 0,
    'linebreak-style': 0,
    'new-cap': 0,
    'object-curly-spacing': 0,
    'max-len': 'off',
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/button-has-type': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-quotes': 0,
    'no-alert': 0,
    'no-nested-ternary': 0,
  },
};
