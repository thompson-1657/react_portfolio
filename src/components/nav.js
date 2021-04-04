import React from 'react'
import { Link } from 'react-router-dom'
    
    
    const Nav = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">
                <h1> Rachel Thompson</h1>
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
        </button>

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
  </nav>
  )

  export default Nav