const basis = require('./recommended');

module.exports = Object.assign( basis, {

    '@regru/prefer-early-return/prefer-early-return'                   : 'warn',
    '@regru/jquery-dollar-sign-reference/jquery-dollar-sign-reference' : 'warn',

    'compat/compat' : 'warn',

    'optimize-regex/optimize-regex' : 'warn',

    'promise/always-return'   : 'warn',
    'promise/no-return-wrap'  : 'warn',
    'promise/param-names'     : 'warn',
    'promise/catch-or-return' : ['warn', {
        terminationMethod : ['catch', 'fail'],
    }],
    'promise/no-native'              : 'off',
    'promise/no-nesting'             : 'warn',
    'promise/no-promise-in-callback' : 'warn',
    'promise/no-callback-in-promise' : 'warn',
    'promise/avoid-new'              : 'warn',
    'promise/no-new-statics'         : 'warn',
    'promise/no-return-in-finally'   : 'warn',
    'promise/valid-params'           : 'warn',

    // vue base
    'vue/comment-directive' : 'warn',
    'vue/jsx-uses-vars'     : 'warn',

    // vue essential
    'vue/no-async-in-computed-properties'        : 'warn',
    'vue/no-dupe-keys'                           : 'warn',
    'vue/no-duplicate-attributes'                : 'warn',
    'vue/no-parsing-error'                       : 'warn',
    'vue/no-reserved-keys'                       : 'warn',
    'vue/no-shared-component-data'               : 'warn',
    'vue/no-side-effects-in-computed-properties' : 'warn',
    'vue/no-template-key'                        : 'warn',
    'vue/no-textarea-mustache'                   : 'warn',
    'vue/no-unused-vars'                         : 'warn',
    'vue/require-component-is'                   : 'warn',
    'vue/require-render-return'                  : 'warn',
    'vue/require-v-for-key'                      : 'warn',
    'vue/require-valid-default-prop'             : 'warn',
    'vue/return-in-computed-property'            : 'warn',
    'vue/valid-template-root'                    : 'warn',
    'vue/valid-v-bind'                           : 'warn',
    'vue/valid-v-cloak'                          : 'warn',
    'vue/valid-v-else-if'                        : 'warn',
    'vue/valid-v-else'                           : 'warn',
    'vue/valid-v-for'                            : 'warn',
    'vue/valid-v-html'                           : 'warn',
    'vue/valid-v-if'                             : 'warn',
    'vue/valid-v-model'                          : 'warn',
    'vue/valid-v-on'                             : 'warn',
    'vue/valid-v-once'                           : 'warn',
    'vue/valid-v-pre'                            : 'warn',
    'vue/valid-v-show'                           : 'warn',
    'vue/valid-v-text'                           : 'warn',

    // vue strongly recommended
    'vue/attribute-hyphenation'          : 'warn',
    'vue/html-end-tags'                  : 'warn',
    'vue/html-indent'                    : ['warn', 4],
    'vue/html-self-closing'              : 'warn',
    'vue/max-attributes-per-line'        : 'warn',
    'vue/mustache-interpolation-spacing' : 'warn',
    'vue/name-property-casing'           : 'warn',
    'vue/no-multi-spaces'                : 'warn',
    'vue/require-default-prop'           : 'warn',
    'vue/require-prop-types'             : 'warn',
    'vue/v-bind-style'                   : 'warn',
    'vue/v-on-style'                     : 'warn',

    // vue recommended
    'vue/attributes-order'        : 'warn',
    'vue/html-quotes'             : 'warn',
    'vue/no-confusing-v-for-v-if' : 'warn',
    'vue/order-in-components'     : 'warn',
    'vue/this-in-template'        : 'warn',

    // native
    'valid-jsdoc' : ['warn', {
        requireReturnDescription : false,
    }],
} );
