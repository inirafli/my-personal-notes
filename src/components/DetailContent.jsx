import React from 'react'
import PropTypes from 'prop-types'
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

DetailContent.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
}

export default DetailContent
