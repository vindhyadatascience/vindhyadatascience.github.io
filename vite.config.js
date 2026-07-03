import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// Sitemap: hash-fragment section anchors (/#services) are treated by
// crawlers as duplicates of /, so only real URLs are listed here.
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://vindhyadatascience.com',
      // Static pages under public/ (e.g. /genefox/privacy) are
      // auto-discovered from dist/, so no dynamicRoutes needed.
      exclude: ['/404'],
      changefreq: { '/': 'monthly', '/genefox/privacy': 'yearly' },
      priority: { '/': 1.0, '/genefox/privacy': 0.3 },
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