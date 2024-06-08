import process from 'node:process'

import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE,
  integrations: [
    UnoCSS({
      injectReset: '@unocss/reset/tailwind-compat.css',
    }),
    vue(),
  ],
  output: 'static',
})
