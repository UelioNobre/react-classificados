import React from 'react'

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import ListProducts from '../../components/ListProducts';
import Footer from '../../components/Footer';

export default function index() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner>
        <h2>Seja bem vindo a nossa loja</h2>
        <p>A melhor loja de comida, especiarias e temperos. Compre online e receba em casa!</p>
        <a href='./' className='btn btn-warning'>Cadatre-se</a>
      </Banner>
      <ListProducts />
      <Footer />
    </div>
  )
}
