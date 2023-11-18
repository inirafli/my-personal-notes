import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('id')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleLanguage = () => {
    const newLanguage = language === 'id' ? 'en' : 'id'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      setTheme('dark')
    }

    const storedLanguage = localStorage.getItem('language')
    if (storedLanguage) {
      setLanguage(storedLanguage)
    } else {
      setLanguage('id')
    }
  }, [])

  const contextValue = useMemo(() => ({
    theme, toggleTheme, language, toggleLanguage,
  }), [
    theme,
    language,
    toggleTheme,
    toggleLanguage,
  ])

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
