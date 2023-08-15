import React, { useState } from 'react';
import './Post.css'
import avancImage from '../../assets/click.png'
import like from '../../assets/like.png'


const Post = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (commentInput.trim() !== '') {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  return (
    <div className="post">
      <p><a href="https://www.canva.com/"></a>Esse é o assunto</p>
      <div className="buttons-container">
        <button onClick={handleLike}><img src={like} height="30" width="30"></img>({likes})</button>
        <div>
          <input
            type="text"
            placeholder="Escreva um comentário..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button onClick={handleComment}>Comentar</button>
        </div>
      </div>
      <span className="comment-count">Comentários ({comments.length})</span>
    </div>
  );
};

export default Post;
