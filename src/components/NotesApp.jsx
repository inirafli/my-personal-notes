import React from 'react'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom'

import Layout from '../pages/Layout'
import HomeScreen from '../pages/HomeScreen'
import DetailScreen from '../pages/DetailScreen'
import AddNoteScreen from '../pages/AddNoteScreen'
import ArchivedScreen from '../pages/ArchivedScreen'
import NotFoundScreen from '../pages/NotFoundScreen'
import RegisterScreen from '../pages/RegisterScreen'
import LoginScreen from '../pages/LoginScreen'
import { AuthProvider } from '../contexts/AuthContext'

const NotesApp = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="notes/:id" element={<DetailScreen />} />
          <Route path="notes/new" element={<AddNoteScreen />} />
          <Route path="archives" element={<ArchivedScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
)

export default NotesApp
