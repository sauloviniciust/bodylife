import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Home } from './Pages/Home/index.tsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ItemPage } from './Pages/Item'


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
      }

    ],
  },
 
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


