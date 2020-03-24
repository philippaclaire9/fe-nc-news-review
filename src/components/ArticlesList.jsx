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
  getArticles = () => {
    api.fetchArticles(this.props).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <main>
        {' '}
        <SortBy />
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
