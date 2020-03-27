import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import StyledNav from './StyledNav';

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
      <StyledNav className="nav">
        {' '}
        <Link to="/">home</Link>
        {this.state.topics.map(topic => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              {topic.slug}
            </Link>
          );
        })}{' '}
      </StyledNav>
    );
  }
}

export default NavBar;
