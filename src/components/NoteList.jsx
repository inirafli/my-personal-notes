import React from 'react'

import NoteItem from './NoteItem'

const NoteList = ({ getNotes }) => {
  const notes = getNotes()

  return (
    <section className={notes.length > 0 ? 'notes-list' : 'notes-list-empty'}>
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))
      ) : (
        <p className="notes-list__empty">Tidak ada catatan</p>
      )}
    </section>
  )
}

export default NoteList
