import React from 'react'
import AppBar from '../components/AppBar'
import LoginInput from '../components/LoginInput'

const LoginScreen = () => (
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

export default LoginScreen
