import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAllProductsName } from '../../hooks/useAllProductsName';
import { CartContext } from '../../hooks/useCart';
import Icon from '../../components/icons/Icon';
import './Header.css'

export default function Header() {
    const {cart} = useContext(CartContext)

    const {loading, data, errors} = useAllProductsName()

    const [productSearch, setProductSearch] = useState("")

    const ProductsResulte = data?.filter((d) => d.title.toLowerCase().includes(productSearch.toLowerCase()))

    // fonction pour ajouter un delai avant de cacher la liste de recette, afni de pouvoir cliquer dessus
    const onBlurProductSearch = ()=>{
        setTimeout(() => {
            setProductSearch('');
        }, 500);
    };

    return <div className='header--search'>
        <div className='header--search__input'>
            <div>
                <Icon name='loupe'/>
            </div>
            <input className='p' type="text" size={15} placeholder="Search" value={productSearch} onChange={(e) => setProductSearch(e.target.value)} onBlur={onBlurProductSearch}/>

            {/* Liste des recettes correspondant à la recherche de l'utilisateur */}
            {productSearch && <ul className="header--search__input-liste">
                {loading && <p className='header--search__input-loading'>Chargement...</p>}

                {ProductsResulte && ProductsResulte
                    .map((d) => (
                        <li key={d.recipe_id} className="header--search__input-item">
                            <NavLink to={`/recettes/${d.recipe_id}`}>{d.title}</NavLink>
                        </li>
                    ))
                }

                {ProductsResulte?.length==0 && <p className='header--search__input-noResult'>Aucune recette ne correspond à votre recherche.</p>}
                {errors && <p className='header--search__input-noResult' style={{color: 'red'}}>Une erreur est survenue lors de la récupération des recettes.</p>}
            </ul>}
        </div>

        <span className="header--search__separation"></span>

        {/* Panier de l'utilisateur */}
        <NavLink to='/cart' className='header--search__panier p2'>
            {cart.length > 0 && <div className='panier--notif'>{cart.length}</div> }
            <Icon name='sac' />
        </NavLink>
    </div>
}