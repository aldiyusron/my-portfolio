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
  while ((m = itemRe.exec(xml)) !== null) {
    itemBlocks.push(m[1])
  }

  return itemBlocks.map((block) => {
    const title = extractCdata(block, 'title')
    const link = extractCdata(block, 'link') || block.match(/<link>(.*?)<\/link>/)?.[1] || ''
    const pubDate = extractCdata(block, 'pubDate') || block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || ''
    const content = extractCdata(block, 'content:encoded')
    const description = extractCdata(block, 'description')
    const categories = extractAll(block, 'category')

    const rawText = stripHtml(content || description)
    const excerpt = rawText.slice(0, 200).trimEnd() + (rawText.length > 200 ? '…' : '')

    return { title, link, pubDate, excerpt, categories }
  })
}

export default async function handler(req, res) {
  try {
    const response = await fetch(MEDIUM_RSS, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)' },
    })

    if (!response.ok) {
      return res.status(502).json({ error: `Upstream returned ${response.status}` })
    }

    const xml = await response.text()
    const items = parseItems(xml)

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600')
    res.setHeader('Access-Control-Allow-Origin', '*')
    return res.json({ status: 'ok', items })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
