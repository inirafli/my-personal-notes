import React from 'react'
import PropTypes from 'prop-types'
import useTextByLanguage from '../utils/language-helper'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
  }

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={useTextByLanguage('Cari Catatan berdasarkan Judul', 'Search Notes by its Title')}
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
