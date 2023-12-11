import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {  ItemPage } from './Pages/Item/index.tsx'
import { Home } from './Pages/Home/index.tsx'
import { LoadingPage } from './Pages/Loading/index.tsx'
import { MenuMoba } from './Pages/Mobile/index.tsx'
import { CartProvider } from './context/cartContext.tsx'
import { ItemProvider } from './context/ItemContext copy.tsx'
import { Cart} from './Pages/ChekoutPage/index.tsx'
import { useCartStore } from './store/CartStore.ts'
import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyAffcpRNo6TNbFtzSoHtA0dd018Zs_dA8s",
  authDomain: "bodylife-bbf37.firebaseapp.com",
  projectId: "bodylife-bbf37",
  storageBucket: "bodylife-bbf37.appspot.com",
  messagingSenderId: "641741772831",
  appId: "1:641741772831:web:cd4a5f84e954b9841add2a"
};

initializeApp(firebaseConfig);

useCartStore.subscribe((Item) => console.log("New State", Item))

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
        path: "loading",
        element: <LoadingPage/>
      },
      {
        path: "menumobile",
        element: <MenuMoba/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
    <ItemProvider>
    <RouterProvider router={router}/>
    </ItemProvider>
    </CartProvider>
  </React.StrictMode>,
)


