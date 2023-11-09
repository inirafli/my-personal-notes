import React from 'react'

import NoteItem from './NoteItem'

const NoteList = ({ getNotes, searchTerm }) => {
  const notes = getNotes()

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

export default NoteList
