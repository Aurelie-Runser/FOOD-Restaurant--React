import { ReactNode } from 'react';

import './Bouton.css'

interface Bouton {
    children: ReactNode,
    size: string | undefined,
    rounded: boolean | undefined
    link: string | undefined
    icon: boolean | undefined
}

export default function Bouton({children, size, rounded, link, icon}:Bouton) {
    let boutonClass = 'bouton'

    if(rounded) boutonClass += ' bouton-rounded'
    
    if(size == 'small') boutonClass += ' bouton-small p-small'
    else if(size == 'big') boutonClass += ' bouton-big h5'

    if(icon) boutonClass += ' bouton-icon'
    
    return link ? (
        <a href={link} className={boutonClass}>
            {children}
        </a>
    ) : (
        <button className={boutonClass} >
            {children}
        </button>
    )
}