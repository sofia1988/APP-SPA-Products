import React from 'react'//rfc
import Logo from "../assets/carrito.svg"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container'>
      <div className="navbar navbar-light bg-light py-3">
        <div className="container">
          <div className="d-flex">
            <Link to={"/"}>
              <img src={Logo} width={70} className="me-2" alt="logo" />
            </Link>
            <h1 className='mt-3'>Spa</h1>
          </div>

          <nav className="d-flex gap-3">
            <Link to={"/"}><button className="btn btn-outline-success px-4" type="submit">Productos</button></Link>
            <Link to={"/favorites"}><button className="btn btn-outline-success px-4" type="submit">Favoritos</button></Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
