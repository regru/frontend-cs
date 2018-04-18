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
    extends : [ 'eslint:recommended' ],
    plugins : [
        'regru',
        'vue',
        'promise',
        'shopify',
        'compat',
        'optimize-regex',
    ],
    rules : require('./rules/warnings'),
};
