import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from '../components/Loader';
import Voter from './Voter';
import ErrorHandler from './ErrorHandler';
import CommentList from './CommentList';
import dateFormatter from '../utils/dateFormatter';
import StyledSingleArticle from './StyledSingleArticle';

class SingleArticle extends Component {
  state = {
    article: {},
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
  }

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
      <>
        <StyledSingleArticle>
          <h3>{title}</h3>
          <h4>Author: {author}</h4>
          <p> {body} </p>
          <p>Topic: {topic}</p>
          <p> Posted on {dateFormatter(created_at)} </p>
          <Voter votes={votes} article_id={article_id} />
          <p>Comment count: {comment_count} </p>
        </StyledSingleArticle>
        <CommentList article_id={article_id} user={this.props.user} />
      </>
    );
  }
}

export default SingleArticle;
