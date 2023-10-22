import React from 'react'
import { productsMock } from '../../mock/produtos'
import CardItem from '../CardItem'

export default function Index() {
  const productListing = productsMock.map((product) => <CardItem {...product} key={product.id} />)
  return (
    <div className='container'>
      <h1>Listagem de produtos</h1>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
      {productListing}
      </div>
    </div>
  )
}
