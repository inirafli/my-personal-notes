import React from 'react'
import { getArchivedNotes } from '../utils/local-data'

import SearchBar from './SearchBar'
import NoteList from './NoteList'

const ArchivedContent = () => (
  <main>
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <section className="search-bar">
        <SearchBar />
      </section>
      <NoteList getNotes={getArchivedNotes} />
    </section>
  </main>
)

export default ArchivedContent
