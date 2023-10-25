import React from 'react'
import CardItem from '../CardItem'

export default function Index({products}) {
  const productListing = products.map((product) => <CardItem {...product} key={product.id} />)
  return (
    <div className='container my-5'>
      <h3 className='my-3 pb-3 fs-3'>Listagem de produtos</h3>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
      {productListing}
      </div>
    </div>
  )
}
