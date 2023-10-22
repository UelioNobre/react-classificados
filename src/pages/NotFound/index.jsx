import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className='container my-5 py-5'>
      <h3>Não encontrado!</h3>
      <p>O conteúdo que requisitou não existe, lamentamos o ocorrido.</p>
      <Link to="/">Voltar</Link>
    </div>
  )
}
