import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { CategoriesContext } from '../../context/CategoriesContext';

export default function Index() {
  const { categories, fetchCategories } = useContext(CategoriesContext);

  useEffect(() => {
    async function fetchDate() {
      await fetchCategories();
    }
    fetchDate();
  }, [fetchCategories]);

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
                  {categories.map((categorie) => (
                    <li key={categorie.id}>
                      <Link className="dropdown-item" to={`/categorias/${categorie.slug}`}>
                        {categorie.name}
                      </Link>
                    </li>
                  ))}

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
