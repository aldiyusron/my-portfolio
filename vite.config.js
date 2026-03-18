import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const MEDIUM_RSS = 'https://medium.com/feed/@aldiyusron'

function extractCdata(xml, tag) {
  const re = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))</${tag}>`)
  const m = xml.match(re)
  return m ? (m[1] ?? m[2] ?? '').trim() : ''
}

function extractAll(xml, tag) {
  const re = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))</${tag}>`, 'g')
  const results = []
  let m
  while ((m = re.exec(xml)) !== null) {
    results.push((m[1] ?? m[2] ?? '').trim())
  }
  return results
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function parseItems(xml) {
  const itemBlocks = []
  const itemRe = /<item>([\s\S]*?)<\/item>/g
  let m
  while ((m = itemRe.exec(xml)) !== null) itemBlocks.push(m[1])

  return itemBlocks.map((block) => {
    const title = extractCdata(block, 'title')
    const link = block.match(/<link>(.*?)<\/link>/)?.[1] || extractCdata(block, 'link')
    const pubDate = block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''
    const content = extractCdata(block, 'content:encoded')
    const description = extractCdata(block, 'description')
    const categories = extractAll(block, 'category')
    const rawText = stripHtml(content || description)
    const excerpt = rawText.slice(0, 200).trimEnd() + (rawText.length > 200 ? '…' : '')
    return { title, link, pubDate, excerpt, categories }
  })
}

function mediumPostsDevPlugin() {
  return {
    name: 'medium-posts-dev',
    configureServer(server) {
      // Use a non-async handler so Connect sees a synchronous return (no next() call)
      // which prevents Vite's own module-transform middleware from also firing.
      server.middlewares.use((req, res, next) => {
        if (req.url !== '/api/medium-posts') return next()

        fetch(MEDIUM_RSS, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)' } })
          .then((r) => {
            if (!r.ok) throw new Error(`Upstream ${r.status}`)
            return r.text()
          })
          .then((xml) => {
            const items = parseItems(xml)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ status: 'ok', items }))
          })
          .catch((err) => {
            if (!res.headersSent) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: err.message }))
            }
          })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    fs: {
      // Prevent Vite from serving api/ files as JS modules
      deny: ['api'],
    },
  },
  plugins: [react(), mediumPostsDevPlugin()],
})
