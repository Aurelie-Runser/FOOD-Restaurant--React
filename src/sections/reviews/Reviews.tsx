import ReviewCard from '../../components/reviewCard/reviewCard'
import Title from '../../components/title/Title'
import Icon from '../../components/icons/Icon';

import './Reviews.css'

export default function Reviews() {

  return (
    <section className='reviews'>
      <Title subTitle='Testimonials'>Our happy client says</Title>
      
      <div className='reviews--content'>
        <div className='reviewsCarrousel'>
          <div className='reviewsCarrousel--arrowLeft'>
            <Icon name="fleche" size="medium" gauche color="orangeWhite"/>
          </div>

          <ReviewCard
            name='Willians Jhone'
            job='CEO & Co-Founder'
            pp='/img/WilliansJhone.jpg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vel, maxime sit libero incidunt amet atque quos hic accusamus sapiente odio sunt aliquid laudantium nemo, minus, voluptate iste quod at?
          </ReviewCard>

          <div className='reviewsCarrousel--arrowRight'>
            <Icon name="fleche" size="medium" color="orangeWhite"/>
          </div>
        </div>

        <img src="/img/FritesBurgers.png" alt="Photo d'un menu burger frite." />
      </div>
    </section>
  )
}