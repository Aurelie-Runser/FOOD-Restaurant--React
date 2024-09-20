import { useFetch } from '../../hooks/useFetch'
import ProductCard from '../productCard/ProductCard'
import './GridCard.css'

// const listProduct = [
//     {
//         name: "Chicken Pot Pie",
//         img: "ChickenPotPie",
//         price: 25.00,
//         note: 4.8,
//         origine: ["Americaine"],
//         allergies: ["Peanut"],
//         goal: ["Muscle Gain"],
//         dietaryInfo : ["Vegan", "Gluten-Free"],
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus dolore eligendi molestiae quaerat delectus quo voluptas, unde ea, pariatur natus, aut consectetur laboriosam sapiente corporis illo error non provident.",
//         ingredients: [
//             {name: "Tomatoes", quantity: 2, unit: "pieces"},
//             {name: "Pasta", quantity: 125, unit: "grams"}
//         ],
//         instructions: [
//             "Stir-fry vegetables in a wok",
//             "Chop vegetables",
//         ]
//     },
//     {
//         name: "Enchilade",
//         img: "Enchilade",
//         price: 25.50,
//         note: 5,
//         origine: ["Mexican"],
//         allergies: ["Dairy", "Shellfish"],
//         goal: ["Muscle Gain"],
//         dietaryInfo : ["Gluten-Free"],
//         text: "Cupcake ipsum dolor sit amet tart sugar plum carrot cake pie. Wafer sweet sugar plum danish I love sesame snaps sweet roll cake. Wafer cake danish I love I love. Sweet roll cookie jujubes shortbread cheesecake oat cake jujubes halvah.",
//         ingredients: [
//             {name: "Pasta", quantity: 125, unit: "grams"}
//         ],
//         instructions: [
//             "Chop vegetables",
//             "Stir-fry vegetables in a wok"
//         ]
//     },
//     {
//         name: "Green Beans",
//         img: "GreenBeans",
//         price: 12.00,
//         note: 4.9,
//         origine: ["Internationnal"],
//         allergies: ["Dairy"],
//         goal: ["Healthy Eating"],
//         dietaryInfo : ["Vegan", "Low Carb"],
//         text: "The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.",
//         ingredients: [
//             {name: "Tomatoes", quantity: 2, unit: "pieces"},
//             {name: "Pasta", quantity: 250, unit: "grams"}
//         ],
//         instructions: [
//             "Boil pasta until al dente"
//         ]
//     },
//     {
//         name: "Green Salad",
//         img: "GreenSalad",
//         price: 15.00,
//         note: 4.6,
//         origine: ["Japanese"],
//         allergies: ["Shellfish"],
//         goal: ["Healthy Eating"],
//         dietaryInfo : ["Low Carb"],
//         text: "Mutation observer developer avocado budget native domain database yarn. Linked list API hardcoded functional programming meta-programming documentation driven vaporware distributed systems. Spaghetti code TOML protected data store functional programming programmer class vaporware singleton void.",
//         ingredients: [
//             {name: "Pasta", quantity: 250, unit: "grams"}
//         ],
//         instructions: [
//             "Cook ground beef in a pan",
//             "Stir-fry vegetables in a wok",
//             "Chop vegetables",
//         ]
//     },
//     {
//         name: "Gyro Sandwich",
//         img: "GyroSandwich",
//         price: 15.00,
//         note: 4.9,
//         origine: ["Itilian"],
//         allergies: ["Peanut"],
//         goal: ["Weight Loss"],
//         dietaryInfo : ["Vegan"],
//         text: "Action manic shooter flip-screen Animal Crossing time attack Rayman SimCity vaporware. Mode God Mode Gears of War Battlefield Adventure game exploit Own. Nintendo DS jrpg cutscene A Tom Clancy's Splinter Cell bug Game Boy Tom Clancy's Ghost Recon. JRPG kill screen Deathmatch epistle shovelware aiming down sights recoi. AFK character design dpm Spyro Sony console PlayStation Vita gib Halo 2.",
//         ingredients: [
//             {name: "Tomatoes", quantity: 4, unit: "pieces"},
//             {name: "Chicken Breast", quantity: 2.5, unit: "kilograms"}
//         ],
//         instructions: [
//             "Boil pasta until al dente",
//             "Cook ground beef in a pan"
//         ]
//     },
//     {
//         name: "Pizza",
//         img: "Pizza",
//         price: 18.00,
//         note: 5,
//         origine: ["Italian"],
//         allergies: ["Shellfish"],
//         goal: ["Weight Loss"],
//         dietaryInfo : ["Gluten-Free"],
//         text: "Pizza ipsum dolor amet chicken large philly chicken pork sausage hand tossed, steak philly steak sausage veniam Chicago style. Dolore ut aute dolore, ut buffalo sauce hand tossed mayo black olives broccoli aliqua fugiat philly chicken ad. Pesto beef steak labore marinara deserunt, aliquip esse ex mollit platter nulla ea sauteed onions. Peppers bacon & tomato deep crust, labore beef garlic veniam ullamco reprehenderit.",
//         ingredients: [
//             {name: "Tomatoes", quantity: 2, unit: "pieces"},
//             {name: "Chicken Breast", quantity: 2.5, unit: "kilograms"}
//         ],
//         instructions: [
//             "Cook ground beef in a pan"
//         ]
//     },
// ]

export default function GridCard({num}:{ num: number|undefined}) {

  const { loading, data, errors } = useFetch();
  console.log(loading)
  console.log(data)
  console.log(errors)

  return ( <>
    {loading && <svg style={{display: 'block', margin: 'auto'}} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="#F48E28"><animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="12" cy="12" r="3" fill="#F48E28"><animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="20" cy="12" r="3" fill="#F48E28"><animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle></svg>}
    { data &&
        <ul className='gridCard gridCard--product'>
        {data.map((p) => (
            <li key={p.img}>
                <ProductCard 
                    name={p.title}
                    img={p.imgSrc}
                    note={p.note}
                    price={p.prix}
                />
            </li>
        )).slice(0, num)}
        </ul>
    }
  </>)
}