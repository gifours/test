import React from 'react'
// import Header from './Header'
import Footer from './Footer'
import Darkmode from './Darkmode';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <Darkmode/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout