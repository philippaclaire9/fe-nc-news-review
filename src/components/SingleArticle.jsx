import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from '../components/Loader';
import CommentCard from './CommentCard';
import ViewToggler from './ViewToggler';
import Voter from './Voter';
import ErrorHandler from './ErrorHandler';
import CommentAdder from './CommentAdder';

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    api
      .fetchSingleArticle(this.props)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        const { status } = err.response;
        const { msg } = err.response.data;
        this.setState({ error: { status, msg }, isLoading: false });
      });
    api.fetchComments(this.props).then(comments => {
      this.setState({ comments });
    });
  }

  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.error) return <ErrorHandler {...this.state.error} />;
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
        <CommentAdder addComment={this.addComment} article_id={article_id} />

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
