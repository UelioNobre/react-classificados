import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Index() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="container my-3 py-3">
        <h1>Imprensa e comunicados</h1>

  
      </div>

      <div className="bg-primary py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p className='fs-4 text-white'>
                Consequatur porro neque fugit consectetur maiores dolores autem.
              </p>
            </div>
            <div className="col-md-8">
              <p className='text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro neque fugit consectetur maiores dolores autem. Quis corporis nemo nam alias eligendi id, suscipit eveniet, aspernatur odio omnis earum sed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
