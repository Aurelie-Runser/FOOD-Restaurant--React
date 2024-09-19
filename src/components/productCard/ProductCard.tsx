import { ReactNode } from 'react';
import Icon from '../icons/Icon';
import Bouton from '../bouton/Bouton';

import './ProductCard.css'

interface ProductCard {
    children: ReactNode,
    icon: string,
    title: string,
}

export default function ProductCard({children, icon, title}:ServiceCard) {
  return (
    <div className='productCard'>
      <div className="productCard--img">
        <img src="/img/Pizza.jpg" alt="" />
      </div>

      <div className="productCard--content">
      <div className="productCard--left">
        <h4>Pizza</h4>

        <div className='productCard--left__buttons'>
            <Bouton size='small'>Add to Cart</Bouton>
            {/* <Bouton size='small'>Remove to Cart</Bouton> */}
            <Bouton rounded><Icon name='eye' size='medium' color='orangeWhite'/></Bouton>
        </div>
      </div>

      <div className="productCard__right">
        <div className='productCard__right--note p-small'>
            <Icon name='etoile' color='whiteOrange'/>
            <span>5</span>
        </div>
        <span className='productCard__right--price h5'>$ 25.50</span>
      </div>
      </div>
    </div>
  )
}