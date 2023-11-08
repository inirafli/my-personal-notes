import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeScreen from './homepage/HomeScreen'
import DetailScreen from './detailpage/DetailScreen'
import AddNoteScreen from './addnotepage/AddNoteScreen'
import ArchivedScreen from './archivedpage/ArchivedScreen'

const NotesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/notes/:id' element={<DetailScreen />} />
      <Route path='/notes/new' element={<AddNoteScreen />} />
      <Route path='/archives' element={<ArchivedScreen />} />
    </Routes>
  </BrowserRouter>
)

export default NotesApp
