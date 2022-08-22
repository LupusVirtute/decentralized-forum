module.exports = {
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['@mnigos/eslint-config'],
}
