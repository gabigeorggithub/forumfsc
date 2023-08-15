import React from 'react';
import './Header.css';
import logoImage from "../../assets/logo.png"



const Header = () => {
  return (
    <header className="header-container">
      <div className="left-section">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
