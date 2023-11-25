import React from 'react'
// import Header from '../header'
import NavBar from '../header/NavBar'
import Footer from '../footer/Footer'
// import { Navbar } from 'react-bootstrap'

const Container = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}

export default Container