import React, { useContext } from 'react'
import Image from '../Image';
import { valueToReal } from '../../utils/utils';
import { CartContext } from '../../context/CartContext';

export default function Index({ product }) {
  const { cartItems, addCartItem } = useContext(CartContext);
  console.log({cartItems})
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5 my-4">
          <Image css="img-fluid" />
        </div>
        <div className="col-12 col-md-6 col-lg-7 my-4">
          <h1>{product.titulo}</h1>
          <small className='text-secondary d-block my-3'><strong>#{product.codigo}</strong></small>
          <p>{product.descricao} &hellip; </p>
          <h3>{valueToReal(product.preco)}</h3>

          <button className='btn btn-outline-success' onClick={() => addCartItem(product)}>Adicionar no carrinho</button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 my-5">
          <h4>Descrição</h4>
          <p>{product.descricao}</p>
        </div>
      </div>
    </div>
  )
}
