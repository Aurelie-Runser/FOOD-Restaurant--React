// import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, useNavigation } from 'react-router-dom'
import Header from './sections/header/Header'
import Home from './pages/Home'
import Recettes from './pages/recettes/Recettes'
import Recette from './pages/recette/Recette'
import Footer from './sections/footer/Footer'
import Error from './pages/error/Error'

import './main.css'
import Chargement from './components/Chargement'
import ScrollToHash from './hooks/scrollToHash'
import { CartContextProvider } from './hooks/useCart'
import Cart from './pages/cart/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'recettes',
        children: [
          {
            path: '',
            element: <Recettes/>,
          },
          {
            path: ':id',
            element: <Recette/>,
          }
        ]
      }
    ]
  },
])

function Layout(){
  const {state} = useNavigation()
  return <CartContextProvider>
    <Header/>
    <ScrollToHash/>
    <main>
      {state != 'loading' && <Outlet/>}
      {state == 'loading' && <Chargement/>}
    </main>
    <Footer/>
  </CartContextProvider>
}

export default function App() {
  return <RouterProvider router={router}/>
}