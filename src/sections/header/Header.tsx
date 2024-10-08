import HeaderSearch from './HeaderSearch'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {

  const links = [
    ["home", "/"],
    ["menu", "/menu"],
    ["service", "/#services"],
    ["shope", "/#shope"]
  ]

  return (
    <header className='header'>
      <div className='header--content'>
        <img className='header--logo' src="/img/Logo.png" alt="Logo du restaurant FOOD" />

        <nav>
          <ul className='h5 header--liste'>
            {links.map(item => (
              <li key={item[0]}>
                <NavLink to={item[1]} end>
                  {item[0]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <HeaderSearch/>
      </div>
      
    </header>
  )
}