import React from 'react';
import { Link } from '@reach/router';
import Voter from './Voter';

const ArticleCard = ({ title, author, topic, article_id, votes }) => {
  return (
    <>
      <article>
        <Link to={`/articles/${article_id}`}>{title}</Link>
        <p>Author: {author} </p>
        <p>Topic: {topic} </p>
        <Voter votes={votes} article_id={article_id} />
      </article>
      <br />
    </>
  );
};

export default ArticleCard;
//thumb up: 128077	1F44D
//thumb down: 128078	1F44E
//1F44D
//
