import { useContext, useState } from "react";
import { CartContext } from "../../hooks/useCart";
import GridCard from "../../components/gridCard/GridCard";
import Bouton from "../../components/bouton/Bouton";
import Notif from "../../components/notif/Notif";

import "./Cart.css"

export default function Cart() {
  const {cartPrice, actionCart} = useContext(CartContext)
  const [notifSubScribe, setNotifSubscribe] = useState(false);

  const [notifText, setNotifText] = useState('')

  function emptyCart(buy: boolean){
    if (buy) setNotifText('Your order was taken into account.<br/>Thank you for your order 😊')
    else setNotifText('Your cart has been emptied successfully.')
    
    setNotifSubscribe(true);

    actionCart(0, 0, 'reset')
    window.scrollTo({ top: 0});
  }

  return <>
      <h1 className="page--title">My Cart</h1>

      { cartPrice > 0 && <>
        <GridCard onlyInCart={true}/>

        <hr />

        <div className="cart--infos">
          <p className="cart--price">Price : <span>$ {cartPrice}</span></p>

          <div className="cart--buttons">
            <Bouton size="big" action={() => emptyCart(true)}>Buy</Bouton>
            <Bouton size="small" rounded action={() => emptyCart(false)}>Empty my cart</Bouton>
          </div>
        </div>
       </> }

      { cartPrice == 0 && <div className="cart--empty">
        <p>Your cart is empty.</p>

        <Bouton size="big" link='/menu'>Add Menu to my cart</Bouton>
       </div> }
      
       { notifSubScribe && (
        <Notif onClose={() => setNotifSubscribe(false)} duration={5000}>
          <span dangerouslySetInnerHTML={{ __html: notifText }}></span>
        </Notif>
      )}
    
  </>
}
