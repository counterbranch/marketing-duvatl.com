import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * Preloads the Latin subsets of the two web fonts on the built page.
 *
 * Fontsource's @font-face rules only start a download once the stylesheet has
 * parsed and text needs the face, which is after first paint, so the heading
 * would paint in a fallback and then reflow. Preloading starts both downloads
 * while the HTML is still parsing.
 */
function preloadFonts(files: RegExp[]): Plugin {
  let base = '/'
  return {
    name: 'preload-fonts',
    apply: 'build',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        if (!ctx.bundle) return
        return Object.keys(ctx.bundle)
          .filter((file) => files.some((pattern) => pattern.test(file)))
          .map((file) => ({
            tag: 'link',
            attrs: {
              rel: 'preload',
              as: 'font',
              type: 'font/woff2',
              href: `${base}${file}`,
              crossorigin: '',
            },
            injectTo: 'head' as const,
          }))
      },
    },
  }
}

/**
 * Where the site is served from. The Pages workflow sets BASE_PATH from
 * actions/configure-pages: the repository's subpath on github.io, or `/` once
 * a custom domain serves the site from its root. Local builds use `/`.
 * scripts/prerender.mjs reads the same variable.
 */
const base = process.env.BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    preloadFonts([/oswald-latin-wght-normal-[\w-]+\.woff2$/, /inter-latin-wght-normal-[\w-]+\.woff2$/]),
  ],
})
