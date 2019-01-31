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
    extends : [ 'eslint:recommended' ],
    plugins : [
        'regru',
        '@regru/one-var',
    ],
    rules : require('./rules'),
};
