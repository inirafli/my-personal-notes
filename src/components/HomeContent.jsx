import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getActiveNotes } from '../utils/local-data'

import SearchBar from './SearchBar'
import NoteList from './NoteList'
import AddButton from './AddButton'

const HomeContent = () => {
  const navigate = useNavigate()

  const handleAdd = () => {
    navigate('/notes/new')
  }

  return (
    <main>
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <section className="search-bar">
          <SearchBar />
        </section>
        <NoteList getNotes={getActiveNotes} />
        <div className="homepage__action">
          <AddButton handleAdd={handleAdd} />
        </div>
      </section>
    </main>
  )
}

export default HomeContent
