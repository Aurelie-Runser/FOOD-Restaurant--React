// import { useState } from 'react'
import Header from './sections/header/Header'
import Infos from './components/infos/Infos'
import Services from './sections/services/Services'
import Reviews from './sections/reviews/Reviews'
import './main.css'
import GridCard from './components/gridCard/GridCard'

function App() {

  return <>
    <Header/>
    <Infos/>
    <GridCard num='1'/>
    <Services/>
    <Reviews/>
  </>
}

export default App
