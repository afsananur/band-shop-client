import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './component/Root/Root.jsx';
import Home from './component/Header/Home.jsx';

import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import AllProducts from './component/Products/AllProducts.jsx';
import Brands from './component/Category/Brands.jsx';
import AddProduct from './component/Products/AddProduct.jsx';
import UpdateProduct from './component/Products/UpdateProduct.jsx';
import AuthProvider from './Pages/Provider/AuthProvider.jsx';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.jsx';
import Error from './Pages/Error/Error.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home> ,
       loader:() => fetch('/brands.json')
      },
     
     
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
     
      {
        path:"/allProducts",
        element:<PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
        loader: ()=> fetch("http://localhost:5000/addproduct")
      },
      {
        path:"/brand/:brand",
        element:<Brands></Brands> ,
       loader:() => fetch('http://localhost:5000/addproduct')
      },
      {
        path:"/addProduct",
        element:<AddProduct></AddProduct> 
      },
      {
        path:"/updateProduct/:id",
        element:<UpdateProduct></UpdateProduct>,
       loader:({params}) => fetch(`http://localhost:5000/addproduct/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
