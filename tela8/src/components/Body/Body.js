import React from 'react';
import './Body.css'; // Estilo CSS para personalização
import check from '../../assets/check.png'

const   Body = () => {
  return (
    <div className='fundo'>
        <div className="container">
        <div className="background">
            <div className="rounded-block">
            <h2>Faça uma pergunta:</h2>
            </div>
            <div className="rounded-block">
            <input type="text" placeholder="Digite sua pergunta" />
            <span>Nome de usuário</span>
            <button>
                <img src={check} alt="Botão" height={20} width={20}/>
            </button>
            </div>
        </div>
        </div></div>
  );
};

export default Body;
