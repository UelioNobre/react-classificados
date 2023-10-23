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
    <div>
      <Header />
      <Navbar />

      <Hero>
        <h1>Perguntas e respostas frequentes</h1>
      </Hero>

      <Footer />
    </div>
  )
}
