import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import RegisterInput from '../components/RegisterInput'
import { useAuth } from '../contexts/AuthContext'
import BaseLayout from '../components/BaseLayout'
import useTextByLanguage from '../utils/language-helper'

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
          <h2>{useTextByLanguage('Isi form untuk mendaftar akun.', 'Fill the form to Register your Account')}</h2>
          <RegisterInput />
          <p>
            {useTextByLanguage('Sudah punya akun?', 'Already have an Account?')}
            {' '}
            <Link to="/login">{useTextByLanguage('Masuk di sini', 'Login here')}</Link>
          </p>
        </section>
      </main>
    </BaseLayout>
  )
}

export default RegisterScreen
