import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// Define dynamic routes for SEO (sitemap.xml generation)
// Add new sections here
const pages = [
  'services',
  'team',
  'news',
  'pubs',
  'ahrq-reports'
]
const dynamicRoutes = pages.map(page => `/#${page}`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://vindhyadatascience.com',
      dynamicRoutes
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