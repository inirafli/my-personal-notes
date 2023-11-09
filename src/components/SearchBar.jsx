import React from 'react'
import PropTypes from 'prop-types'

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

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
}

export default SearchBar
