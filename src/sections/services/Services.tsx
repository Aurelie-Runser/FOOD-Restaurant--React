import Title from '../../components/title/Title'
import ServiceCard from '../../components/serviceCard/ServiceCard'

import './Services.css'

export default function Services() {

    const services = [
        {
            icon: 'couvertsCroises',
            title: 'Qualityfull Food',
            text: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.'
        },
        {
            icon: 'couverts',
            title: 'Healthy Food',
            text: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.'
        },
        {
            icon: 'camion',
            title: 'Fast Delivery',
            text: 'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.'
        }
    ]

  return (
    <section id='services' className='services'>
      <Title subTitle='Services'>Why choose our favorite food</Title>
      
      <ul className='services--content'>
        {services.map(s => (
          <li key={s.icon}>
            <ServiceCard icon={s.icon} title={s.title}>{s.text}</ServiceCard>
        </li>
        ))}
      </ul>
    </section>
  )
}