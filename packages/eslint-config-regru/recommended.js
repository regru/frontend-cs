module.exports = {
    env : {
        browser : true,
        node    : true,
        es6     : true,
        jquery  : true,
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
        'optimize-regex',
    ],
    rules    : require('./rules/recomended'),
    settings : {
        polyfills : ['promises'],
    },
};
