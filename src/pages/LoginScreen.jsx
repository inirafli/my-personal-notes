import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '../components/AppBar'
import LoginInput from '../components/LoginInput'
import { useAuth } from '../contexts/AuthContext'

const LoginScreen = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="app-container">
      <AppBar />
      <main>
        <section className='login-page'>
          <h2>Yuk, login untuk menggunakan aplikasi.</h2>
          <LoginInput />
          <p>
            Belum punya akun?
            {' '}
            <a href="/register">Daftar di sini</a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default LoginScreen
