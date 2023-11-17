import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import AppBar from '../components/AppBar'
import RegisterInput from '../components/RegisterInput'
import { useAuth } from '../contexts/AuthContext'

const RegisterScreen = () => {
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
        <section className='register-page'>
          <h2>Isi form untuk mendaftar akun.</h2>
          <RegisterInput />
          <p>
            Sudah punya akun?
            {' '}
            <a href="/login">Login di sini</a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default RegisterScreen
