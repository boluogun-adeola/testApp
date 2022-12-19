import React from "react";
import Logo from '../assets/logo.png'
import '../styles/header.css'

const Header = ()=>{
    return(
        <div>
            <header className="header">
                <div className="logo">
                <img src={Logo} alt="Logo"/>
                </div>
                
            </header>
            <div className="hero">
                <h1>Watch something incredible</h1>
            </div>
        </div>
    )
}

export default Header;