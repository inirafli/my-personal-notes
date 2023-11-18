import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LoginInput from '../components/LoginInput'
import { useAuth } from '../contexts/AuthContext'
import BaseLayout from '../components/BaseLayout'
import useTextByLanguage from '../utils/language-helper'

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
          <h2>{useTextByLanguage('Yuk, login untuk menggunakan aplikasi.', 'Let\'s login to use the app.')}</h2>
          <LoginInput />
          <p>
            {useTextByLanguage('Belum punya akun?', 'Don\'t have an account?')}
            {' '}
            <Link to="/register">{useTextByLanguage('Daftar di sini', 'Register here')}</Link>
          </p>
        </section>
      </main>
    </BaseLayout>
  )
}

export default LoginScreen
