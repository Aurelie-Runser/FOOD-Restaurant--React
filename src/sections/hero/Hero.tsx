import Bouton from '../../components/bouton/Bouton'
import Icon from '../../components/icons/Icon'
import './Hero.css'
import './HeroLeft.css'

export default function Hero() {

    return (
        <div className='hero section'>
            <div className='hero--left'>
                <div className='hero--left__bike'>
                    <span className='h5'>Bike Delivery</span>
                    <img src="/img/BikeDelivery.jpg" alt="image d'un livreur" />
                </div>

                <h1 className='hero--left__title'>The fastest<br/>delivery<br/>in <span>your city</span></h1>
                <p className='hero--left__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum. </p>

                <div className='hero--left__buttons'>
                    <Bouton size='big' link='#'>Order Now</Bouton>

                    <button className='h4 hero--left__buttons-play'>
                        <Icon name='play' size='big' color='whiteOrange' shadow/>
                        Order Proccess
                    </button>

                </div>
            </div>
        </div>
    )
}