import React, { useState } from 'react';
import './SubPost.css'


const TwitterPost = () => {
  const [likes, setLikes] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [postContent, setPostContent] = useState("Esse é um comentário");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handlePostChange = (event) => {
    setPostContent(event.target.value);
  };

  return (
    <div className="twitter-post">
      <div className="post-content">
        {isEditing ? (
          <textarea value={postContent} onChange={handlePostChange} />
        ) : (
          <p>{postContent}</p>
        )}
      </div>
      <div className="post-actions">
        <button onClick={handleLike}>
          {likes === 1 ? `${likes} Like` : `${likes} Likes`}
        </button>
        <button onClick={handleEdit}>Edit</button>
        <button>Share</button> {/* Implementar funcionalidade de compartilhar */}
        {isEditing && <button onClick={handleSave}>Save</button>}
      </div>
    </div>
  );
};

export default TwitterPost;
