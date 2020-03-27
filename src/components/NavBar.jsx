import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import '../App.css';

class NavBar extends Component {
  state = {
    topics: []
  };
  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  }

  render() {
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
