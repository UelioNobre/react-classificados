import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function Index() {
  const { countCartItems } = useContext(CartContext)
  const storeName = process.env.REACT_APP_NAME || 'Loja online';

  return (
    <div className='border-bottom py-2 my-2'>
      <div className='container'>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className='text-decoration-none text-dark'>
            <h1 className='fs-3'>{storeName}</h1>
          </Link>

          <Link to="/carrinho" className="btn btn-outline-primary position-relative btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {countCartItems()}
              <span className="visually-hidden">Produtos adicionados</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
