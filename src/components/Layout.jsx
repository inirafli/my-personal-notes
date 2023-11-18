import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== '/register') {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layout
