import { createContext, useContext } from 'react'
import en from './locales/en'
import id from './locales/id'

const locales = { en, id }

export const LOCALE_OPTIONS = [
  { locale: 'en', label: 'EN', href: '/' },
  { locale: 'id', label: 'ID', href: '/id' },
]

export function getLocaleFromPath(pathname) {
  return pathname === '/id' || pathname.startsWith('/id/') ? 'id' : 'en'
}

export function getTranslations(locale) {
  return locales[locale] ?? locales.en
}

const I18nContext = createContext(null)

export function I18nProvider({ locale, children }) {
  const t = getTranslations(locale)
  const localeSwitch = {
    active: locale,
    options: LOCALE_OPTIONS,
  }

  return <I18nContext.Provider value={{ locale, t, localeSwitch }}>{children}</I18nContext.Provider>
}

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useTranslation must be used inside I18nProvider')
  return ctx
}
