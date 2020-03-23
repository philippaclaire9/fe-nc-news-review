import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = ({ title, author, topic, article_id }) => {
  return (
    <article>
      <Link to={`/articles/${article_id}`}>{title}</Link>
      <p>{author} </p>
      <p>{topic} </p>
    </article>
  );
};

export default ArticleCard;
