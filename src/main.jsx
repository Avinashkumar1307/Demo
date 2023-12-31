import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import Profile from './components/Profile.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "profile",
        element: <Profile />
      },
      

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
