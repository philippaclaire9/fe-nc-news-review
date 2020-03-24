import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from '../components/Loader';
import CommentCard from './CommentCard';
import ViewToggler from './ViewToggler';
import Voter from './Voter';

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    api.fetchSingleArticle(this.props).then(article => {
      this.setState({ article, isLoading: false });
    });
    api.fetchComments(this.props).then(comments => {
      this.setState({ comments });
    });
  }
  render() {
    if (this.state.isLoading) return <Loader />;
    const {
      title,
      body,
      author,
      votes,
      topic,
      created_at,
      comment_count,
      article_id
    } = this.state.article;

    return (
      <article>
        <h3>{title}</h3>
        <h4>Author: {author}</h4>
        <p> {body} </p>
        <p>Topic: {topic}</p>
        <p> Created at: {created_at} </p>
        <Voter votes={votes} article_id={article_id} />
        <p>Comment count: {comment_count} </p>
        <ViewToggler>
          {this.state.comments.map(comment => {
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </ViewToggler>
      </article>
    );
  }
}

export default SingleArticle;
