import React from 'react'

import AppBar from '../AppBar'
import AddNoteContent from './AddNoteContent'
import ConfirmButton from './ConfirmButton'

const AddNoteScreen = () => (
  <div className="app-container">
    <AppBar />
    <main>
      <section className='add-new-page'>
        <AddNoteContent />
        <ConfirmButton />
      </section>
    </main>
  </div>
)

export default AddNoteScreen
