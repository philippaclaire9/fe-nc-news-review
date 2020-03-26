import React from 'react';
import { Link } from '@reach/router';
import Voter from './Voter';
import StyledArticle from './StyledArticle';

const ArticleCard = ({
  title,
  author,
  topic,
  article_id,
  votes,
  comment_count,
  created_at
}) => {
  return (
    <>
      <StyledArticle>
        <Link to={`/articles/${article_id}`}>{title}</Link>
        <p>Author: {author} </p>
        <p>Topic: {topic} </p>
        <Voter votes={votes} article_id={article_id} />
        <p>Date created: {created_at} </p>
        <p>Comment count: {comment_count}</p>
      </StyledArticle>

      <br />
    </>
  );
};

export default ArticleCard;
