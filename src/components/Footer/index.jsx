import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className='my-3 py-3'>
      <hr />
      <div className='container my-3 py-3'>
        <div className='row'>
          {/* Coluna 1 */}
          <div className="col-12 col-md-12 col-lg-8">
            <div className='row'>
              <div className="col-12 col-sm-6 col-md-4 mb-3">
                <h5>Loja Virtual</h5>
                <p>Explore nossa loja virtual para encontrar os melhores produtos! Qualidade, variedade e preços incríveis. Satisfação garantida!</p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-3">
                <h5>Ajuda</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/contato" className="nav-link p-0 text-body-secondary">Contato</Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/como-comprar" className="nav-link p-0 text-body-secondary">Como comprar</Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/politicas-do-site" className="nav-link p-0 text-body-secondary">Politicas do Site</Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/termos-de-uso" className="nav-link p-0 text-body-secondary">Termos de uso</Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/faq" className="nav-link p-0 text-body-secondary">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-3">
                <h5>Outros links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/nossa-historia" className="nav-link p-0 text-body-secondary">A história</Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/imprensa" className="nav-link p-0 text-body-secondary">Imprensa</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Coluna 2 */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="col-12 mb-3">
              <h5>Formas de pagamento</h5>
              <ul>
                <li>Cartão de Crédito</li>
                <li>Cartão de Débito</li>
                <li>Boleto Bancário</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
