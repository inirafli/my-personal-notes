import React from 'react'

const LoginInput = () => (
  <div className="input-login">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" defaultValue="" />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" defaultValue="" />
    <button type="button">Login</button>
  </div>
)

export default LoginInput
