module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // https://github.com/kristerkari/stylelint-scss/issues/196#issuecomment-360921060
    'at-rule-no-unknown': null,
  },
}
