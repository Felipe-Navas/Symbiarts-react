import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth';


export const Navbar = () => {

  const dispatch = useDispatch()

  const state: any = useSelector(state => state)

  const { name } = state.auth

  const handleLogout = () => {
    dispatch(startLogout() as any)
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark">
        <NavLink className="navbar-brand" to="/">S<span className="small">ymbiarts</span></NavLink>
        <span className="navbar-brand text-white">{name}</span>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success ml-1" type="submit">Search</button>
        </form>

        <NavLink className="navbar-brand ml-1" to='/account'>My account</NavLink>
        <a className="navbar-brand" href="/">My artworks</a>
        <a className="navbar-brand" href="/">New artwork</a>
        <a className="navbar-brand" href="/">Purchases</a>
        <a className="navbar-brand" href="/">Sales</a>



        <div className="ml-1">
          <button className="btn btn-outline-danger justify-content-end" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span> Logout</span>
          </button>
        </div>
    </nav>


  )
}
