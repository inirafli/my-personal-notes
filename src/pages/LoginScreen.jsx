import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
            <Link to="/register">Daftar di sini</Link>
          </p>
        </section>
      </main>
    </div>
  )
}

export default LoginScreen
