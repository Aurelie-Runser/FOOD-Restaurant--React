// import { useState } from 'react'
import Header from './sections/header/Header'
import Infos from './components/infos/Infos'
import Services from './sections/services/Services'
import Reviews from './sections/reviews/Reviews'
import './main.css'
import ProductCard from './components/productCard/ProductCard'

function App() {

  return <>
    <Header/>
    <Infos/>
    <ProductCard/>
    <Services/>
    <Reviews/>
  </>
}

export default App
