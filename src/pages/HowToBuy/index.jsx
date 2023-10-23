import React, { useEffect } from 'react'

import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

import { strings } from './strings'
import { Link } from 'react-router-dom'

export default function Index() {
  const stepClassContainer = "py-2 my-2"

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior:'smooth'})
  }, []);

  return (
    <div>
      <Header />
      <Navbar />

      <Hero>
        <h1>Como comprar</h1>
      </Hero>

      <div className="container my-3 py-3">

        {/* loop */}
        {strings.map(({title, subtitle, text}) => (
          <div className={stepClassContainer} key={title}>
            <div className='py-3'>
              <h4 className='text-uppercase fw-bolder lh-1 text-primary-emphasis'>{title}</h4>
              <h5 className='display-6'>
                {subtitle}
              </h5>
            </div>
            <p>Navegue na seção de produtos e clique no item que deseja. Os produtos estão divididos em categorias e sub-categorias. Por exemplo, para localizar um Brinco, clique no menu Topo ou no menu da lateral esquerda em BRINCOS (Por exemplo). Na pagina inicial (Home) você encontrará os produtos em oferta ou lançamentos.</p>
          </div>
        ))}

        <Link to="/" className='btn btn-outline-primary'>Navegar na loja</Link>
      </div>

      <Footer />
    </div>
  )
}
