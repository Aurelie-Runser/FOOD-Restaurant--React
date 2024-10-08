import { useParams} from "react-router-dom"
import { useContext } from "react"
import { useOneProduct } from "../../hooks/useOneProduct"
import { CartContext } from "../../hooks/useCart"
import Bouton from "../../components/bouton/Bouton"
import Chargement from "../../components/Chargement"
import Icon from "../../components/icons/Icon"

import './Recette.css'

export default function Recette() {
  const {cart, actionCart} = useContext(CartContext)

  const {id} = useParams()
  const recipeId = Number(id)

  const handleAddToCart = () => {
    actionCart(recipeId, 'add');
  };

  const handleRemoveFromCart = () => {
    actionCart(recipeId, 'supp');
  };

  const { loading, data, errors } = useOneProduct(recipeId);

  // Gérer les erreurs, si besoin
  if (errors) {
    return <p className="error">Erreur : {errors.message}</p>;
  }

  if (loading) {
    return <Chargement />
  }

  else if(data){
    return <>
      <div className="recette">
        <div className="recette--butonBack">
          <Bouton size="small" link='/menu'>Back to Menu</Bouton>
        </div>
        
        <div className="recette--content">
          <div className="recette--img">
            <img src={'/img/'+data.imgSrc+'.jpg'} alt={" photo du plat : "+data.title} />
          </div>

          <div className="recette--donnees">
            <h1>{data.title}</h1>

            <div className="recette--donnees__rapide">
              <div className="h5 rapide--info">
                <span className="info__prix">$ {data.prix}</span>
                <span className="info__note"><Icon name='etoile' size='small' color='whiteOrange'/> {data.note}</span>
              </div>

              <div className="recette--donnes__button">
                {cart.includes(recipeId) ?
                  <Bouton size='small' rounded action={handleRemoveFromCart}>Remove to Cart</Bouton>
                  :
                  <Bouton size='big' rounded action={handleAddToCart}>Add to Cart</Bouton>
                }
              </div>
            </div>

            <div className="recette--donnees__divers">
              <div className="cuisine">
                <span className="divers__type">Origine : </span>
                <span className="divers__info">{ data.cuisine_name }</span>
              </div>
              <div className="goal">
                <span className="divers__type">Goal : </span>
                <span className="divers__info">{ data.goal_name }</span>
              </div>
              <div className="dietary">
                <span className="divers__type">Dietary Info : </span>
                <ul className="divers__liste">
                  {data.dietaryInfo.map((al) => (
                      <li key={al.dietary_info} className="liste-item">{ al.dietary_info }</li>
                  ))}
                </ul>
              </div>
              <div className="alergy">
                <span className="divers__type">Allergies : </span>
                <ul className="divers__liste">
                  {data.allergies.map((al) => (
                    <li key={al.allergy} className="liste-item">{ al.allergy }</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="recette--donnees__des">
              {data.des}
            </p>

            <div className="recette--donnees__ingredients">
              <h2 className="recette--subtitle">Ingredients</h2>

              <table className="ingredients__liste">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {data.ingredients.map((i) => (
                    <tr key={i.name}>
                      <th scope="row">{i.name}</th>
                      <td>{i.quantity}</td>
                      <td>{i.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="recette--donnees__instructions">
              <h2 className="recette--subtitle">Instructions</h2>

              <ol className="instructions__liste">
                {data.instructions.map((i)=>(
                  <li key={i.StepInstruction}>
                    {i.StepInstruction}
                  </li>
                ))}
              </ol>
            </div>

          </div>

          <div className="recette--donnees__autres">
            <Bouton link={'/menu/'+(recipeId == 1 ? 6 : recipeId-1)} size="big" rounded>Previous Menu</Bouton>
            <Bouton link={'/menu/'+(recipeId == 6 ? 1 : recipeId+1)} size="big" rounded>Next Menu</Bouton>
          </div>
          
        </div>
      </div>
    </>
  }
}