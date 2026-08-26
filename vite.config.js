import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import fs from 'node:fs'
import path from 'node:path'

// Static pages under public/ are plain directories with an index.html, and
// GitHub Pages serves those for a trailing-slash URL. Vite's dev and preview
// servers instead hand such a URL to the SPA fallback, so React Router matches
// nothing and renders its 404 over a page that exists on disk. Rewrite the URL
// to the real file first so local runs match production.
function staticDirectoryIndex(roots) {
  const middleware = (req, res, next) => {
    const pathname = (req.url || '').split(/[?#]/)[0]
    if (pathname.endsWith('/')) {
      for (const root of roots) {
        const dir = path.resolve(root)
        const file = path.resolve(dir, '.' + pathname, 'index.html')
        if (file.startsWith(dir + path.sep) && fs.existsSync(file)) {
          req.url = pathname + 'index.html'
          break
        }
      }
    }
    next()
  }
  return {
    name: 'static-directory-index',
    configureServer: (server) => { server.middlewares.use(middleware) },
    configurePreviewServer: (server) => { server.middlewares.use(middleware) },
  }
}

// Sitemap: hash-fragment section anchors (/#services) are treated by
// crawlers as duplicates of /, so only real URLs are listed here.
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    staticDirectoryIndex(['public', 'dist']),
    Sitemap({
      hostname: 'https://vindhyadatascience.com',
      // Static pages under public/ (e.g. /genefox/privacy) are
      // auto-discovered from dist/, so no dynamicRoutes needed.
      exclude: ['/404'],
      changefreq: { '/': 'monthly', '/articles/vmup-tui': 'yearly', '/genefox/privacy': 'yearly' },
      priority: { '/': 1.0, '/articles/vmup-tui': 0.8, '/genefox/privacy': 0.3 },
    }),
  ],
  server: {
    host: true,
    port: 8080,
    watch: {
      usePolling: true
    }
  }
})