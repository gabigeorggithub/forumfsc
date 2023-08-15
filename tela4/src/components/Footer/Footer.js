import React from 'react';
import './Footer.css'; // Importe o arquivo CSS
import Plus from '../../assets/plus.png'

const Footer = () => {
  return (
    <footer className="footer">
      <button className="icon-button">
        <img src={Plus} alt="Ícone" />
      </button>
    </footer>
  );
};

export default Footer;
