import path from 'node:path'

import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: path.resolve('src/components/'),
      $common: path.resolve('src/common/'),
      $assets: path.resolve('src/assets/'),
      $store: path.resolve('src/store/'),
    },
  },
  server: {
    port: 3000,
  },
}

export default config
