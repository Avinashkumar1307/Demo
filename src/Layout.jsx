import React from 'react'
import App from './App.jsx'
import { Outlet } from 'react-router'
export default function Layout() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
