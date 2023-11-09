import React from 'react'
import showFormattedDate from '../utils/index'

const DetailContent = ({ note }) => {
  if (!note) {
    return null
  }

  return (
    <>
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{note.body}</div>
    </>
  )
}

export default DetailContent
