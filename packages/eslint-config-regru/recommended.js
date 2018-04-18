module.exports = {
    env : {
        browser : true,
        node    : true,
        es6     : true,
        jquery  : true,
    },
    parserOptions : {
        parser      : 'babel-eslint',
        ecmaVersion : 2017,
        sourceType  : 'module',
    },
    extends : [
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:promise/recommended',
    ],
    plugins : [
        'regru',
        'shopify',
        'compat',
        'promise',
        'optimize-regex',
    ],
    rules    : require('./rules/recomended'),
    settings : {
        polyfills : ['promises'],
    },
};
