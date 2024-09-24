import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import './Hero.css'

export default function Hero() {

    return (
        <div className='hero'>
            <HeroLeft/>
            <HeroRight/>
        </div>
    )
}