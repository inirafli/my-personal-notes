import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  getNote, archiveNote, unarchiveNote, deleteNote,
} from '../utils/network-data'

import AppBar from '../components/AppBar'
import DetailContent from '../components/DetailContent'
import ActionButton from '../components/ActionButton'

const DetailScreen = () => {
  const { id } = useParams()
  const [note, setNote] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchNote = async () => {
      const noteResponse = await getNote(id)
      if (!noteResponse.error) {
        setNote(noteResponse.data)
      } else {
        navigate('/not-found')
      }
    }

    fetchNote()
  }, [id, navigate])

  const handleDelete = async () => {
    await deleteNote(id)

    if (note && note.archived) {
      navigate('/archives')
    } else {
      navigate('/')
    }
  }

  const handleArchive = async () => {
    await archiveNote(id)
    navigate('/')
  }

  const handleUnarchive = async () => {
    await unarchiveNote(id)
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
            archived={note && note.archived}
          />
        </section>
      </main>
    </div>
  )
}

export default DetailScreen
