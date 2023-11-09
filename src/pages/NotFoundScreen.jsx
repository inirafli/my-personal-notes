import React from 'react'

import AppBar from '../components/AppBar'

const NotFoundScreen = () => (
  <div className="app-container">
    <AppBar />
    <main>
      <section>
        <h2>404</h2>
        <p>Page not found</p>
      </section>
    </main>
  </div>
)

export default NotFoundScreen
