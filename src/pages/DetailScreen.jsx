import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  getNote, archiveNote, unarchiveNote, deleteNote,
} from '../utils/network-data'

import DetailContent from '../components/DetailContent'
import ActionButton from '../components/ActionButton'
import BaseLayout from '../components/BaseLayout'
import LoadingSpinner from '../components/LoadingSpinner'

const DetailScreen = () => {
  const { id } = useParams()
  const [note, setNote] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const noteResponse = await getNote(id)
        if (!noteResponse.error) {
          setNote(noteResponse.data)
        } else {
          navigate('/not-found')
        }
      } catch (error) {
        alert('Error fetching Note: ', error)
      } finally {
        setLoading(false)
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
    <BaseLayout>
      <main>
        {isLoading ? (
          <LoadingSpinner /> // Display loading spinner while fetching data
        ) : (
          <section className="detail-page">
            <DetailContent note={note} />
            <ActionButton
              handleDelete={handleDelete}
              handleArchive={handleArchive}
              handleUnarchive={handleUnarchive}
              archived={note && note.archived}
            />
          </section>
        )}
      </main>
    </BaseLayout>
  )
}

export default DetailScreen
