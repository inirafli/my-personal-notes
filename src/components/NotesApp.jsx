import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeScreen from '../pages/HomeScreen'
import DetailScreen from '../pages/DetailScreen'
import AddNoteScreen from '../pages/AddNoteScreen'
import ArchivedScreen from '../pages/ArchivedScreen'

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
