import React, { Component } from 'react';
import * as api from '../utils/api';
import Loader from './Loader';
import ArticleCard from './ArticleCard';
import SortBy from './SortBy';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic_slug !== prevProps.topic_slug) {
      this.getArticles();
    }
  }
  getArticles = sort_by => {
    api.fetchArticles(this.props, sort_by).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  updateSort = sort_by => {
    this.getArticles(sort_by);
  };
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <main>
        {' '}
        <SortBy updateSort={this.updateSort} />
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
