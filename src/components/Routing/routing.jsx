import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainShop from '../Pages/MainShop.page';
import ShoppingCart from '../Pages/ShoppingCart.page';
import { Layout } from "./layout"
import Success from "../Pages/Success"

export const routing = createBrowserRouter([
  {
    path: "/delivery-food-service/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: < MainShop />
      },
      {
        path: "/delivery-food-service/shopping-cart/",
        element: <ShoppingCart />
      },
      {
        path: "/delivery-food-service/shopping-cart/success/",
        element: <Success />
      }
    ],
  },
]);