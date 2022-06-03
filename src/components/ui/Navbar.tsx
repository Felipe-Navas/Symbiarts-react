import React from 'react'

export const Navbar = () => {
  const handleLogout = () => {
    console.log('logout')
  }

  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">Felipao</span>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  )
}
