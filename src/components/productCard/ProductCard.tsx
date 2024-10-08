import { useContext } from 'react';
import { CartContext } from '../../hooks/useCart';
import Icon from '../icons/Icon';
import Bouton from '../bouton/Bouton';

import './ProductCard.css'

interface ProductCard {
    id: number,
    title: string,
    img: string,
    price: number,
    note: number,
}

export default function ProductCard({id, title, img, price, note}:ProductCard) {
  const {cart, actionCart} = useContext(CartContext)

  const handleAddToCart = () => {
    actionCart(id, price, 'add');
  };

  const handleRemoveFromCart = () => {
    actionCart(id, price, 'supp');
  };
  
  return (
    <div className='productCard'>
      <div className="productCard--img">
        <img src={'/img/'+img+'.jpg'} alt={"photo de la recette "+title} />
      </div>

      <div className="productCard--content">
      <div className="productCard--left">
        <h4>{ title }</h4>

        <div className='productCard--left__buttons'>
          {cart.includes(id) ?
            <Bouton size='small' action={handleRemoveFromCart}>Remove to Cart</Bouton>
          :
            <Bouton size='small' action={handleAddToCart}>Add to Cart</Bouton>
          }

          <Bouton rounded link={'/recettes/'+id}><Icon name='eye' size='medium' color='orangeWhite'/></Bouton>
        </div>
      </div>

      <div className="productCard__right">
        <div className='productCard__right--note p-small'>
            <Icon name='etoile' color='whiteOrange'/>
            <span>{ note }</span>
        </div>
        <span className='productCard__right--price h5'>$ { price }</span>
      </div>
      </div>
    </div>
  )
}