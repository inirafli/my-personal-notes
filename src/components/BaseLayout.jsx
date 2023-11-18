import React from 'react'
import AppBar from './AppBar'
import { useApp } from '../contexts/AppContext'

const BaseLayout = ({ children }) => {
  const { theme } = useApp()

  return (
    <div className="app-container" data-theme={theme}>
      <AppBar />
      {children}
    </div>
  )
}

export default BaseLayout
