import React from 'react'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom'

import Layout from './Layout'
import HomeScreen from '../pages/HomeScreen'
import DetailScreen from '../pages/DetailScreen'
import AddNoteScreen from '../pages/AddNoteScreen'
import ArchivedScreen from '../pages/ArchivedScreen'
import NotFoundScreen from '../pages/NotFoundScreen'
import RegisterScreen from '../pages/RegisterScreen'
import LoginScreen from '../pages/LoginScreen'
import { AuthProvider } from '../contexts/AuthContext'
import { AppProvider } from '../contexts/AppContext'

const NotesApp = () => (
  <AppProvider>
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
  </AppProvider>
)

export default NotesApp
