import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, putAccessToken } from '../utils/network-data'

const LoginInput = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    const { error, data } = await login({ email, password })
    if (!error) {
      putAccessToken(data.accessToken)
      navigate('/')
    }
  }

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginInput
