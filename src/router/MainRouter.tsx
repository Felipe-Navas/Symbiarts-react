import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Account } from '../components/auth/Account'
import { Home } from '../components/Home'
import { Navbar } from '../components/ui/Navbar'

export const MainRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Home</h1>
        <Routes>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  )
}
