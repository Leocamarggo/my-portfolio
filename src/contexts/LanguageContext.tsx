import React, { createContext, useContext, useState } from 'react'
import enUS from '../locales/en-US'
import ptBR from '../locales/pt-BR'

type Language = 'en-US' | 'pt-BR'
type Translations = typeof enUS

interface ILanguageContext {
  t: Translations
  language: Language
  toggleLanguage: () => void
}

const locales: Record<Language, Translations> = {
  'en-US': enUS,
  'pt-BR': ptBR,
}

const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const getSavedLanguage = (): Language => {
    const saved = localStorage.getItem('portfolio-lang')
    return saved === 'pt-BR' ? 'pt-BR' : 'en-US'
  }

  const [language, setLanguage] = useState<Language>(getSavedLanguage)

  const toggleLanguage = () => {
    const next: Language = language === 'en-US' ? 'pt-BR' : 'en-US'
    setLanguage(next)
    localStorage.setItem('portfolio-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ t: locales[language], language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
