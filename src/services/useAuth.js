import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import api from './api'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [authError, setAuthError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refresh-token')

    if (token) {
      api.defaults.headers.common['Authorization'] = `${JSON.parse(token)}`
      api.defaults.headers.common['refresh-token'] = `${JSON.parse(refreshToken)}`
      setAuthenticated(true)
    }
  }, [])
  
  async function handleLogin(email, password) {
    const user = JSON.stringify({
      email: email,
      password: password 
    })
    await api.post('/auth/sign-in', user)
      .then(res => {
        const getToken = res.headers['authorization']
        const getRefreshToken = res.headers['refresh-token']
        localStorage.setItem('token', JSON.stringify(getToken))
        localStorage.setItem('refresh-token', JSON.stringify(getRefreshToken))
        api.defaults.headers.common['Authorization'] = `${getToken}`
        api.defaults.headers.common['refresh-token'] = `${getRefreshToken}`
        setAuthenticated(true)
        setAuthError(false)
        navigate('/livros')
      })
      .catch(err => {
        setAuthError(true)
        console.error(err)
      })
  }

  function handleLogout() {
    setAuthenticated(false)
    localStorage.removeItem('token')
    localStorage.removeItem('refresh-token')
    api.defaults.headers.common['Authorization'] = undefined
    api.defaults.headers.common['refresh-token'] = undefined
    navigate('/login')
  }
  
  return { authenticated, authError, handleLogin, handleLogout }
}