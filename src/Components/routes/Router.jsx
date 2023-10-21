
import {
    createBrowserRouter
  } from "react-router-dom";
import Error from "../../assets/Error/Error";
import Home from "../Home/Home";
import Root from "../Root/Root";
import AddProduct from "../Products/AddProduct";
import AddBrand from "../Brand/AddBrand";
import ProductList from "../Products/ProductList";
import UpdateProduct from "../Products/UpdateProduct";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CarDetails from "../Cars/CarDetails";
import BrandWiseCarList from "../Cars/BrandWiseCarList";
import MyCart from "../MyCart/MyCart";
import Contact from "../Contact/Contact";

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <Error></Error>,
            children: [
               {
                path: '/',
                element: <Home></Home>,
                loader : () => fetch('https://automotive-server-side-ksc9idnd4.vercel.app/product')
               },
               {
                path: '/add-products',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                loader : () => fetch('https://automotive-server-side-ksc9idnd4.vercel.app/product')
               },
               {
                path: '/product-list',
                element: <PrivateRoute><ProductList></ProductList></PrivateRoute>,
                loader : () => fetch('https://automotive-server-side-ksc9idnd4.vercel.app/product')
               },
               {
                path: '/update-product/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader : ({params}) => fetch(`https://automotive-server-side-ksc9idnd4.vercel.app/product/${params.id}`)
               },
               {
                path: '/add-brand',
                element: <PrivateRoute><AddBrand></AddBrand></PrivateRoute>,
                loader : () => fetch('https://automotive-server-side-ksc9idnd4.vercel.app/brand')
               },
               {
                path: '/carDetails/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader : ({params}) => fetch(`https://automotive-server-side-ksc9idnd4.vercel.app/product/${params.id}`)
               },
               {
                path: '/my-cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader : () => fetch('https://automotive-server-side-ksc9idnd4.vercel.app/my-cart')
               },
               {
                path: '/brandWisecarList/:id',
                element: <PrivateRoute><BrandWiseCarList></BrandWiseCarList></PrivateRoute>
               },
               {
                path: '/login',
                element: <Login></Login>
               },
               {
                path: '/register',
                element: <Register></Register>
               },
               {
                path: '/contact',
                element: <Contact></Contact>
               }
            ]
        }
    ]);

export default routes;