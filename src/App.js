import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Router className="main">
        <ArticlesList path="/" />
        <ArticlesList path="/topics/:topic_slug" />
        <SingleArticle path="articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
