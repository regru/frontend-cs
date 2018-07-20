module.exports = {
    '@regru/prefer-early-return/prefer-early-return'                   : 'error',
    '@regru/jquery-dollar-sign-reference/jquery-dollar-sign-reference' : 'warn',

    'compat/compat' : 'error',

    'promise/catch-or-return' : ['error', {
        terminationMethod : ['catch', 'fail'],
    }],

    'vue/html-indent' : ['error', 4],
    
    'jest/consistent-test-it': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/no-large-snapshots': ['error', { 
        maxSize: 1500,
    }],
};
