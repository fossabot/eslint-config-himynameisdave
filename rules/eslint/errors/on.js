module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',
    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', {
      allowImplicit: true,
    }],
    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',
    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',
    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],
    // disallow use of console
    'no-console': 'error',
    // disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',
    // disallow control characters in regular expressions
    'no-control-regex': 'error',
    // disallow use of debugger
    'no-debugger': 'error',
    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',
    //  Don't duplicate conditions in if/else blocks
    //  https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-else-if.md
    'no-dupe-else-if': 'error',
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',
    // disallow a duplicate case label.
    'no-duplicate-case': 'error',
    // disallow empty statements
    'no-empty': 'error',
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',
    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',
    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
      ignoreJSX: 'all',
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],
    // disallow unnecessary semicolons
    'no-extra-semi': 'error',
    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',
    //  Don't reassign imports
    //  https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'error',
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',
    //  Disallow Number Literals That Lose Precision
    //  https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',
    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': 'error',
    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',
    //  Disallow returning values from Promise executor functions
    //  https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': 'off',
    // disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'warn',
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',
    //  Don't return from setters
    //  https://github.com/eslint/eslint/blob/master/docs/rules/no-setter-return.md
    'no-setter-return': 'error',
    // disallow sparse arrays
    'no-sparse-arrays': 'error',
    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'off',
    // Avoid code that looks like two expressions but is actually one
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',
    //  Disallow loops with a body that allows only one iteration
    //  https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': 'error',
    // disallow control flow statements in finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',
    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',
    //  Disallow use of optional chaining in contexts where the `undefined` value is not allowed
    //  https://github.com/eslint/eslint/blob/683ad00c41e1ae4d889deff82b2a94318e8c2129/lib/rules/no-unsafe-optional-chaining.js
    'no-unsafe-optional-chaining': 'error',
    //  Disallow Unused Private Class Members
    //  https://github.com/eslint/eslint/blob/main/lib/rules/no-unused-private-class-members.js
    'no-unused-private-class-members': 'error',
    //  Disallow useless backreferences in regular expressions
    //  https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-backreference.md
    'no-useless-backreference': 'error',
    // disallow comparisons with the value NaN
    'use-isnan': 'error',
    // [DEPRECATED] ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',
    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', {
      requireStringLiterals: true,
    }],
  },
};
