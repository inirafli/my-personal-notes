import React from 'react'

const RegisterInput = () => (
  <div className="input-register">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" defaultValue="" />
    <label htmlFor="email">Email</label>
    <input type="email" id="email" defaultValue="" />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" defaultValue="" />
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" defaultValue="" />
    <button type="button">Register</button>
  </div>
)

export default RegisterInput
