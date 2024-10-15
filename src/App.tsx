// import { useState } from 'react'
import { Suspense, lazy } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, useNavigation } from 'react-router-dom'
import Header from './sections/header/Header'
import Home from './pages/Home'
const Recettes = lazy(() => import("./pages/recettes/Recettes"))
const Recette = lazy(() => import("./pages/recette/Recette"))
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
        path: 'menu',
        children: [
          {
            path: '',
            element:
              <Suspense fallback={<Chargement />}>
                <Recettes />
              </Suspense>,
          },
          {
            path: ':id',
            element: 
              <Suspense fallback={<Chargement />}>
                <Recette />
              </Suspense>,
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
    <main className='mainPC'>
      {state != 'loading' && <Outlet/>}
      {state == 'loading' && <Chargement/>}
    </main>
    <main className='mainMobile'>
      <h2>Version Desktop only.</h2>
    </main>
    <Footer/>
  </CartContextProvider>
}

export default function App() {
  return <RouterProvider router={router}/>
}