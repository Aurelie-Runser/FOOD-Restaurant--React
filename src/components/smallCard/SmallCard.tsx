import Icon from '../icons/Icon';

import './SmallCard.css'

interface SmallCard {
    title: string,
    img: string,
    text: string,
    price: number,
}

export default function SmallCard({title, img, text, price}:SmallCard) {
  return (
    <div className="smallCard">
        <div className="smallCard--bg">
            <div className="smallCard--content">
                <h4>{title}</h4>

                <p className="smallCard--text">{text}</p>
                <p className="h5 smallCard--price">{price}</p>
            </div>

            <div className='smallCard--buttons'>
                <Icon name="fleche" size="medium" color="black" />
                <Icon name="fleche" size="medium" color="white" gauche />
            </div>
        </div>

        <div className="smallCard--img">
            <img src={'/img/'+img+'.webp'} alt={"photo de "+title} />
        </div>
    </div>
  )
}