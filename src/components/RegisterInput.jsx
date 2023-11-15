import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../utils/network-data'

const RegisterInput = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Inputan Password harus sama!')
      return
    }

    const { error } = await register({ name, email, password })
    if (!error) {
      navigate('/login', { replace: true })
    }
  }

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </div>
  )
}

export default RegisterInput
