import ReviewsCarrousel from '../../components/reviewsCarrousel/ReviewsCarrousel'
import Title from '../../components/title/Title'

import './Reviews.css'

export default function Reviews() {

  return (
    <section id='reviews' className='reviews'>
      <Title subTitle='Testimonials'>Our happy client says</Title>
      
      <div className='reviews--content'>
        <ReviewsCarrousel/>

        <img src="/img/FritesBurgers.webp" alt="Photo d'un menu burger frite." />
      </div>
    </section>
  )
}