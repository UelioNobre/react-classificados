import React, { useState } from 'react'
import { valueToReal } from '../../utils/utils';

export default function Index() {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);

  function fetchCEP() {
    if (cep.length === 0) {
      return;
    }

    setLoading(true)

    setTimeout(() => {
      const priceRand = Math.random() * 99
      setPrice(priceRand)
      setLoading(false)
    }, 1000)
  }

  return (
    <div>
      <h3>Frete</h3>
      <hr />
      <div style={{ visibility: price === 0 ? 'visible' : 'hidden' }} >
        <input type="text" onChange={(e) => setCep(e.target.value)} name="cep" id="ce" />
        <button onClick={() => fetchCEP()} disabled={loading}>
          {loading ? 'Requisitando...' : 'Ok'}
        </button>
      </div>
      <br />
      <div className='d-flex justify-content-between align-items-center border'>
        <p>Valor do frete para o CEP:
          <strong className='p-2'>{cep}</strong>
          <span style={{ visibility: price !== 0 ? 'visible' : 'hidden' }}>
            <button className='btn btn-outline-secondary btn-sm' onClick={() => { setPrice(0); setCep("") }}>[troca endereço]</button>
          </span>
        </p>
          
        <p><strong>{valueToReal(price)}</strong></p>
      </div>
    </div>
  )
}
