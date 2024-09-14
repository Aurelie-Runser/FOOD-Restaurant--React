import { ReactNode } from 'react';
import Icon from '../icons/Icon';

import './ServiceCard.css'

interface ServiceCard {
    children: ReactNode,
    icon: string,
    title: string,
}

export default function ServiceCard({children, icon, title}:ServiceCard) {
  return (
    <div className='serviceCard'>
      <div className="serviceCard--icon">
        <Icon name={icon} color='orange' size='big'/>
      </div>
      <h4>{title}</h4> 
      <p>{children}</p>
    </div>
  )
}