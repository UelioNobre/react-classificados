import React, { useEffect } from 'react'

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import ListProducts from '../../components/ListProducts';
import Footer from '../../components/Footer';
import { productsMock } from '../../mock/produtos';
import { Link } from 'react-router-dom';

export default function Index() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      <Banner>
        <h2>Seja bem vindo a nossa loja</h2>
        <p>A melhor loja de ponto-cruz, crochê, jarros, accessórios para jardins, comida, especiarias e temperos. Compre online e receba em casa!</p>
        <Link to='/sobre' className='btn btn-warning'>Saiba mais</Link>
      </Banner>
      <ListProducts products={productsMock} />
      <Footer />
    </div>
  )
}
