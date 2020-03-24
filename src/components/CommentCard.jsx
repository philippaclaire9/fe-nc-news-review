import React from 'react';
import Voter from './Voter';

const CommentCard = ({ author, votes, created_at, body, comment_id }) => {
  return (
    <section>
      <p>{body}</p>
      <p>Author: {author} </p>
      <Voter votes={votes} comment_id={comment_id} />

      <p>created at: {created_at}</p>
    </section>
  );
};

export default CommentCard;
