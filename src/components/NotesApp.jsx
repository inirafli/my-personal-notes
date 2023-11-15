import React, { useEffect } from 'react'
import {
  BrowserRouter, Routes, Route, Outlet, useNavigate,
} from 'react-router-dom'

import HomeScreen from '../pages/HomeScreen'
import DetailScreen from '../pages/DetailScreen'
import AddNoteScreen from '../pages/AddNoteScreen'
import ArchivedScreen from '../pages/ArchivedScreen'
import NotFoundScreen from '../pages/NotFoundScreen'
import RegisterScreen from '../pages/RegisterScreen'
import LoginScreen from '../pages/LoginScreen'
import { getUserLogged } from '../utils/network-data'

const Layout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      const { error } = await getUserLogged()
      if (error) {
        navigate('/login');
      }
    }

    checkAuth();
  }, [navigate])

  return (
    <div>
      <Outlet />
    </div>
  )
}

const NotesApp = () => (
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
)

export default NotesApp
