import EmailInput from '../../components/emailInput/EmailInput'

import './Subscribe.css'

export default function Subscribe() {

  return (
    <section id='subscribe' className='subscribe'>
        <img src="/img/Burger.png" alt="photo d'un burger" />

        <div className='subscribe--content'>
            <h3>Subcribe to our newsletter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</p>
            <EmailInput size='big'/>
        </div>
    </section>
  )
}