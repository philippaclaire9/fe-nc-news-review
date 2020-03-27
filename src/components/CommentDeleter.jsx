import React, { Component } from 'react';
import * as api from '../utils/api';

class CommentDeleter extends Component {
  state = {
    isDeleting: false
  };

  handleClick = event => {
    this.setState({ isDeleting: true });
    api.deleteComment(this.props.comment_id).then(data => {
      this.props.dealWithDelete();
    });
  };
  render() {
    if (this.state.isDeleting) return <p>Deleting comment...</p>;
    return <button onClick={this.handleClick}>Delete comment</button>;
  }
}

export default CommentDeleter;
