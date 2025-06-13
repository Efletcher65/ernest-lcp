// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://grahf0085.github.io',
  base: '/ernest-lcp',
  vite: {
    plugins: [tailwindcss()],
  },
})
