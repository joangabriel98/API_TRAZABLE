//   ╔═╗╔═╗╦  ╦╔╗╔╔╦╗┬─┐┌─┐
//   ║╣ ╚═╗║  ║║║║ ║ ├┬┘│
//  o╚═╝╚═╝╩═╝╩╝╚╝ ╩ ┴└─└─┘
// A set of basic code conventions (similar to a .jshintrc file) designed to
// encourage quality and consistency across the app's code base.
// These rules are checked against automatically any time you run `npm test` or `npm run test:eslint`.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


module.exports = {
  extends: 'standard',
  plugins: [
    'node'
  ],
  rules: {
    'prefer-template': 'error',
    'no-var': 'error',
    'no-console': ['error', { allow: ['warn', 'info', 'error']}],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxEOF': 0,
      'maxBOF': 0,
    }],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before',
      },
    }],
  }
}
