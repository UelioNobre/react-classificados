import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

export default function Index() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, []);
  return (
    <>
      <Header />
      <Navbar />

      <Hero>
        <h1>Imprensa e comunicados</h1>
      </Hero>

      <div className="container py-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro neque fugit consectetur maiores dolores autem. Quis corporis nemo nam alias eligendi id, suscipit eveniet, aspernatur odio omnis earum sed.
        </p>
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
      <div className="container py-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro neque fugit consectetur maiores dolores autem. Quis corporis nemo nam alias eligendi id, suscipit eveniet, aspernatur odio omnis earum sed.
        </p>
      </div>


      <Footer />
    </>
  )
}
