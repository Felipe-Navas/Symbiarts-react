import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SymbiartsApp } from '../SymbiartsApp'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

import { startChecking } from '../actions/auth'
import { LoginScreen } from '../components/auth/LoginScreen'

export const SymbiartsRouter = () => {
  const dispatch = useDispatch()
  const { checking, uid } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  if (checking) {
    return <div>Checking...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <PublicRoute uid={uid}>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/*"
          element={
            <PrivateRoute uid={uid}>
              <SymbiartsApp />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
