import {Routes,Route} from 'react-router-dom';
import HeaderSearch from './HeaderSearch'
import './Header.css'

export default function Header() {

  const links = [
    ["home", "/"],
    ["menu", "/recettes"],
    ["service", "/#services"],
    ["shope", "/"]
  ]

  return (
    <header>
      <div className='header--content'>
        <img className='header--logo' src="/img/Logo.png" alt="Logo du restaurant FOOD" />

        <nav>
          <ul className='h5 header--liste'>
            {links.map(item => (
              <li key={item[0]}>
                <a href={item[1]}>
                  {item[0]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <HeaderSearch/>
      </div>
      
    </header>
  )
}