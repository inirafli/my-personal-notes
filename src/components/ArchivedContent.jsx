import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getArchivedNotes } from '../utils/network-data'

import SearchBar from './SearchBar'
import NoteList from './NoteList'

const ArchivedContent = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  // Mengambil keyword dari URL
  useEffect(() => {
    const keyword = searchParams.get('keyword')
    if (keyword) {
      setSearchTerm(keyword)
    }
  }, [searchParams, setSearchTerm])

  // Mengatur URL saat keyword berubah
  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ keyword: searchTerm })
    } else {
      setSearchParams({})
    }
  }, [searchTerm, setSearchParams])

  return (
    <main>
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <section className="search-bar">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>
        <NoteList getNotes={getArchivedNotes} searchTerm={searchTerm} />
      </section>
    </main>
  )
}

export default ArchivedContent
