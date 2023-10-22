import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Index() {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const storeName = process.env.REACT_APP_NAME || 'Loja online';
    setLogo(storeName)
  }, [])

  return (
    <div className='border-bottom py-2 my-2'>
      <div className='container'>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className='text-decoration-none text-dark'>
            <h1>{logo}</h1>
          </Link>
          <Link to="/carrinho" className='btn btn-outline-secondary text-decoration-none'>Carrinho [0]</Link>
        </div>
      </div>
    </div>
  )
}
