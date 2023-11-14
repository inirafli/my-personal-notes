import React from 'react'

import AppBar from '../components/AppBar'
import RegisterInput from '../components/RegisterInput'

const RegisterScreen = () => (
  <div className="app-container">
    <AppBar />
    <main>
      <section className='register-page'>
        <h2>Isi form untuk mendaftar akun.</h2>
        <RegisterInput />
        <p>
          Sudah punya akun?
          {' '}
          <a href="/">Login di sini</a>
        </p>
      </section>
    </main>
  </div>
)

export default RegisterScreen
