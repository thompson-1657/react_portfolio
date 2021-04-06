import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Nav = styled.nav`
    background-color: #99b5b9;
`
const H1 = styled.h1`
    color: white;
`
const Button = styled.button`
    color: white
`

    
    const Navbar = () => (
        <Nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">
                <H1> Rachel Thompson</H1>
            </Link>
        <Button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
        </Button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                 <Link to="/" className="nav-link" aria-current="page" href="#">Home</Link>
            </li>
             <li className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page" href="#">Contact</Link>
             </li>
            <li className="nav-item">
                <Link to="/portfolio" className="nav-link" aria-current="page" href="#">Portfolio</Link>
            </li>

         </ul>
        </div>
        </div>
  </Nav>
  )

  export default Navbar