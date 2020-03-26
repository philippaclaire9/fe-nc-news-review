import React, { Component } from 'react';
import * as api from '../utils/api';

class CommentDeleter extends Component {
  state = {
    isDeleting: false
  };

  handleClick = event => {
    api.deleteComment(this.props.comment_id);
    this.setState({ isDeleting: true });
    this.props.dealWithDelete();
  };
  render() {
    if (this.state.isDeleting) return <p>Deleting comment...</p>;
    return <button onClick={this.handleClick}>Delete comment</button>;
  }
}

export default CommentDeleter;
