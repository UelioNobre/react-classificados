import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Details from './pages/Details';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import HowToBuy from './pages/HowToBuy';
import NotFound from './pages/NotFound';
import OurHistory from './pages/OurHistory';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Press from './pages/Press';
import TermsOfUse from './pages/TermsOfUse';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre" component={About} />
      <Route exact path="/contato" component={Contact} />
      <Route exact path="/como-comprar" component={HowToBuy} />
      <Route exact path="/nossa-historia" component={OurHistory} />
      <Route exact path="/carrinho" component={Cart} />
      <Route exact path="/imprensa" component={Press} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/nao-encontrado" component={NotFound} />
      <Route exact path="/politicas-do-site" component={PrivacyPolicy} />
      <Route exact path="/termos-de-uso" component={TermsOfUse} />
      <Route path="/details/:id" component={Details} />
      <Route path="*" component={NotFound} />
      </Switch>
    </CartProvider>
  );
}

export default App;
