// import { useState } from 'react'
import Header from './sections/header/Header'
import Hero from './sections/hero/Hero'
import Infos from './components/infos/Infos'
import Products from './sections/products/Products'
import Services from './sections/services/Services'
import Reviews from './sections/reviews/Reviews'
import Subscribe from './sections/subscribe/Subscribe'
import Footer from './sections/footer/Footer'

import './main.css'

function App() {

  return <>
    <Header/>
    <Hero/>
    <Infos/>
    <Products/>
    <Services/>
    <Reviews/>
    <Subscribe/>
    <Footer/>
  </>
}

export default App
