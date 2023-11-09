import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
  }

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari Catatan berdasarkan Judul"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </section>
  )
}

export default SearchBar
