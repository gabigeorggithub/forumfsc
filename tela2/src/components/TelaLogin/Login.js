import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';
import logo from '../../assets/logoverde.png'; // Importe a imagem do logo

const Login = () => {
  return (
    <div className="container">
      <div className="login-container">
        <div className="login-image"></div>
        <div className="login-box">
          <div className="logo">
            <img src={logo} alt="Logo da sua empresa" />
          </div>
          <h2>Olá!</h2>
          <p>Insira suas informações de login</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
