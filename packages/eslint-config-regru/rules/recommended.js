module.exports = {
    'shopify/prefer-early-return'          : 'error',
    'shopify/jquery-dollar-sign-reference' : 'warn',
    'compat/compat'                        : 'error',

    'promise/catch-or-return' : ['error', {
        terminationMethod : ['catch', 'fail'],
    }],

    'vue/html-indent' : ['error', 4],
};
