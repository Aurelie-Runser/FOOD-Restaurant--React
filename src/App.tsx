// import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, useNavigation } from 'react-router-dom'
import Header from './sections/header/Header'
import Home from './pages/Home'
import Recettes from './pages/Recettes'
import Recette from './pages/Recette'
import Footer from './sections/footer/Footer'
import Error from './pages/Error'

import './main.css'
import Chargement from './components/Chargement'
import ScrollToHash from './hooks/scrollToHash'

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
  return <>
    <Header/>
    <ScrollToHash/>
    <main>
      {state != 'loading' && <Outlet/>}
      {state == 'loading' && <Chargement/>}
    </main>
    <Footer/>
  </>
}

export default function App() {
  return <RouterProvider router={router}/>
}