import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { AuthContext } from '../Context/AuthContext'

const LoginPage = React.lazy(() => import('../pages/LoginPage'))
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'))
const BooksPage = React.lazy(() => import('../pages/BooksPage'))
import api from '../services/api'

function PrivateRoute({ children, redirectTo }) {
    const token = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refresh-token')
    return token && refreshToken ? children : <Navigate to={redirectTo} />
}

function Loading () {
    return(
        <h1>Loading...</h1>
    )
}
  
export default function RoutesNav() {
    return (
        <Routes>
            <Route 
                path="/login" 
                element={
                    <React.Suspense fallback={<Loading />}>
                        <LoginPage />
                    </React.Suspense>
                } 
            />
            <Route 
                path='/' 
                element={
                    <React.Suspense fallback={<Loading />}>
                        <NotFoundPage />
                    </React.Suspense>
                } 
            />
            <Route 
                path='/livros' 
                element={
                    <React.Suspense fallback={<Loading />}>
                        <PrivateRoute redirectTo={'/login'}>
                            <BooksPage />
                        </PrivateRoute>
                    </React.Suspense>
                } 
            />
        </Routes>
    );
  }
