import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div>
      <h3>Carrinho vázio</h3>
      <p>Visite nossa <Link to="/">vitrine de produtos</Link></p>
    </div>
  )
}
