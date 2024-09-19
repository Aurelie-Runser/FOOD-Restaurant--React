import Icon from '../icons/Icon';
import Bouton from '../bouton/Bouton';

import './ProductCard.css'

interface ProductCard {
    name: string,
    img: string,
    price: number,
    note: number,
}

export default function ProductCard({name, img, price, note}:ProductCard) {
  return (
    <div className='productCard'>
      <div className="productCard--img">
        <img src={"/img/"+img+".jpg"} alt="" />
      </div>

      <div className="productCard--content">
      <div className="productCard--left">
        <h4>{ name }</h4>

        <div className='productCard--left__buttons'>
            <Bouton size='small'>Add to Cart</Bouton>
            {/* <Bouton size='small'>Remove to Cart</Bouton> */}
            <Bouton rounded><Icon name='eye' size='medium' color='orangeWhite'/></Bouton>
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