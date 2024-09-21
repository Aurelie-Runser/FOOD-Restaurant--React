import SmallCard from '../../components/smallCard/SmallCard'
import './HeroRight.css'

const smallCardContent = [
    {
        img: 'Burger',
        title: 'Burger',
        text: 'Mushroom Sauce',
        price: 5.15,
    },
    {
        img: 'FoodCombo',
        title: 'Food Combo',
        text: 'Mushroom Sauce',
        price: 9.15,
    },
    {
        img: 'Pizza',
        title: 'Pizza',
        text: 'Mushroom Sauce',
        price: 6.15,
    },
    {
        img: 'Cake',
        title: 'Cake',
        text: 'Mushroom Sauce',
        price: 5.15,
    }
]

export default function HeroRight() {

    return (
        <div className='hero--right'>
            <div className="hero--right__bg"></div>

            <ul className='hero--right__grid'>
                {smallCardContent.map((p) => (
                    <li key={p.title}>
                        <SmallCard 
                            title={p.title}
                            img={p.img}
                            text={p.text}
                            price={p.price}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}