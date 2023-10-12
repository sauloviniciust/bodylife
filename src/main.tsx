import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {  ItemPage } from './Pages/Item/index.tsx'
import { Home } from './Pages/Home/index.tsx'
import { LoadingPage } from './Pages/Loading/index.tsx'
// import { Calçado } from './Pages/Roupa/index.tsx'
import { Utilidades } from './Pages/Acessorios/index.tsx'
import { Calcado,  } from './Pages/Calçado/index.tsx'
import { Novidades } from './Pages/Novidades/index.tsx'
import { Wear } from './Pages/Roupa/index.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }, 
      {
        path: "item",
        element: <ItemPage/>
      },
      {
        path: "calcados",
        element: <Calcado/>
      },
      {
        path: "acessorios",
        element: <Utilidades/>
      },
      {
        path: "roupas",
        element: <Wear/>
      },
      {
        path: "loading",
        element: <LoadingPage/>
      },
      {
        path: "novidades",
        element: <Novidades/>
      },


    ],
  },
 
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


