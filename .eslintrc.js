module.exports = {
    root: false,
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
        "semi": [2, "always"],
        "space-before-function-paren": [0, "always"], //函数定义时括号前面要不要有空格
        "no-undef": 1, //不能有未定义的变量
        "yoda": [0], //禁止尤达条件
        "indent": 0, //缩进风格
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}