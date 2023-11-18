import React from 'react'
import PropTypes from 'prop-types'

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

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default BaseLayout
