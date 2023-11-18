import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import RegisterInput from '../components/RegisterInput'
import { useAuth } from '../contexts/AuthContext'
import BaseLayout from '../components/BaseLayout'

const RegisterScreen = () => {
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
        <section className='register-page'>
          <h2>Isi form untuk mendaftar akun.</h2>
          <RegisterInput />
          <p>
            Sudah punya akun?
            {' '}
            <Link to="/login">Login di sini</Link>
          </p>
        </section>
      </main>
    </BaseLayout>
  )
}

export default RegisterScreen
