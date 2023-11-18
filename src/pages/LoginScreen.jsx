import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LoginInput from '../components/LoginInput'
import { useAuth } from '../contexts/AuthContext'
import BaseLayout from '../components/BaseLayout'

const LoginScreen = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <BaseLayout>
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
    </BaseLayout>
  )
}

export default LoginScreen
