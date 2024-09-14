import { ReactNode } from 'react';
import './ReviewCard.css'

interface ReviewCard {
    children: ReactNode,
    pp: string,
    name: string,
    job: string
}

export default function ReviewCard({children, pp, name, job}:ReviewCard) {
  return (
    <div className='reviewsCard'>
        <div className='reviewsCard--writer'>
            <img src={pp} alt="" />
            <div className='reviewsCard--writer__info'>
                <p className='h5'>{name}</p>
                <p className='p-small'>{job}</p>
            </div>
        </div>

        <p className='reviewsCard--review'>{children}</p>
    </div>
  )
}