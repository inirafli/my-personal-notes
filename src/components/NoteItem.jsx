import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import showFormattedDate from '../utils/index'

const NoteItem = ({ note }) => (
  <article key={note.id} className="note-item">
    <h3 className="note-item__title">
      <Link to={`/notes/${note.id}`}>{note.title}</Link>
    </h3>
    <p className="note-item__createdAt">{showFormattedDate(note.createdAt)}</p>
    <p className="note-item__body">{note.body}</p>
  </article>
)

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
}

export default NoteItem
