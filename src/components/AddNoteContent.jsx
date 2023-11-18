/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import useTextByLanguage from '../utils/language-helper'

const AddNoteContent = ({
  title, setTitle, body, setBody,
}) => (
  <div className="add-new-page__input">
    <input
      className="add-new-page__input__title"
      placeholder={useTextByLanguage('Masukan Judul Catatan', 'Insert Note Title')}
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <div
      className="add-new-page__input__body"
      contentEditable="true"
      data-placeholder={useTextByLanguage('Tulis isi Catatanmu disini', 'Write your Notes here')}
      onInput={(e) => setBody(e.currentTarget.textContent)}
    />
  </div>
)

AddNoteContent.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  setBody: PropTypes.func.isRequired,
}

export default AddNoteContent
