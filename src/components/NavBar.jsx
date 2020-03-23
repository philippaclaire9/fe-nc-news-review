import React, { Component } from 'react';
import * as api from '../utils/api';

class NavBar extends Component {
  state = {
    topics: []
  };
  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.state(topics);
    });
  }

  render() {
    return <nav className="nav">Nav will go here</nav>;
  }
}

export default NavBar;
