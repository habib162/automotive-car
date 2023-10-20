import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './Components/routes/router'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <ToastContainer/>
  </React.StrictMode>
)
