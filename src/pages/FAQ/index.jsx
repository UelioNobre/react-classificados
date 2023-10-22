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
        <h1>Perguntas e respostas frequentes</h1>
      </div>

      <Footer />
    </div>
  )
}
