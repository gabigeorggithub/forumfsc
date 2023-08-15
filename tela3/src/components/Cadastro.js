import React, { useState } from 'react';
import './Cadastro.css'
import Logo from '../../src/assets/logo.png'

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    // Por exemplo, uma chamada de API para realizar o cadastro do usuário
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form">
        <h2>CADASTRO</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="NOME"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="NOME DE USUÁRIO"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="CRIE SUA SENHA"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type="password"
            placeholder="CONFIRME SUA SENHA"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />
          <button type="submit">CADASTRE-SE</button>
        </form>
        <p>Já tem conta? <a href="#">Login</a></p>
        <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      </div>
    </div>
  );
};

export default Cadastro;
