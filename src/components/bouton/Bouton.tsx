import { ReactNode } from 'react';

import './Bouton.css'

interface Bouton {
    children: ReactNode,
    size: string | undefined,
    rounded: boolean | undefined
}

export default function Bouton({children, size, rounded}:Bouton) {
    let boutonClass = 'bouton'

    if(rounded) boutonClass += ' bouton-rounded'

    if(size == 'small') boutonClass += ' bouton-small p-small'
    else if(size == 'big') boutonClass += ' bouton-big h5'

    return (
        <a href="#">
            <button className={boutonClass} >
                <span>
                    {children}
                </span>
            </button>
        </a>
    )
}