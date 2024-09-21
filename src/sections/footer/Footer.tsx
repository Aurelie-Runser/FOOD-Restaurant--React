import FooterCol from './FooterCol'
import './Footer.css'

export default function Footer() {

  const menuCol = [
    {
      logo: true,
      texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.",
      icons: ["facebook", "twitter", "linkedin", "insta"]
    },
    {
      title:"Opening Restaurant",
      liens:[
        {txt: "Sat-Wet: 09:00am-10:00PM", href: ""},
        {txt: "Thursdayt: 09:00am-11:00PM", href: ""},
        {txt: "Friday: 09:00am-8:00PM", href: ""}
      ]
    },
    {
      title:"User Link",
      liens:[
        {txt: "About Us", href: "#"},
        {txt: "Contact Us", href: "#"},
        {txt: "Order Delivery", href: "#"},
        {txt: "Payment & Tex", href: "#"},
        {txt: "Terms of Services", href: "#"}
      ]
    },
    {
      title:"Contact Us",
      liens:[
        {txt: "1234 Country Club Ave", href: ""},
        {txt: "NC 123456, London, UK", href: ""},
        {txt: "+0123 456 7891", href: ""}
      ],
      email: true
    },
  ]

  return (
    <footer className='footer'>
      {
        menuCol.map((col, index) => (
          <FooterCol
            key={index}
            logo={col.logo}
            title={col.title}
            liens={col.liens}
            texte={col.texte}
            icons={col.icons}
            email={col.email}
          />
        ))
      }
    </footer>
  )
}