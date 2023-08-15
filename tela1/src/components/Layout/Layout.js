import React from 'react';
import './Layout.css';
import Image from "../../assets/balanca.png"

const Layout = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>INTERVENÇÃO MUNICIPAL</h1>
        <p>         A justiça não consiste em ser neutro entre o certo e o errado, mas em descobrir o certo e sustentá-lo, onde quer que ele se encontre, contra o errado.</p>
        <p>- Theodoro nao sei oq</p>
      </div>
      <div className="image-section">
        <img src={Image} alt="Imagem" />
      </div>
    </div>
  );
};

export default Layout;
