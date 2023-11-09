/* eslint-disable no-unused-vars */
import React from 'react'

const AddNoteContent = ({
  title, setTitle, body, setBody,
}) => (
  <div className="add-new-page__input">
    <input
      className="add-new-page__input__title"
      placeholder="Masukan Judul Catatan"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <div
      className="add-new-page__input__body"
      contentEditable="true"
      data-placeholder="Tulis isi Catatanmu disini"
      onInput={(e) => setBody(e.currentTarget.textContent)}
    />
  </div>
)

export default AddNoteContent
