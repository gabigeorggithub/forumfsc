import React from 'react';
import Logo from '../../assets/logoverde.png'

const LoginForm = () => {
  return (
    <>
      {/* Espaço para o logo */}
      <div className="logo">
        <img src={Logo} alt="Logo do fórum" />
      </div>
      {/* Formulário de login */}
      <form>
        <input type="text" placeholder="Usuário" required />
        <input type="password" placeholder="Senha" required />
        <div className="forgot-password">
          <a href="https://www.canva.com/">Esqueceu sua senha?</a>
        </div>
        <button type="submit">ENTRAR</button>
      </form>
    </>
  );
};

export default LoginForm;
