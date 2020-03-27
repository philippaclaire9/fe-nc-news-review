import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from './Loader';
import ArticleCard from './ArticleCard';
import SortBy from './SortBy';
import OrderBy from './OrderBy';
import ErrorHandler from './ErrorHandler';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: 'created_at',
    order: '',
    error: null
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic_slug !== prevProps.topic_slug) {
      this.getArticles();
    }
    if (this.state.sort_by !== prevState.sort_by) {
      this.getArticles(this.state.sort_by); //
    }
    if (this.state.order !== prevState.order) {
      this.getArticles(this.state.sort_by, this.state.order);
    }
  }

  getArticles = (sort_by, order) => {
    api
      .fetchArticles(this.props, sort_by, order)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        const { status } = err.response;
        const { msg } = err.response.data;
        this.setState({ error: { status, msg }, isLoading: false });
      });
  };

  updateQuery = (type, value) => {
    this.setState({ [type]: value });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    if (this.state.error) return <ErrorHandler {...this.state.error} />;
    return (
      <main>
        <SortBy updateQuery={this.updateQuery} />
        <OrderBy updateQuery={this.updateQuery} />
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
