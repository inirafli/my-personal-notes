import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getActiveNotes } from '../utils/network-data'

import SearchBar from './SearchBar'
import NoteList from './NoteList'
import AddButton from './AddButton'
import useTextByLanguage from '../utils/language-helper'

const HomeContent = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

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

  const handleAdd = () => {
    navigate('/notes/new')
  }

  return (
    <main>
      <section className="homepage">
        <h2>{useTextByLanguage('Catatan Aktif', 'Active Notes')}</h2>
        <section className="search-bar">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>
        <NoteList getNotes={getActiveNotes} searchTerm={searchTerm} />
        <div className="homepage__action">
          <AddButton handleAdd={handleAdd} />
        </div>
      </section>
    </main>
  )
}

export default HomeContent
