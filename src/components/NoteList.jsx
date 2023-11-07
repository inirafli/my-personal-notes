import React from 'react'
import { getActiveNotes } from '../utils/local-data'

import NoteItem from './NoteItem'

const NoteList = () => {
  const activeNotes = getActiveNotes()

  return (
    <section className="notes-list">
      {activeNotes.length > 0 ? (
        activeNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))
      ) : (
        <p>Tidak ada catatan</p>
      )}
    </section>
  )
}

export default NoteList
