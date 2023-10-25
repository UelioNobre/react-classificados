import React, { useContext } from 'react'

import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import EmptyCart from '../../components/EmptyCart'
import Frete from '../../components/Frete'
import { CartContext } from '../../context/CartContext'
import { valueToReal } from '../../utils/utils'

export default function Index() {
  const { cartItems, increaseCartItem, decreaseCartItem, countCartItems, totalAmount } = useContext(CartContext);

  return (
    <div>
      <Header />
      <Navbar />

      <div className="container my-3 py-3">
        <h1>Carrinho</h1>
        <div className='border p-4'>
          {countCartItems() <= 0 ? <EmptyCart /> : <></>}

          {cartItems.map((item) => (
            <div key={item.id} className='d-flex justify-content-between align-items-center py-3 gap-4'>
              <div className='flex-fill'>{item.titulo}</div>
              <div>
                <div className="input-group">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={() => decreaseCartItem(item)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="form-control text-center cartQuantityValueWidth"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    onClick={() => increaseCartItem(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='text-end text-nowrap'>{valueToReal(item.preco)}</div>
              <div className='text-end text-nowrap'>{valueToReal(item.subtotal)}</div>
            </div>
          ))}

          {countCartItems() > 0 ? (
            <>
              <Frete />
              <hr />
              Total geral: <strong>{valueToReal(totalAmount())}</strong>
            </>
          ) : <></>}
        </div>
      </div>

      <Footer />
    </div >
  )
}
