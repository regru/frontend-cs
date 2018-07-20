module.exports = {
    env : {
        browser : true,
        node    : true,
        es6     : true,
        jquery  : true,
        'jest/globals': true,
    },
    parserOptions : {
        parser      : 'babel-eslint',
        ecmaVersion : 2017, // eslint-disable-line no-magic-numbers
        sourceType  : 'module',
    },
    extends : [
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:promise/recommended',
        'plugin:jest/recommended',
        '@regru/regru-light',
    ],
    plugins : [
        'regru',
        'compat',
        'promise',
        'jest',
        '@regru/jquery-dollar-sign-reference',
        '@regru/prefer-early-return',
    ],
    rules    : require('./rules/recommended'),
    settings : {
        polyfills : ['promises'],
    },
};
