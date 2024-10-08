import { CartContext } from "../../hooks/useCart";
import GridCard from "../../components/gridCard/GridCard";
import { useContext } from "react";
import Bouton from "../../components/bouton/Bouton";

import "./Cart.css"

export default function Cart() {
  const {cartPrice} = useContext(CartContext)

  return <>
      <h1 className="page--title">My Cart</h1>

      { cartPrice > 0 && <>
        <GridCard onlyInCart={true}/>

        <hr />

        <div className="cart--infos">
          <p className="cart--price">Price : <span>$ {cartPrice}</span></p>

          <div className="cart--buttons">
            <Bouton size="big">Buy</Bouton>
            <Bouton size="small" rounded>Empty my cart</Bouton>
          </div>
        </div>
       </> }

      { cartPrice == 0 && <div className="cart--empty">
        <p>Your cart is empty.</p>

        <Bouton size="big" link='/menu'>Add Menu to my cart</Bouton>
       </div> }
      


    
  </>
}
