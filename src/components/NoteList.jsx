import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import NoteItem from './NoteItem'

const NoteList = ({ getNotes, searchTerm }) => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNotes()
        if (!response.error) {
          setNotes(response.data)
        }
      } catch (error) {
        alert('Error fetching Notes: ', error)
      }
    }

    fetchData()
  }, [getNotes])

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <section className={filteredNotes.length > 0 ? 'notes-list' : 'notes-list-empty'}>
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))
      ) : (
        <p className="notes-list__empty">Tidak ada catatan</p>
      )}
    </section>
  )
}

NoteList.propTypes = {
  getNotes: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

export default NoteList
