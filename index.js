module.exports = {
    globals: {
        MyGlobal: true
    },
    "parser": "babel-eslint",
    'plugins': [
        'react',
    ],
    'rules': {
        'semi': [1, 'always'],
        'indent': [1, 4, { "SwitchCase": 1 }],
        'no-extra-semi': 'warn',
        'no-var': 'warn',
        'prefer-template': 'warn',
        'eqeqeq': 'warn',
        'jsx-quotes': ["warn", "double", { "allowTemplateLiterals": true }],
        'no-undefined': 'warn',
        'object-curly-spacing': 'warn',
        'array-bracket-spacing': 'warn',
        'computed-property-spacing': 'warn',
        'semi-spacing': 'warn',
        'no-labels': 'warn',
        'wrap-regex': 'warn',
        'semi-style': 'warn',
        'operator-linebreak': 'warn',
        'no-multiple-empty-lines': ['warn', { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
        'no-constant-condition': 'warn',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-empty': 'warn',
        'no-ex-assign': 'warn',
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
            },
        ],
        'arrow-spacing': ['warn', { before: true, after: true }],
        'no-dupe-class-members': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-constructor': 'warn',
        'prefer-arrow-callback': [
            'warn',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        'prefer-const': 'warn',
        'prefer-rest-params': 'warn',
        'template-curly-spacing': 'warn',
        'block-spacing': 'warn',
        'camelcase': 'warn',
        'space-infix-ops': 'warn',
        'no-else-return': 'warn',
        'arrow-parens': ['warn', 'as-needed'],
        "switch-colon-spacing": ["warn", {"after": false, "before": false}],
        'padded-blocks': ["warn", {"blocks": "never", "classes": "always"}],
        'max-len': [1, {
            code: 110,
            ignoreRegExpLiterals: true,
            ignoreUrls: true,
            ignoreTemplateLiterals: true,
        }],
        "newline-before-return": "warn",
        "lines-between-class-members": ["error", "always"],
        'no-duplicate-imports': 'warn',
        'no-useless-rename': 'warn',
        'prefer-destructuring': 'warn',
        'prefer-numeric-literals': 'warn',
        'no-mixed-spaces-and-tabs': 'warn',
        "react/boolean-prop-naming": ["warn", {
            "rule": "^(is|has|can|should)[A-Z]([A-Za-z0-9]?)+",
            "message": "Prop ({{ propName }}) should start with 'is', 'has', 'can' or 'should'. Example: 'isValidated' or 'hasPromoCode'."
        }],
        "react/prop-types": ["warn"],
        "react/button-has-type": ["error"],
        "react/require-default-props": [
            "error"
        ],
          "react/default-props-match-prop-types": [
            "error"
        ],
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-props-no-multi-spaces": "warn",
        "react/jsx-wrap-multilines": [
            "warn",
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "ignore"
            }
        ],
        "react/jsx-tag-spacing": [
            "warn",
            {
                "beforeSelfClosing": "always"
            }   
        ],
  }
};