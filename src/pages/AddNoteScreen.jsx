import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNote } from '../utils/network-data'

import AppBar from '../components/AppBar'
import AddNoteContent from '../components/AddNoteContent'
import ConfirmButton from '../components/ConfirmButton'

const AddNoteScreen = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  const handleSaveNote = async () => {
    if (title || body) {
      const response = await addNote({
        title: title || '(untitled)',
        body,
      })

      if (!response.error) {
        navigate('/')
      } else {
        alert('Error adding Note: ', response.error)
      }
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
