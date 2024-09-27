import { useParams} from "react-router-dom"
import { useOneProduct } from "../../hooks/useOneProduct"
import Bouton from "../../components/bouton/Bouton"
import Chargement from "../../components/Chargement"
import Icon from "../../components/icons/Icon"

import './Recette.css'

export default function Recette() {
  const {id} = useParams()
  const recipeId = Number(id)

  const { loading, data, errors } = useOneProduct(recipeId);

  // Gérer les erreurs, si besoin
  if (errors) {
    return <p className="error">Erreur : {errors.message}</p>;
  }

  if (loading) {
    return <Chargement />
  }

  return <>
    <div className="recette">
      <div className="recette--butonBack">
        <Bouton size="small" link='/recettes'>Back to Menu</Bouton>
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
              <Bouton size='big' rounded>Add to Cart</Bouton>
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
            <div className="alergy">
              <span className="divers__type">Allergies : </span>
              <ul className="divers__liste">
                {data.allergies.map((al) => (
                  <li key={al.allergy} className="liste-item">{ al.allergy }</li>
                ))}
              </ul>
            </div>
            <div className="dietary">
              <span className="divers__type">Dietary Info : </span>
              <ul className="divers__liste">
                {data.dietaryInfo.map((al) => (
                    <li key={al.dietary_info} className="liste-item">{ al.dietary_info }</li>
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
          <Bouton link={'/recettes/'+(recipeId-1)} size="big" rounded>Previous Menu</Bouton>
          <Bouton link={'/recettes/'+(recipeId+1)} size="big" rounded>Next Menu</Bouton>
        </div>
        
      </div>
    </div>
  </>
}