import React from 'react'
import './Headers.css';
import {  Link } from "react-router-dom";
import logo from "./logo.png";



export default function Header() {
  const decide = window.location.pathname
  console.log(decide)
  return (
      <>
        <div>
        <header id="header" className="header fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <img style={{width:"360px",height:"80px"}} src={logo} alt=""/>
      <nav id="navbar" className="navbar">
        <ul>
       
          <li><Link className="nav-link scrollto " to="/">Home</Link></li>
          <li><Link className="nav-link scrollto" to="about">Features</Link></li>
          <li><Link className="nav-link scrollto" to="pricing">Pricing</Link></li>
          {/* <li><Link className="nav-link scrollto"  to="about">About Us</Link></li> */}
           {decide === "/documentation" ? (
                                         <li><Link className="getstarted scrollto" style={{ textDecoration: 'none' }} to="/">Get Started</Link></li>
                            ) : (
                                         <li><Link className="getstarted scrollto" style={{ textDecoration: 'none' }} to="/documentation">Documentation</Link></li>
                            )}  
        
 
          
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
</div>
      
      
      </>
  
  )
}
