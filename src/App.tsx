// import { useState } from 'react'
import Header from './sections/header/Header'
import Infos from './components/infos/Infos'
import Products from './sections/products/Products'
import Services from './sections/services/Services'
import Reviews from './sections/reviews/Reviews'
import Subscribe from './sections/subscribe/Subscribe'

import './main.css'

function App() {

  return <>
    <Header/>
    <Infos/>
    <Products/>
    <Services/>
    <Reviews/>
    <Subscribe/>
  </>
}

export default App
