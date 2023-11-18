import React, {
  createContext, useContext, useState, useEffect, useMemo,
} from 'react'
import { getUserLogged } from '../utils/network-data'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  useEffect(() => {
    const checkAuth = async () => {
      const { error } = await getUserLogged()
      if (error) {
        logout()
      } else {
        login()
      }
      setLoading(false)
    }

    checkAuth()
  }, [logout])

  const contextValue = useMemo(() => ({
    isAuthenticated, login, logout,
  }), [
    isAuthenticated,
    login,
    logout,
  ])

  return (
    <AuthContext.Provider value={contextValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
