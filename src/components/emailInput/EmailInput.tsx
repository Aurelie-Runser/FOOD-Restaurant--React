import { useState, useCallback } from 'react';
import Icon from '../icons/Icon';
import Notif from '../notif/Notif';
import './EmailInputBig.css';
import './EmailInputSmall.css';

export default function EmailInput({ size }: { size?: string }) {
  const [notifSubScribe, setNotifSubscribe] = useState(false);
  const [email, setEmail] = useState("");

  // inscription à la newsletter
  const formSubmit = useCallback((e: any) => {
    e.preventDefault();
    const formulaire = new FormData(e.target);
    const subscribe = formulaire.get("subscriber"); // on récupère la valeur du champ

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof subscribe === 'string' && emailRegex.test(subscribe)) { // on verifie que la valeur est bien une adresse mail
      const emailPart = subscribe.split('@')[0];
      setEmail(emailPart); // on enregistre l'email
      setNotifSubscribe(true); // on affiche le notif
    }
  }, []);

  return (
    <>
      {size === 'big' ? (
        <form onSubmit={formSubmit} className='emailInput-big'>
          <input type="email" name="subscriber" placeholder="Enter your email..." required className='p emailInput-big--input'/>
          <button className='emailInput-big--button h5'>Subscribe</button>
        </form>
      ) : (
        <form onSubmit={formSubmit} className='emailInput-small'>
          <input type="email" name="subscriber" placeholder="Enter your email..." required className='p-small emailInput-small--input'/>
          <button type='submit' className='emailInput-small--button'>
            <Icon name="chevron" size="medium" color="orangeWhite" />
          </button>
        </form>
      )}

      {notifSubScribe && (
        <Notif onClose={() => setNotifSubscribe(false)} duration={5000}>
          🎉 Bienvenue <strong>{email}</strong> ! 😊<br />
          Ton inscription à notre newsletter a bien fonctionné.
        </Notif>
      )}
    </>
  );
}
