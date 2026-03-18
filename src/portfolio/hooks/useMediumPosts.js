import { useEffect, useState } from 'react'

const API_URL = '/api/medium-posts'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function transformPost(item) {
  return {
    title: item.title,
    excerpt: item.excerpt,
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
    fetch(API_URL)
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
