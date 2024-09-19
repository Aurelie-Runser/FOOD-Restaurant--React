import Title from '../../components/title/Title'
import GridCard from '../../components/gridCard/GridCard'
import Bouton from '../../components/bouton/Bouton'
import Icon from '../../components/icons/Icon'

import './Products.css'
import { useState } from 'react'

export default function Products() {

  const [numProduct, setNumProduct] = useState(3)

  return (
    <section className='products'>
      <Title subTitle='Services'>Most popular items</Title>
      
      <GridCard num={numProduct}/>

      <div className='products--button'>
        <Bouton size='big' rounded icon>
          See More Products
          <Icon name='chevron' size="medium" color='whiteOrange'/>
        </Bouton>
      </div>
    </section>
  )
}