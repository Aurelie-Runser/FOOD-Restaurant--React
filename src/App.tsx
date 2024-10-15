// import { useState } from 'react'
import { Suspense, lazy } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, useNavigation } from 'react-router-dom'
import Header from './sections/header/Header'
import Home from './pages/Home'
const Recettes = lazy(() => import("./pages/recettes/Recettes"))
const Recette = lazy(() => import("./pages/recette/Recette"))
const Cart = lazy(() => import("./pages/cart/Cart"))
import Footer from './sections/footer/Footer'
import Error from './pages/error/Error'
import { CartContextProvider } from './hooks/useCart'
import Chargement from './components/Chargement'
import ScrollToHash from './hooks/scrollToHash'

import './main.css'

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
        element:
          <Suspense fallback={<Chargement />}>
            <Cart />
          </Suspense>,
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