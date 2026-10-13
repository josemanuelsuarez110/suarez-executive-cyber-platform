'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Lang = 'en' | 'es'

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {}
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'en' || saved === 'es') {
      setLangState(saved)
      document.documentElement.lang = saved
      return
    }
    const browser = navigator.language.toLowerCase()
    const detected: Lang = browser.startsWith('es') ? 'es' : 'en'
    setLangState(detected)
    document.documentElement.lang = detected
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
    document.documentElement.lang = l
  }

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en')

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
