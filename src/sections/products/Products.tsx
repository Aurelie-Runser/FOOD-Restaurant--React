import { useState } from 'react'

import Title from '../../components/title/Title'
import GridCard from '../../components/gridCard/GridCard'
import Bouton from '../../components/bouton/Bouton'
import Icon from '../../components/icons/Icon'

import './Products.css'

export default function Products() {

  const [showButton, setShowButton] = useState(true)
  const [numProduct, setNumProduct] = useState(3)

  const moreProducts = ()=>{
    setNumProduct(6)
    setShowButton(false)   
  }

  return (
    <section className='products'>
      <Title subTitle='Services'>Most popular items</Title>
      
      <GridCard num={numProduct}/>

      { showButton &&
        <div className='products--button' onClick={moreProducts}>
          <Bouton size='big' rounded icon>
            See More Products
            <Icon name='chevron' size="medium" color='whiteOrange'/>
          </Bouton>
        </div>
      }
    </section>
  )
}