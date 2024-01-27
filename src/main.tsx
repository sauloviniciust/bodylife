import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ItemPage } from "./components/Item/index.tsx";
import { MenuMoba } from "./Pages/Mobile/index.tsx";
import { Loading } from "./components/Loading/index.tsx";
import { Home } from "./Pages/Home/index.tsx";
import { Cart } from "./Pages/Cart/index.tsx";
import Checkout from "./Pages/Chekout/index.tsx";
import { DataProvider } from "./Context/DataContext.tsx";
import { useCartStore } from "./store/CartStore.ts";
import { BuyerProvider } from "./Context/BuyerContext.tsx";

useCartStore.subscribe((Item) => console.log("New State", Item));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "item",
        element: <ItemPage />,
      },
      {
        path: "loading",
        element: <Loading />,
      },
      {
        path: "menumobile",
        element: <MenuMoba />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BuyerProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </BuyerProvider>
  </React.StrictMode>
);
