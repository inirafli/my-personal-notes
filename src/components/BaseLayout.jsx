import React from 'react'
import AppBar from './AppBar'
import { useTheme } from '../contexts/ThemeContext'

const BaseLayout = ({ children }) => {
  const { theme } = useTheme()

  return (
    <div className="app-container" data-theme={theme}>
      <AppBar />
      {children}
    </div>
  )
}

export default BaseLayout
