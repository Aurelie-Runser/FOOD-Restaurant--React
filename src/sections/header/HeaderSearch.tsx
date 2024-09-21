import { useState } from 'react';
import { useAllProductsName } from '../../hooks/useAllProductsName';
import Icon from '../../components/icons/Icon';
import './Header.css'

export default function Header() {

    const {loading, data, errors} = useAllProductsName()

    const [productSearch, setProductSearch] = useState("")

    const ProductsResulte = data?.filter((d) => d.title.toLowerCase().includes(productSearch.toLowerCase()))

    return <div className='header--search'>
        <div className='header--search__input'>
            <div>
                <Icon name='loupe'/>
            </div>
            <input className='p' type="text" size={15} placeholder="Search" value={productSearch} onChange={(e) => setProductSearch(e.target.value)} onBlur={() => setProductSearch("")}/>

            {/* Liste des recettes correspondant à la recherche de l'utilisateur */}
            {productSearch && <ul className="header--search__input-liste">
                {loading && <p className='header--search__input-loading'>Chargement...</p>}

                {ProductsResulte
                    .map((d) => (
                        <li key={d.id} className="header--search__input-item">
                            <a href={`/recettes/${d.imgSrc}`}>{d.title}</a>
                        </li>
                    ))
                }

                {ProductsResulte.length==0 && <p className='header--search__input-noResult'>Aucune recette ne correspond à votre recherche.</p>}
                {errors && <p className='header--search__input-noResult'>Une erreur est survenu lors de la récupération des recetttes.</p>}
            </ul>}
        </div>

        <span className="header--search__separation"></span>

        {/* Panier de l'utilisateur */}
        <div className='header--search__panier p2'>
            <div className='panier--notif'>2</div>
            <Icon name='sac' />
        </div>
    </div>
}