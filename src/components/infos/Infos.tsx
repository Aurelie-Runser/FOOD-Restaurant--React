import Icon from '../icons/Icon';

import './Infos.css'

export default function Infos() {

  return (
    <section className='infos'>
      <div className='infos--section'>
        <div className='infos--icon'>
          <Icon name='heure' color='orangeWhite' size='medium'/>
        </div>
        <h5>Today 10:00am - 10:00pm</h5>
        <p className="p-small">Working time</p>
      </div>

      <hr className='infos--separateur' />

      <div className='infos--section'>
        <div className='infos--icon'>
          <Icon name='ping' color='orangeWhite' size='medium'/>
        </div>
        <h5>Washington, D.C., DC,USA</h5>
        <p className="p-small">Our Location</p>
      </div>

      <hr className='infos--separateur' />

      <div className='infos--section'>
        <div className='infos--icon'>
          <Icon name='phone' color='orangeWhite' size='medium'/>
        </div>
        <h5>+0123 456 7891</h5>
        <p className="p-small">Phone Number</p>
      </div>
    </section>
  )
}