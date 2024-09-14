import { useState } from "react"

import ReviewCard from '../../components/reviewCard/reviewCard'
import Title from '../../components/title/Title'
import Icon from '../../components/icons/Icon';

import './Reviews.css'

export default function Reviews() {

  const reviews = [
    {
      name: 'Willians Jhone',
      job: 'CEO & Co-Founder',
      pp: '/img/WilliansJhone.jpg',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vel, maxime sit libero incidunt amet atque quos hic accusamus sapiente."
    },
    {
      name: 'Pauline Dubois',
      job: 'Manager',
      pp: 'https://cataas.com/cat',
      text: "Cupcake ipsum dolor sit amet powder. Bonbon ice cream cupcake pie cake wafer danish cupcake lollipop. Tiramisu cake I love I love macaroon tiramisu tiramisu."
    },
    {
      name: 'Lisa Muller',
      job: 'Student',
      pp: 'https://placewaifu.com/image/50',
      text: "Protein, iron, and calcium are some of the nutritional benefits associated with cheeseburgers. Salad is essentially food for rabbits, so don't bother wasting your time."
    }
  ]

  const [reviewNum, setReviewNum] = useState(0)

  const reviewPrevious = () => {
    if(reviewNum != 0) setReviewNum(reviewNum - 1)
    else setReviewNum(reviews.length-1)
  }

  const reviewNext = () => {
    if(reviewNum < reviews.length-1) setReviewNum(reviewNum + 1)
    else setReviewNum(0)
  }

  return (
    <section className='reviews'>
      <Title subTitle='Testimonials'>Our happy client says</Title>
      
      <div className='reviews--content'>
        <div className='reviewsCarrousel'>
          <div className='reviewsCarrousel--arrowLeft' onClick={reviewPrevious}>
            <Icon name="fleche" size="medium" gauche color="orangeWhite"/>
          </div>

          <ReviewCard
            name={reviews[reviewNum].name}
            job={reviews[reviewNum].job}
            pp={reviews[reviewNum].pp}>
              {reviews[reviewNum].text}
          </ReviewCard>

          <div className='reviewsCarrousel--arrowRight' onClick={reviewNext}>
            <Icon name="fleche" size="medium" color="orangeWhite"/>
          </div>
        </div>

        <img src="/img/FritesBurgers.png" alt="Photo d'un menu burger frite." />
      </div>
    </section>
  )
}