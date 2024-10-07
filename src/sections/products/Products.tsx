import Title from '../../components/title/Title'
import GridCard from '../../components/gridCard/GridCard'

import './Products.css'

export default function Products() {
  return (
    <section id='products' className='products'>
      <Title subTitle='Products'>Most popular items</Title>
      
      <GridCard num={3}/>
    </section>
  )
}