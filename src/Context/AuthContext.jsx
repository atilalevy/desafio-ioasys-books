
import React, { createContext } from 'react'

import useAuth from '../services/useAuth'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const {
    authenticated, authError, authErrorMessage, handleLogin, handleLogout,
  } = useAuth()

  return (
    <AuthContext.Provider value={{ authenticated, authError, authErrorMessage, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }