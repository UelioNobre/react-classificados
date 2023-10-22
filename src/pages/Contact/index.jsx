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
        <h1>Formulário de contato</h1>
      </div>

      <Footer />
    </div>
  )
}
