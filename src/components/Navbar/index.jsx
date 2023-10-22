import React from 'react'
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">Sobre</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/categorias/artesanatos">Artesanato</Link></li>
                  <li><Link className="dropdown-item" to="/categorias/bonecas">Bonecas</Link></li>
                  <li><Link className="dropdown-item" to="/categorias/essencias">Essencias</Link></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
              <Link className="btn btn-success" to='./'>Cadastro</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
