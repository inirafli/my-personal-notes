import React, {
  createContext, useContext, useState, useEffect, useMemo,
} from 'react'
import { getUserLogged } from '../utils/network-data'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const login = async () => {
    const { data } = await getUserLogged()

    setIsAuthenticated(true)
    setUser(data)
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
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
  }, [])

  const contextValue = useMemo(() => ({
    isAuthenticated, login, logout, user,
  }), [
    isAuthenticated,
    user,
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
