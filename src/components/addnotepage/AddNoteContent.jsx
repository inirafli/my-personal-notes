import React from 'react';

const AddNoteContent = () => (
  <div className="add-new-page__input">
    <input className="add-new-page__input__title" placeholder="Catatan rahasia" value="" />
    <div
      className="add-new-page__input__body"
      contentEditable="true"
      data-placeholder="Sebenarnya saya adalah ...."
    />
  </div>
)

export default AddNoteContent
