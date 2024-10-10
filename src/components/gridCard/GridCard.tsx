import { useContext, useEffect, useState } from 'react'

import { CartContext } from '../../hooks/useCart';
import { useAllProducts  } from '../../hooks/useAllProducts'
import ProductCard from '../productCard/ProductCard'
import Bouton from '../../components/bouton/Bouton'
import Icon from '../../components/icons/Icon'
import Chargement from '../Chargement'
import { Filters } from '../../interfaces/Filters';
import { ProductForCard } from '../../interfaces/ProductForCard';

import './GridCard.css'

export default function GridCard({num, filters, onlyInCart}:{ num?: number, filters?:Filters, onlyInCart?:boolean}) {
  const {cart} = useContext(CartContext)
  const { loading, data, errors } = useAllProducts();

  const [numProduct, setNumProduct] = useState(num || 0)
  const [showButton, setShowButton] = useState(false)
  const [filteredData, setFilteredData] = useState<ProductForCard[]>([]);

  useEffect(() => {
    // si la liste n'affiche que les recettes dans le panier
    if (data && onlyInCart) {
      const dataInCart = data.filter(d =>
        cart.includes(d.recipe_id)
      )
      setNumProduct(dataInCart.length);
      setFilteredData(dataInCart)
    }
    else if (data){
      setFilteredData(data)
      
      // si la liste n'a pas de nombre prédéfini, toutes les afficher
      if (!num) setNumProduct(data.length);
    }

  }, [loading, data, num]);

  // si les filtres sont utilisés
  useEffect(() => {
    if(data && filters){
      let dataFiltre = data
      
      if(filters.cuisine){
        const cuisineShow = filters.cuisine
          .filter(al => al.checked)
          .map(al => al.value);
        
        dataFiltre =
          cuisineShow[0] == 0 
            ? data 
            : data.filter((recette:ProductForCard) => recette.cuisine_id == cuisineShow[0]);
      }
      
      if(filters.goal){
        const goalShow = filters.goal
          .filter(al => al.checked)
          .map(al => al.value);

        dataFiltre =
          goalShow[0] == 0 
            ? dataFiltre 
            : dataFiltre.filter(recette => recette.goal_id == goalShow[0]);
      }
     
      if(filters.dietary_info){
        const dietaryShow = filters.dietary_info
          .filter(di => di.checked)
          .map(di => di.value);

        dataFiltre =
          dietaryShow.length == 0
            ? dataFiltre 
            : dataFiltre.filter(recette => dietaryShow.every(di => recette.dietary_info?.includes(di)))
      }
      
      if(filters.allergies){
        const allergiesShow = filters.allergies
          .filter(al => al.checked)
          .map(al => al.value);

        dataFiltre =
          allergiesShow.length == 0
            ? dataFiltre 
            : dataFiltre.filter(recette => !recette.allergies?.some(al => allergiesShow.includes(al)))
      }

      setNumProduct(dataFiltre?.length | 0);
      setFilteredData(dataFiltre)
    }
  }, [data, filters]);

  const moreProducts = ()=>{
    setNumProduct(n => n += 3)
  }

  useEffect(()=>{
    setShowButton(numProduct == filteredData?.length || filters ? false : true)
  }, [numProduct, filteredData])

  if(loading){
    return <Chargement/>
  }

  if (errors){
    return <p className='error'>Erreur : {errors.message}</p>
  }

  return <>
    {loading && <Chargement/>}
    
    { filteredData &&
      <>
        <ul className='gridCard gridCard--product'>
          {filteredData.map((p) => (
              <li key={p.recipe_id}>
                  <ProductCard 
                      recipe_id={p.recipe_id}
                      title={p.title}
                      imgSrc={p.imgSrc}
                      note={p.note}
                      prix={p.prix}
                  />
              </li>
          )).slice(0, numProduct)}
        </ul>

        { showButton &&
          <div className='products--button' onClick={moreProducts}>
            <Bouton size='big' rounded icon>
              See More Products
              <Icon name='chevron' size="medium" color='whiteOrange'/>
            </Bouton>
          </div>
        }
      </>
    }

    { filteredData.length == 0 && 
      <>
        { onlyInCart
          ? <p className='gridCard--aucune'>No menu in your Cart.</p>
          : <p className='gridCard--aucune'>No menu matches your selection.</p>
        }
      </>
    }
  </>
}