export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
    'stylelint-config-standard-scss',
  ],
  customSyntax: 'postcss-html',
  rules: {
    // 'string-quotes': 'single',  // 没有这一项规则会报错
    'color-hex-length': 'short',
  },
}
