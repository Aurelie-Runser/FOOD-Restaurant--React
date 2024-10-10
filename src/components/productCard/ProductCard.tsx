import { useContext } from 'react';
import { CartContext } from '../../hooks/useCart';
import Icon from '../icons/Icon';
import Bouton from '../bouton/Bouton';
import { ProductForCard } from '../../interfaces/ProductForCard';

import './ProductCard.css'

export default function ProductCard({recipe_id, title, imgSrc, prix, note}:ProductForCard) {
  const {cart, actionCart} = useContext(CartContext)

  const handleAddToCart = () => {
    actionCart(recipe_id, prix, 'add');
  };

  const handleRemoveFromCart = () => {
    actionCart(recipe_id, prix, 'supp');
  };
  
  return (
    <div className='productCard'>
      <div className="productCard--img">
        <img src={'/img/'+imgSrc+'.jpg'} alt={"photo de la recette "+title} />
      </div>

      <div className="productCard--content">
      <div className="productCard--left">
        <h4>{ title }</h4>

        <div className='productCard--left__buttons'>
          {cart.includes(recipe_id) ?
            <Bouton size='small' action={handleRemoveFromCart}>Remove to Cart</Bouton>
          :
            <Bouton size='small' action={handleAddToCart}>Add to Cart</Bouton>
          }

          <Bouton rounded link={'/menu/'+recipe_id}><Icon name='eye' size='medium' color='orangeWhite'/></Bouton>
        </div>
      </div>

      <div className="productCard__right">
        <div className='productCard__right--note p-small'>
            <Icon name='etoile' color='whiteOrange'/>
            <span>{ note }</span>
        </div>
        <span className='productCard__right--price h5'>$ { prix }</span>
      </div>
      </div>
    </div>
  )
}