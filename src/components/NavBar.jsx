import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import '../App.css';
import ErrorHandler from './ErrorHandler';

class NavBar extends Component {
  state = {
    topics: [],
    error: null
  };
  componentDidMount() {
    api
      .fetchTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(err => {
        const { status } = err.response;
        const { msg } = err.response.data;
        this.setState({ error: { status, msg }, isLoading: false });
      });
  }

  render() {
    if (this.state.error) return <ErrorHandler {...this.state.error} />;
    return (
      <nav className="nav">
        <Link to="/" className="topic">
          home
        </Link>
        {this.state.topics.map(topic => {
          return (
            <Link
              to={`/topics/${topic.slug}`}
              key={topic.slug}
              className="topic"
            >
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default NavBar;
