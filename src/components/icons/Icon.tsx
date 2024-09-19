import './Icon.css'

interface iconProps {
    name: string,
    gauche: boolean | null,
    size: string | null,
    color: string | null,
    shadow: boolean | null,
}

export default function Icon({name, gauche, size, color, shadow}:iconProps) {

    let styleIcon = 'icon'

    if (gauche) styleIcon = styleIcon + ' gauche'

    if(size == 'medium') styleIcon = styleIcon + ' icon-medium'
    else if(size == 'big') styleIcon = styleIcon + ' icon-big'
    else styleIcon = styleIcon + ' icon-small'

    if(color == 'black') styleIcon = styleIcon + ' icon-black'
    else if (color == 'orange') styleIcon = styleIcon + ' icon-orange'
    // icon blanc fond orange
    else if (color == 'orangeWhite') styleIcon = styleIcon + ' icon-orangeWhite'
    // icon orange fond blanc
    else if (color == 'whiteOrange') styleIcon = styleIcon + ' icon-whiteOrange'
    else styleIcon = styleIcon + ' icon-white'

    if (shadow) styleIcon = styleIcon + ' icon-shadow'

    const iconChoose = ()=>{
        switch (name) {
            case 'camion':
                return <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck">
                    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/>
                    <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/>
                    <circle cx="7" cy="18" r="2"/>
                    <path d="M15 18H9"/>
                    <circle cx="17" cy="18" r="2"/>
                </svg>

            case 'chevron':
                return <svg width="100%" height="100%" viewBox="0 0 12 22" fill="none" stroke="inherit">
                    <path d="M1 21L11 11L1 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            case 'couvertsCroises':
                return <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils-crossed">
                    <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/>
                    <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/>
                    <path d="m2.1 21.8 6.4-6.3"/>
                    <path d="m19 5-7 7"/>
                </svg>

            case 'couverts':
                return <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils">
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                    <path d="M7 2v20"/>
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                </svg>
  

            case 'etoile':
                return <svg width="100%" height="100%" viewBox="0 0 22 22" fill="inherit" stroke="inherit">
                    <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
  
            case 'eye':
                return <svg width="100%" height="100%" viewBox="0 0 24 24">
                    <path fill="inherit" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/>
                </svg>
            
            case 'facebook':
                return <svg width="100%" height="100%" viewBox="0 0 24 24" fill="inherit" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
            
            case 'fleche':
                return <svg width="100%" height="100%" viewBox="0 0 21 22" fill="none" stroke="inherit">
                    <path d="M1 11H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 1L20 11L10 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            case 'heure':
                return <svg width="100%" height="100%" viewBox="0 0 22 22" fill="none" stroke="inherit">
                <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 5V11L15 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            case 'insta':
                return <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
            
            case 'linkedin':
                return <svg width="100%" height="100%" viewBox="0 0 24 24" fill="inherit" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            
            case 'loupe':
                return <svg width="100%" height="100%" viewBox="0 0 27 28" fill="none" stroke="inherit">
                    <path d="M10.5 21C15.7467 21 20 16.5228 20 11C20 5.47715 15.7467 1 10.5 1C5.25329 1 1 5.47715 1 11C1 16.5228 5.25329 21 10.5 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26 27L18 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            case 'phone':
                return <svg width="100%" height="100%" viewBox="0 0 23 23" fill="none" stroke="inherit">
                    <path d="M13.9381 5C14.9149 5.19057 15.8125 5.66826 16.5162 6.37194C17.2199 7.07561 17.6976 7.97326 17.8881 8.95L13.9381 5ZM13.9381 1C15.9674 1.22544 17.8597 2.13417 19.3044 3.57701C20.749 5.01984 21.6601 6.91101 21.8881 8.94L13.9381 1ZM20.8881 16.92V19.92C20.8892 20.1985 20.8322 20.4742 20.7206 20.7293C20.6091 20.9845 20.4454 21.2136 20.2402 21.4019C20.035 21.5901 19.7927 21.7335 19.5289 21.8227C19.265 21.9119 18.9855 21.9451 18.7081 21.92C15.631 21.5856 12.6751 20.5341 10.0781 18.85C7.66194 17.3147 5.61345 15.2662 4.07812 12.85C2.38809 10.2412 1.33636 7.27099 1.00812 4.18C0.983127 3.90347 1.01599 3.62476 1.10462 3.36162C1.19324 3.09849 1.33569 2.85669 1.52288 2.65162C1.71008 2.44655 1.93792 2.28271 2.19191 2.17052C2.44589 2.05833 2.72046 2.00026 2.99812 2H5.99812C6.48342 1.99522 6.95391 2.16708 7.32188 2.48353C7.68985 2.79999 7.93019 3.23945 7.99812 3.72C8.12474 4.68007 8.35957 5.62273 8.69812 6.53C8.83266 6.88792 8.86178 7.27691 8.78202 7.65088C8.70227 8.02485 8.51698 8.36811 8.24812 8.64L6.97812 9.91C8.40167 12.4135 10.4746 14.4864 12.9781 15.91L14.2481 14.64C14.52 14.3711 14.8633 14.1858 15.2372 14.1061C15.6112 14.0263 16.0002 14.0555 16.3581 14.19C17.2654 14.5286 18.2081 14.7634 19.1681 14.89C19.6539 14.9585 20.0975 15.2032 20.4146 15.5775C20.7318 15.9518 20.9003 16.4296 20.8881 16.92Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            
            case 'ping':
                return <svg width="100%" height="100%" viewBox="0 0 20 24" fill="none" stroke="inherit">
                    <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            
            case 'play':
                return <svg width="100%" height="100%" viewBox="0 0 24 24" fill="inherit" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
            
            case 'sac':
                return <svg width="100%" height="100%" viewBox="0 0 23 25" fill="none" stroke="inherit">
                    <path d="M4.5 1L1 5.6V21.7C1 22.31 1.24583 22.895 1.68342 23.3263C2.121 23.7577 2.71449 24 3.33333 24H19.6667C20.2855 24 20.879 23.7577 21.3166 23.3263C21.7542 22.895 22 22.31 22 21.7V5.6L18.5 1H4.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 6H22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 10C16 11.3261 15.5259 12.5979 14.682 13.5355C13.8381 14.4732 12.6935 15 11.5 15C10.3065 15 9.16193 14.4732 8.31802 13.5355C7.47411 12.5979 7 11.3261 7 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
      
            case 'twitter':
                return <svg width="100%" height="100%" viewBox="0 0 24 24" fill="inherit" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
        }
    }

    return <div className={styleIcon}>
        {iconChoose()}
    </div>
}