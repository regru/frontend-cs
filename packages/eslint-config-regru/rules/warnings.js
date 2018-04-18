const basis = require('./recomended');

module.exports = Object.assign( basis, {

    'shopify/prefer-early-return'          : 'warn',
    'shopify/jquery-dollar-sign-reference' : 'warn',

    'compat/compat' : 'warn',

    'optimize-regex/optimize-regex' : 'warn',

    'promise/always-return'          : 'warn',
    'promise/no-return-wrap'         : 'warn',
    'promise/param-names'            : 'warn',
    'promise/catch-or-return'        : 'warn',
    'promise/no-native'              : 'off',
    'promise/no-nesting'             : 'warn',
    'promise/no-promise-in-callback' : 'warn',
    'promise/no-callback-in-promise' : 'warn',
    'promise/avoid-new'              : 'warn',
    'promise/no-new-statics'         : 'warn',
    'promise/no-return-in-finally'   : 'warn',
    'promise/valid-params'           : 'warn',

    'vue/no-parsing-error' : 1,

    'vue/valid-template-root' : 1,
    'vue/valid-v-bind'        : 1,
    'vue/valid-v-cloak'       : 1,
    'vue/valid-v-else-if'     : 1,
    'vue/valid-v-else'        : 1,
    'vue/valid-v-for'         : 1,
    'vue/valid-v-html'        : 1,
    'vue/valid-v-if'          : 1,
    'vue/valid-v-model'       : 1,
    'vue/valid-v-on'          : 1,
    'vue/valid-v-once'        : 1,
    'vue/valid-v-pre'         : 1,
    'vue/valid-v-show'        : 1,
    'vue/valid-v-text'        : 1,

    'vue/html-end-tags'           : 1,
    'vue/no-confusing-v-for-v-if' : 1,
    'vue/no-textarea-mustache'    : 1,
    'vue/require-component-is'    : 1,
    'vue/require-v-for-key'       : 1,

    'vue/attribute-hyphenation'          : 1,
    'vue/html-self-closing'              : 1,
    'vue/mustache-interpolation-spacing' : 1,
    'vue/name-property-casing'           : 1,
    'vue/no-multi-spaces'                : 1,
    'vue/v-bind-style'                   : 1,
    'vue/v-on-style'                     : 1,

    'vue/jsx-uses-vars' : 1,
} );
