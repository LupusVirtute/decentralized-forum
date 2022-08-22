module.exports = {
  ...require('@mnigos/prettier-config'),
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}
