import React from 'react'

import AppBar from '../AppBar'
import DetailContent from './DetailContent'
import ActionButton from './ActionButton'

const DetailScreen = () => (
  <div className="app-container">
    <AppBar />
    <main>
      <section className="detail-page">
        <DetailContent />
        <ActionButton />
      </section>
    </main>
  </div>
)

export default DetailScreen
