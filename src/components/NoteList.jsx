import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import NoteItem from './NoteItem'
import LoadingSpinner from './LoadingSpinner'
import { useApp } from '../contexts/AppContext'

const NoteList = ({ getNotes, searchTerm }) => {
  const [notes, setNotes] = useState([])
  const [isLoading, setLoading] = useState(true)
  const { language } = useApp()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNotes()
        if (!response.error) {
          setNotes(response.data)
        }
      } catch (error) {
        alert('Error fetching Notes: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [getNotes])

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className={filteredNotes.length > 0 ? 'notes-list' : 'notes-list-empty'}>
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <NoteItem key={note.id} note={note} />
            ))
          ) : (
            <p className="notes-list__empty">{language === 'id' ? 'Tidak ada catatan' : 'There are no Notes'}</p>
          )}
        </section>
      )}
    </>
  )
}

NoteList.propTypes = {
  getNotes: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

export default NoteList
