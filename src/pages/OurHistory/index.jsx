import React from 'react'

import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from '../../components/Image'
import { getRandImage } from '../../utils/utils'

export default function index() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="container my-3 py-3">
        <h1>Nossa história</h1>
        <p>
          Fundada em 2005 por um grupo de entusiastas da tecnologia, a "Loja Online 1.0" teve seu início modesto como uma pequena loja de eletrônicos em uma área local. A visão por trás da empresa era criar um espaço onde os clientes pudessem encontrar os mais recentes produtos tecnológicos a preços acessíveis, enquanto desfrutavam de um atendimento personalizado. Desde o início, a paixão pela inovação tecnológica e o compromisso com a satisfação do cliente foram os pilares da empresa.
        </p>
      </div>

      <div className="container bg-light p-3 my-5 rounded">
        <div className="row">
          <div className="col-md-6 my-3">
            <Image path={getRandImage()} css="img-fluid" />
          </div>
          <div className="col-md-6 my-3">
            <h3>Caminhos percorridos</h3>
            <p>
              À medida que a reputação da "Loja Online 1.0" crescia, também crescia a demanda por seus produtos e serviços. 
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white p-3 my-5">
      <div className="container p-3 my-5">
        <div className="row">
          <div className="col-md-12 my-3">
            <h3>Crescimento</h3>
            <p>
              A empresa expandiu suas operações para o mundo online em 2010, lançando sua loja virtual, o que permitiu que clientes de todo o país acessassem sua variedade de produtos. Esse movimento estratégico acelerou o crescimento da empresa e estabeleceu-a como uma das principais varejistas de tecnologia online no mercado.
            </p>
          </div>
        </div>
      </div>
      </div>

      <div className="container bg-light p-3 my-5 rounded">
        <div className="row">
          <div className="col-md-6 my-3">
            <h3>O sucesso!</h3>
            <p>
              Nos anos subsequentes, a "Loja Online 1.0" continuou a se adaptar e evoluir para atender às demandas em constante mudança do mercado tecnológico. Ela ampliou seu catálogo para incluir produtos de diversas categorias, desde eletrônicos de consumo até soluções de negócios. A empresa também investiu fortemente em logística e atendimento ao cliente, assegurando entregas rápidas e suporte excepcional.
            </p>
          </div>
          <div className="col-md-6 my-3">
            <Image path={getRandImage()} css="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container p-3 my-5">
        <div className="row">
          <div className="col-md-12 my-3">
            <h3>A lição de todo esse percurso</h3>
            <p>
              Hoje, a "Loja Online 1.0" é reconhecida como uma referência no setor de varejo de tecnologia. Ela atende a milhões de clientes satisfeitos em todo o mundo e mantém sua missão original de proporcionar produtos de alta qualidade a preços acessíveis. Com uma história rica de inovação e dedicação à excelência, a "Loja Online 1.0" está posicionada para continuar sua trajetória de sucesso na indústria tecnológica.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

