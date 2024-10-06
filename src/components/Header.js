import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
        <img src={require("../assets/logo1.png")} alt="Cakeshop Logo" className="logo-image" />
      </div>
        <nav className="header-nav">
          <ul>
            <li><a href="/cakeshop">Home</a></li>
            <li><a href="/cakes">Cakes</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  

export default Header;
