import React from 'react';

const CommentCard = ({ author, votes, created_at, body }) => {
  return (
    <section>
      <p>{body}</p>
      <p>Author: {author} </p>
      <p>Votes: {votes} </p>
      <p>created at: {created_at}</p>
    </section>
  );
};

export default CommentCard;
