import React from 'react'
import { useParams } from 'react-router-dom'
import { getNote } from '../../utils/local-data'

import AppBar from '../AppBar'
import DetailContent from './DetailContent'
import ActionButton from './ActionButton'

const DetailScreen = () => {
  const { id } = useParams()
  const note = getNote(id)

  return (
    <div className="app-container">
      <AppBar />
      <main>
        <section className="detail-page">
          <DetailContent note={note} />
          <ActionButton />
        </section>
      </main>
    </div>
  )
}

export default DetailScreen
