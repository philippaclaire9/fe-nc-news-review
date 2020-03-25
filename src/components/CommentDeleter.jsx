import React from 'react';
import * as api from '../utils/api';
const CommentDeleter = ({ comment_id, dealWithDelete }) => {
  const handleClick = event => {
    api.deleteComment(comment_id);
    dealWithDelete();
  };
  return <button onClick={handleClick}>Delete comment</button>;
};

export default CommentDeleter;
