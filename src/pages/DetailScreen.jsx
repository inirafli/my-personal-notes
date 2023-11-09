import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/local-data'

import AppBar from '../components/AppBar'
import DetailContent from '../components/DetailContent'
import ActionButton from '../components/ActionButton'

const DetailScreen = () => {
  const { id } = useParams()
  const note = getNote(id)

  const navigate = useNavigate()

  const handleDelete = () => {
    deleteNote(id)

    if (note.archived) {
      navigate('/archives')
    } else {
      navigate('/')
    }
  }

  const handleArchive = () => {
    archiveNote(id)
    navigate('/')
  }

  const handleUnarchive = () => {
    unarchiveNote(id)
    navigate('/archives')
  }

  return (
    <div className="app-container">
      <AppBar />
      <main>
        <section className="detail-page">
          <DetailContent note={note} />
          <ActionButton
            handleDelete={handleDelete}
            handleArchive={handleArchive}
            handleUnarchive={handleUnarchive}
            archived={note.archived}
          />
        </section>
      </main>
    </div>
  )
}

export default DetailScreen
