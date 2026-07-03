// Post-build prerender: snapshot the fully rendered SPA into dist/index.html
// so crawlers receive the complete page content without executing JS.
// The client still runs createRoot and re-renders over the snapshot.
import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { writeFile } from 'node:fs/promises'

// One selector per data-driven section; if any fails to appear the
// build fails rather than silently shipping an empty-shell snapshot.
const REQUIRED_CONTENT = [
  '.swiper-slide',    // Services carousel
  '.founder-card',    // Team (Leadership tab)
  '.software-item',   // Software
  '.news-item',       // News
  '.pubs-article',    // Publications / AHRQ reports
]

const server = await preview({ preview: { port: 4173, strictPort: false } })
const url = server.resolvedUrls.local[0]
let browser

try {
  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })

  for (const selector of REQUIRED_CONTENT) {
    await page.waitForSelector(selector, { timeout: 15000 })
  }

  const html = await page.content()
  await writeFile('dist/index.html', html)
  console.log(`Prerendered dist/index.html (${(html.length / 1024).toFixed(0)} kB)`)
} finally {
  await browser?.close()
  server.httpServer.close()
}
