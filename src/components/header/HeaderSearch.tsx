import Icon from '../icons/Icon';
import './Header.css'

export default function Header() {

  return <div className='header--search'>
        <div className='header--search__input'>
            <div>
                <Icon name='loupe'/>
            </div>
            <input className='p' type="text" size="15" placeholder="Search"/>
        </div>

        <span className="header--search__separation"></span>

        <div className='header--search__panier p2'>
            <div className='panier--notif'>2</div>
            <Icon name='sac' />
        </div>
    </div>
}