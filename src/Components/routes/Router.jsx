
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

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <Error></Error>,
            children: [
               {
                path: '/',
                element: <Home></Home>,
                loader : () => fetch('http://localhost:5000/product')
               },
               {
                path: '/add-products',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                loader : () => fetch('http://localhost:5000/product')
               },
               {
                path: '/product-list',
                element: <PrivateRoute><ProductList></ProductList></PrivateRoute>,
                loader : () => fetch('http://localhost:5000/product')
               },
               {
                path: '/update-product/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
               },
               {
                path: '/add-brand',
                element: <PrivateRoute><AddBrand></AddBrand></PrivateRoute>,
                loader : () => fetch('http://localhost:5000/brand')
               },
               {
                path: '/carDetails/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
               },
               {
                path: '/my-cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader : () => fetch('http://localhost:5000/my-cart')
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
               }
            ]
        }
    ]);

export default routes;