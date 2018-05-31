module.exports = {
    env : {
        browser : true,
        node    : true,
        es6     : true,
        jquery  : true,
    },
    parserOptions : {
        parser      : 'babel-eslint',
        ecmaVersion : 2017, // eslint-disable-line no-magic-numbers
        sourceType  : 'module',
    },
    extends : [
        'eslint:recommended',
        'plugin:vue/recommended',
        '@regru/regru-light',
    ],
    plugins : [
        'regru',
        'vue',
        'promise',
        'compat',
        '@regru/jquery-dollar-sign-reference',
        '@regru/prefer-early-return',
    ],
    rules : require('./rules/warnings'),
};
