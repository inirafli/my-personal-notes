import React from 'react'

import SearchBar from './SearchBar'
import NoteList from './NoteList'
import AddButton from './AddButton'

const HomeContent = () => (
  <main>
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <section className="search-bar">
        <SearchBar />
      </section>
      <NoteList />
      <div className="homepage__action">
        <AddButton />
      </div>
    </section>
  </main>
)

export default HomeContent
