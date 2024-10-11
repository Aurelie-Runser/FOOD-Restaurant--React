import { useRouteError } from "react-router-dom"
import Bouton from "../../components/bouton/Bouton"

import "./Error.css"

export default function Error() {
    const error = useRouteError()

    return <div className="errorPage">
      <h1>Erreur {error?.status}</h1>

      <p>{error?.data}</p>

      <Bouton size="big" link="/">Back Home</Bouton>
    </div>
  }