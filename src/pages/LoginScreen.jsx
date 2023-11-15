import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '../components/AppBar'
import LoginInput from '../components/LoginInput'
import { getUserLogged } from '../utils/network-data'

const LoginScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      const { error } = await getUserLogged()
      if (!error) {
        navigate('/')
      }
    }

    checkAuth()
  }, [navigate])

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
