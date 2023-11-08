import React from 'react'
import showFormattedDate from '../utils/index'

const NoteItem = ({ note }) => (
  <article key={note.id} className="note-item">
    <h3 className="note-item__title">
      <a href={`/notes/${note.id}`}>{note.title}</a>
    </h3>
    <p className="note-item__createdAt">{showFormattedDate(note.createdAt)}</p>
    <p className="note-item__body">{note.body}</p>
  </article>
)

export default NoteItem
