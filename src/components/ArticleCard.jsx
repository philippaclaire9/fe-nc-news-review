import React from 'react';
import { Link } from '@reach/router';
import Voter from './Voter';

import dateFormatter from '../utils/dateFormatter';
import '../article.css';

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
      <article className="articleCard">
        <Link to={`/articles/${article_id}`} className="title">
          {title}
        </Link>
        <p className="author">Author: {author} </p>
        <p className="topic">Topic: {topic} </p>
        <Voter votes={votes} article_id={article_id} className="votes" />
        <p className="date">Posted on {dateFormatter(created_at)} </p>
        <p className="comments">Comment count: {comment_count}</p>
      </article>

      <br />
    </>
  );
};

export default ArticleCard;
