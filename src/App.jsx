import { useEffect } from 'react'
import { I18nProvider, getLocaleFromPath } from './i18n/context'
import Portfolio from './Portfolio'

export default function App() {
  const locale = getLocaleFromPath(window.location.pathname)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <I18nProvider locale={locale}>
      <Portfolio />
    </I18nProvider>
  )
}
