module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ], 
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off',//关闭未定义检查
    'camelcase': 'off',//关闭强制驼峰检查
    'eqeqeq': 'off',//关闭全等检查
    "object-curly-spacing": 'off',
    "padded-blocks": 'off',
    "eol-last": 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
