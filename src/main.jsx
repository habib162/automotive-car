import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './assets/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    children: [
      {
       path: "/",
       element: <Home></Home>
      },
      // {
      //   path: "/categoryDetails/:id",
      //   element: <CategoryDetails></CategoryDetails>,
      //   loader: () => fetch('/donations.json')
      // },
      // {
      //   path: "/statistics",
      //   element: <Statistics></Statistics>,
      //   loader: () => fetch('/donations.json')
      // },
      // {
      //   path: "/donations",
      //   element: <Donations></Donations>
      //  }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
