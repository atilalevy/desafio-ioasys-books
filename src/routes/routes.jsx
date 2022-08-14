import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Loading from '../components/Loading'

const LoginPage = React.lazy(() => import('../pages/LoginPage'))
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'))
const HomePage = React.lazy(() => import('../pages/HomePage'))
import api from '../services/api'

function PrivateRoute({ children, redirectTo }) {
    const token = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refresh-token')
    return token && refreshToken ? children : <Navigate to={redirectTo} />
}
  
export default function RoutesNav() {
    return (
        <Routes>
            <Route 
                path='/' 
                element={
                    <React.Suspense fallback={<Loading />}>
                        <PrivateRoute redirectTo={'/login'}>
                            <HomePage />
                        </PrivateRoute>
                    </React.Suspense>
                } 
            />
            <Route 
                path="/login" 
                element={
                    <React.Suspense fallback={<Loading />}>
                        <LoginPage />
                    </React.Suspense>
                } 
            />
            <Route 
                path='*' 
                element={
                    <React.Suspense fallback={<Loading />}>
                        <NotFoundPage />
                    </React.Suspense>
                } 
            />
        </Routes>
    );
  }
