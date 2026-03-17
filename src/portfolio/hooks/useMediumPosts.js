import { useEffect, useState } from 'react'

const MEDIUM_RSS = 'https://medium.com/feed/@aldiyusron'
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS)}`

function stripHtml(html) {
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function transformPost(item) {
  const fullText = stripHtml(item.description)
  const excerpt = fullText.replace(/\s+/g, ' ').trim().slice(0, 200).trimEnd() + '…'

  return {
    title: item.title,
    excerpt,
    date: formatDate(item.pubDate),
    tags: item.categories.slice(0, 3),
    href: item.link,
  }
}

export function useMediumPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(RSS2JSON_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 'ok') throw new Error('Feed unavailable')
        setPosts(data.items.map(transformPost))
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading, error }
}
