import React from 'react'

import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function index() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="container my-3 py-3">
        <h1>Politicas do Site</h1>
      </div>

      <Footer />
    </div>
  )
}
