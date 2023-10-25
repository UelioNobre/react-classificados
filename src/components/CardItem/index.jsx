import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Image from '../Image'

import { getRandImage } from '../../utils/utils.js'



// https://picsum.photos/id/237/200/300
export default function Index({ id, codigo, titulo, preco }) {
  return (
    <section className='col'>
      <div className="card">
        <Image path={getRandImage()} alt={titulo} css="card-img-top" />
        <div className="card-body">
          <Link to={`./details/${id}`} className="text-decoration-none">
            <h1 className="card-title fs-4">{titulo}</h1>
          </Link>
          <small className='d-block text-black-50 text-decoration-none mb-3'>#{codigo}</small>
          <p>R$ {preco}</p>
          <Link to={`/details/${id}`} className="btn btn-outline-primary" >Detalhes</Link>
        </div>
      </div>
    </section>
  )
}
