import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import api from './api'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [authError, setAuthError] = useState(false)
  const [authErrorMessage, setAuthErrorMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refresh-token')

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`
      api.defaults.headers.common['refresh-token'] = `Bearer ${JSON.parse(refreshToken)}`
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
        const username = res.data.name
        const usergender = res.data.gender
        const userInfo = {
          name: username,
          gender: usergender
        }
        localStorage.setItem('token', JSON.stringify(getToken))
        localStorage.setItem('refresh-token', JSON.stringify(getRefreshToken))
        localStorage.setItem('userinfo', JSON.stringify(userInfo))
        api.defaults.headers.common['Authorization'] = `Bearer ${getToken}`
        api.defaults.headers.common['refresh-token'] = `Bearer ${getRefreshToken}`
        setAuthError(false)
        navigate('/')
      })
      .catch((err) => {
        setAuthErrorMessage(err.response.data.errors.message)
        setAuthError(true)
      })
  }

  function handleLogout() {
    setAuthenticated(false)
    localStorage.removeItem('token')
    localStorage.removeItem('refresh-token')
    localStorage.removeItem('userinfo')
    api.defaults.headers.common['Authorization'] = undefined
    api.defaults.headers.common['refresh-token'] = undefined
    navigate('/login')
  }
  
  return { authenticated, authError, authErrorMessage, handleLogin, handleLogout }
}