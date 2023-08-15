import React from 'react';
import './Header01.css';
import logoImage from "../../assets/logo.png"
import lupaImage from "../../assets/lupa.png"


const Header = () => {
  return (
    <header className="header-container">
      <div className="left-section">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="right-section">
        <div className="search-container">
          <input type="text" placeholder="Faça uma pergunta" className="search-input" />
          <button className="search-button">
            <img src={lupaImage} alt="Lupa" className="lupa-icon" />
          </button>
        </div>
        <div className="user-actions">
          <button className="login-button">Entrar</button>
          <button className="register-button">Cadastrar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
