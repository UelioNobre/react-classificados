import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ListProducts from '../../components/ListProducts'
import api from '../../api'

export default function Index() {

  const { pathname } = useLocation();
  const categorie = pathname.split('/').pop();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    async function fetchProductsByCategories() {
      const products = await api.products.findProductByCategorySlug(categorie);
      setCategory(products[0].category.name);
      setProducts(products);
    }
    fetchProductsByCategories();
    
  }, [categorie]);
  return (
        <>
      <Header />
      <Navbar />

      <Hero>
        <h5 className='text-muted'>Produtos por categorias</h5>
        <h1>{category}</h1>
      </Hero>

      <ListProducts products={products} />

      <Footer />
    </>
  )
}
