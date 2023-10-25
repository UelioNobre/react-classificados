import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

export default function Index() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero>
        <h1>Sobre</h1>
      </Hero>
      <div className="container my-3 py-3">

        <p>A nossa loja online, chamada "Loja Online 1.0", é o seu destino definitivo para todas as suas necessidades tecnológicas. Com uma vasta gama de produtos que vão desde smartphones e laptops de última geração até acessórios inovadores, estamos comprometidos em proporcionar a você uma experiência de compra excepcional. Com a conveniência de comprar a qualquer hora, de qualquer lugar, a "Loja Online 1.0" oferece uma plataforma fácil de usar que torna a busca, seleção e compra de produtos tecnológicos uma tarefa simples e agradável.</p>

        <p>Na "Loja Online 1.0", a qualidade é a nossa prioridade. Trabalhamos em estreita colaboração com os principais fabricantes e fornecedores para garantir que cada item em nosso catálogo atenda aos mais altos padrões. Além disso, nossa equipe de suporte ao cliente está sempre disponível para responder às suas dúvidas e fornecer assistência personalizada, garantindo que você faça a escolha certa para suas necessidades específicas.</p>

        <p>Não importa se você é um entusiasta da tecnologia, um profissional ou um consumidor ocasional - na "Loja Online 1.0", todos são bem-vindos. Oferecemos preços competitivos, promoções regulares e opções de entrega rápida para tornar a sua experiência de compra online ainda mais gratificante. Explore nossa loja hoje e descubra o futuro da tecnologia ao alcance de um clique.</p>
      </div>

      <Footer />
    </div>
  )
}
