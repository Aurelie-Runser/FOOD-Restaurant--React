import ProductCard from '../productCard/ProductCard'
import './GridCard.css'

const listProduct = [
    {
        name: "Chicken Pot Pie",
        img: "ChickenPotPie",
        price: 25.00,
        note: 4.8,
        origine: ["Americaine"],
        allergies: ["Peanut"],
        goal: ["Muscle Gain"],
        dietaryInfo : ["Vegan", "Gluten-Free"],
        text: "Lorem",
        ingredients: [
            {name: "Tomatoes", quantity: 2, unit: "pieces"},
            {name: "Pasta", quantity: 125, unit: "grams"}
        ],
        instructions: [
            "Stir-fry vegetables in a wok",
            "Chop vegetables",
        ]
    },
    {
        name: "Enchilade",
        img: "Enchilade",
        price: 25.50,
        note: 5,
        origine: ["Mexican"],
        allergies: ["Dairy", "Shellfish"],
        goal: ["Muscle Gain"],
        dietaryInfo : ["Gluten-Free"],
        text: "Lorem",
        ingredients: [
            {name: "Pasta", quantity: 125, unit: "grams"}
        ],
        instructions: [
            "Chop vegetables",
            "Stir-fry vegetables in a wok"
        ]
    },
    {
        name: "Green Beans",
        img: "GreenBeans",
        price: 12.00,
        note: 4.9,
        origine: ["Internationnal"],
        allergies: ["Dairy"],
        goal: ["Healthy Eating"],
        dietaryInfo : ["Vegan", "Low Carb"],
        text: "Lorem",
        ingredients: [
            {name: "Tomatoes", quantity: 2, unit: "pieces"},
            {name: "Pasta", quantity: 250, unit: "grams"}
        ],
        instructions: [
            "Boil pasta until al dente"
        ]
    },
    {
        name: "Green Salad",
        img: "GreenSalad",
        price: 15.00,
        note: 4.6,
        origine: ["Japanese"],
        allergies: ["Shellfish"],
        goal: ["Healthy Eating"],
        dietaryInfo : ["Low Carb"],
        text: "Lorem",
        ingredients: [
            {name: "Pasta", quantity: 250, unit: "grams"}
        ],
        instructions: [
            "Cook ground beef in a pan",
            "Stir-fry vegetables in a wok",
            "Chop vegetables",
        ]
    },
    {
        name: "Gyro Sandwich",
        img: "GyroSandwich",
        price: 15.00,
        note: 4.9,
        origine: ["Itilian"],
        allergies: ["Peanut"],
        goal: ["Weight Loss"],
        dietaryInfo : ["Vegan"],
        text: "Lorem",
        ingredients: [
            {name: "Tomatoes", quantity: 4, unit: "pieces"},
            {name: "Chicken Breast", quantity: 2.5, unit: "kilograms"}
        ],
        instructions: [
            "Boil pasta until al dente",
            "Cook ground beef in a pan"
        ]
    },
    {
        name: "Pizza",
        img: "Pizza",
        price: 18.00,
        note: 5,
        origine: ["Italian"],
        allergies: ["Shellfish"],
        goal: ["Weight Loss"],
        dietaryInfo : ["Gluten-Free"],
        text: "Lorem",
        ingredients: [
            {name: "Tomatoes", quantity: 2, unit: "pieces"},
            {name: "Chicken Breast", quantity: 2.5, unit: "kilograms"}
        ],
        instructions: [
            "Cook ground beef in a pan"
        ]
    },
]

export default function GridCard({num}:{ num: number}) {
  return (
    <ul className='gridCard gridCard--product'>
      {listProduct.map((p) => (
        <li>
            <ProductCard
                name={p.name}
                img={p.img}
                note={p.note}
                price={p.price}
            />
        </li>
      ))}
    </ul>
  )
}