module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'globals': {
    // Global tree-sitter functions
    'alias': 'readonly',
    'choice': 'readonly',
    'field': 'readonly',
    'grammar': 'readonly',
    'optional': 'readonly',
    'prec': 'readonly',
    'repeat': 'readonly',
    'repeat1': 'readonly',
    'seq': 'readonly',
    'token': 'readonly',
  },
  'rules': {
    'array-bracket-spacing': ['error'],
    'arrow-spacing': ['error'],
    'block-spacing': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error'],
    'func-call-spacing': ['error'],
    'implicit-arrow-linebreak': ['error'],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['warn', { 'code': 100, 'ignoreUrls': true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': ['error'],
    'no-trailing-spaces': ['error'],
    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '$' }],
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'never'],
    'space-before-blocks': ['error'],
    'space-in-parens': ['error'],
  },
}