import React from 'react'
import './Headers.css';
import {  Link } from "react-router-dom";
import logo from "./logo.png";


import Header from './Header'; 
import Document from './document'
import Footer from './footer'

export default function Documentation() {
    return (
        

           <div >
           <Header/>
           <Document/>
           <Footer/>
           </div>   
 
    )
}