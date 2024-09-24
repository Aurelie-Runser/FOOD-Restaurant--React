import Hero from '../sections/hero/Hero'
import Infos from '../components/infos/Infos'
import Products from '../sections/products/Products'
import Services from '../sections/services/Services'
import Reviews from '../sections/reviews/Reviews'
import Subscribe from '../sections/subscribe/Subscribe'

export default function Home() {

  return <>
    <Hero/>
    <Infos/>
    <Products/>
    <Services/>
    <Reviews/>
    <Subscribe/>
  </>
}