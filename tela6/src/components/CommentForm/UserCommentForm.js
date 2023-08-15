import React from 'react';
import './UserCommentForm.css'; // Crie esse arquivo para estilização (ver passo 5).

const UserCommentForm = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="light-grey-box">
          <div className="username">Nome de Usuário</div>
          <div className="dark-grey-box">
            <textarea className="comment-textarea" placeholder="Digite o seu comentário aqui"></textarea>
          </div>
        </div>
        <div className="buttons">
          <button className="back-button">Voltar</button>
          <button className="save-button">Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default UserCommentForm;

