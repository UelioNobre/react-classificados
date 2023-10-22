import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import API from '../../api'

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductDetails from '../../components/ProductDetails';

export default function Index() {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    async function fetch(id) {
      try {
        const products = await API.products.findById(id)
        setProduct(products);
      } catch (error) {
        // return <Redirect to="/nao-encontrado" />
        history.push('/nao-encontrado')
      }
    }

    const id = +location.pathname.split('/').pop();
    fetch(id);
  }, [product, location, history]);

  return (
    <div>
      <Header />
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </div>
  )
}
