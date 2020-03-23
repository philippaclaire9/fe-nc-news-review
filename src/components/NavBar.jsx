import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';

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
        {' '}
        {this.state.topics.map(topic => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              {topic.slug}
            </Link>
          );
        })}{' '}
      </nav>
    );
  }
}

export default NavBar;
