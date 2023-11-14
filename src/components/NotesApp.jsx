import React from 'react'
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom'

import HomeScreen from '../pages/HomeScreen'
import DetailScreen from '../pages/DetailScreen'
import AddNoteScreen from '../pages/AddNoteScreen'
import ArchivedScreen from '../pages/ArchivedScreen'
import NotFoundScreen from '../pages/NotFoundScreen'
import RegisterScreen from '../pages/RegisterScreen'

const Layout = () => (
  <div>
    <Outlet />
  </div>
)

const NotesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="notes/:id" element={<DetailScreen />} />
        <Route path="notes/new" element={<AddNoteScreen />} />
        <Route path="archives" element={<ArchivedScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default NotesApp
