import React from 'react'
import ReactDOM from 'react-dom/client'
import {NavLink, RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import LoginSavaan from './components/login.savaan.jsx'
import Layout from './components/Layout.jsx'
import LoginSignSavaan from './components/LogSign.savaan.jsx'
import Forgot from './components/Forgot.savaan.jsx'
const router = createBrowserRouter(
  [
    {
      path : "/",
      element: <Layout/>,
      children:[
        {
          path : "",
          element : <Home/>
        },{
          path : "/login",
          element: <LoginSignSavaan/>
        },
        
        {
          path : "/signup",
          element: <LoginSavaan/>
        },
        {
          path :"/forgotpassword",
          element: <Forgot/>
        }
      ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
