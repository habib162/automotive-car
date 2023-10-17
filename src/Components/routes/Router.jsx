
import {
    createBrowserRouter
  } from "react-router-dom";
import Error from "../../assets/Error/Error";
import Home from "../Home/Home";
import Root from "../Root/Root";

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <Error></Error>,
            children: [
               {
                path: '/',
                element: <Home></Home>
               },
            //    {
            //     path: '/contact',
            //     element: <Contact></Contact>,
            //    },
            //    {
            //     path: '/about',
            //     element: <About></About>,
            //    },
            //    {
            //     path: '/eventDetails/:id',
            //     element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
            //     loader: () => fetch('/socialEvents.json')
            //    },
            //    {
            //     path: '/login',
            //     element: <Login></Login>
            //    },
            //    {
            //     path: '/register',
            //     element: <Register></Register>
            //    }
            ]
        }
    ]);

export default routes;