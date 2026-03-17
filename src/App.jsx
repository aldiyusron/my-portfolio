import { useEffect } from 'react'
import Portfolio from './Portfolio'
import { getPortfolioContent } from './portfolio/data'

function getLocaleFromPath(pathname) {
  return pathname === '/id' || pathname.startsWith('/id/') ? 'id' : 'en'
}

export default function App() {
  const locale = getLocaleFromPath(window.location.pathname)
  const content = getPortfolioContent(locale)
  const localeSwitch = {
    active: locale,
    options: [
      { locale: 'en', label: 'EN', href: '/' },
      { locale: 'id', label: 'ID', href: '/id' },
    ],
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return <Portfolio content={content} localeSwitch={localeSwitch} />
}
