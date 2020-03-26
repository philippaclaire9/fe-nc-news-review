import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import UserDetails from './components/UserDetails';

class App extends Component {
  state = {
    user: 'grumpy19'
  };
  render() {
    return (
      <div className="App">
        <Title />
        <UserDetails user={this.state.user} />
        <NavBar />
        <Router className="main">
          <ArticlesList path="/" />
          <ArticlesList path="/topics/:topic_slug" />
          <SingleArticle path="articles/:article_id" user={this.state.user} />
        </Router>
      </div>
    );
  }
}

export default App;
