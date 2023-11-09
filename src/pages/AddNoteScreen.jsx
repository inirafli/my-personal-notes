import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNote } from '../utils/local-data'

import AppBar from '../components/AppBar'
import AddNoteContent from '../components/AddNoteContent'
import ConfirmButton from '../components/ConfirmButton'

const AddNoteScreen = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  const handleSaveNote = () => {
    if (title || body) {
      addNote({
        title: title || '(untitled)',
        body,
      })
      navigate('/')
    }
  }

  return (
    <div className='app-container'>
      <AppBar />
      <main>
        <section className="add-new-page">
          <AddNoteContent title={title} setTitle={setTitle} body={body} setBody={setBody} />
          <ConfirmButton handleSaveNote={handleSaveNote} />
        </section>
      </main>
    </div>
  )
}

export default AddNoteScreen
