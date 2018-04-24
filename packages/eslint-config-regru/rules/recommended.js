module.exports = {
    'indent' : [
        'error',
        4,
        {
            'SwitchCase' : 1,
        },
    ],
    'linebreak-style' : [
        'error',
        'unix',
    ],
    'quotes' : [
        'error',
        'single',
    ],
    'semi' : [
        'error',
        'always',
    ],
    'comma-dangle' : [
        'error',
        'always-multiline',
    ],
    'no-console'           : 0,
    'no-debugger'          : 0,
    'block-scoped-var'     : 'error',
    'no-use-before-define' : ['error', {
        'functions' : false,
        'classes'   : false,
    }],
    'complexity'        : ['error', 20],
    'no-else-return'    : 'error',
    'no-empty-function' : [
        'warn',
    ],
    'no-labels'           : 'error',
    'no-floating-decimal' : 'error',
    'no-global-assign'    : 'error',
    'no-loop-func'        : 'error',
    'no-magic-numbers'    : ['error', {
        'detectObjects' : true,
        'ignore'        : [-1, 0, 1, 2, 3, 4, 5, 10, 20, 24, 50, 60, 100, 400, 500, 1000, 200, 404], // eslint-disable-line no-magic-numbers
    }],
    'no-multi-spaces' : [
        'error',
        {
            'exceptions' : {
                'Property'             : true,
                'VariableDeclarator'   : true,
                'AssignmentExpression' : true,
            },
        },
    ],
    'no-multi-str'      : 'error',
    'no-new-wrappers'   : 'error',
    'no-new'            : 'error',
    'no-param-reassign' : ['error', { 'props': false }],
    'no-return-assign'  : ['error', 'always'],
    'no-self-compare'   : 'error',
    'no-useless-concat' : 'error',

    'vars-on-top' : 'error',
    'yoda'        : ['error', 'never', { 'onlyEquality': true }],

    'func-call-spacing'           : ['error', 'never'],
    'space-infix-ops'             : 'error',
    'space-before-function-paren' : ['error', 'never'],
    'space-before-blocks'         : [
        'error',
        {
            'functions' : 'always',
            'keywords'  : 'always',
            'classes'   : 'always',
        },
    ],
    'regru/no-space-in-parens' : [
        'error',
        'always',
        {
            'exceptions' : ['(STRING)'],
        },
    ],
    'space-unary-ops' : [
        2,
        {
            'words'    : true,
            'nonwords' : false,
        },
    ],
    'object-curly-spacing' : ['error', 'always',
        {
            'arraysInObjects'  : true,
            'objectsInObjects' : true,
        },
    ],
    'max-params'                    : ['error', 4],
    'no-whitespace-before-property' : 'error',
    'key-spacing'                   : [
        'error',
        {
            'singleLine' : {
                'beforeColon' : false,
                'afterColon'  : true,
            },
            'multiLine' : {
                'beforeColon' : true,
                'afterColon'  : true,
                'align'       : 'colon',
                'mode'        : 'strict',
            },
        },
    ],
    'keyword-spacing' : ['error', { 'before': true }],
    'quote-props'     : ['error', 'as-needed'],
    'max-len'         : [
        2,
        120,
        {
            'ignoreUrls'             : true,
            'ignoreTrailingComments' : true,
            'ignoreRegExpLiterals'   : true,
        },
    ],
    'no-inner-declarations'        : 1,
    'one-var-declaration-per-line' : ['error', 'always'],
    'camelcase'                    : ['warn', { 'properties': 'never' }],
    'one-var'                      : ['warn', 'never'],
    'newline-after-var'            : ['error', 'always'],
    'newline-before-return'        : 'error',
    'object-curly-newline'         : [
        'error',
        {
            'ObjectExpression' : {
                'consistent'    : true,
                'minProperties' : 2,
            },
            'ObjectPattern' : {
                'consistent' : true,
            },
            'ImportDeclaration' : {
                'consistent' : true,
            },
            'ExportDeclaration' : {
                'multiline' : true,
            },
        },
    ],
    'object-property-newline' : ['error'],
    'operator-linebreak'      : ['error', 'before'],
    'brace-style'             : ['error', 'stroustrup'],
    'lines-around-directive'  : ['error', 'always'],
    'lines-around-comment'    : ['error',
        {
            'beforeBlockComment' : true,
            'beforeLineComment'  : true,
        },
    ],
    'spaced-comment' : ['error', 'always',
        {
            'block'   : { 'balanced': true },
            'markers' : ['global'],
        },
    ],
    'curly'                                : 'error',
    'semi-spacing'                         : 'error',
    'shopify/prefer-early-return'          : 'error',
    'shopify/jquery-dollar-sign-reference' : 'warn',
    'compat/compat'                        : 'error',

    'promise/catch-or-return' : ['error', {
        terminationMethod : ['catch', 'fail'],
    }],

    'vue/html-indent' : ['error', 4]
};
