import React, { PureComponent } from 'react';
import * as api from '../utils/api';
import ErrorAlert from './ErrorAlert';

class CommentAdder extends PureComponent {
  state = {
    username: '',
    body: '',
    error: false
  };

  handleChange = event => {
    const { value } = event.target;
    const { id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, body } = this.state;

    if (username !== 'grumpy19') {
      this.setState({ error: true });
    }

    api
      .postComment(username, body, this.props.article_id)
      .then(comment => {
        this.props.addComment(comment);
        this.setState({ username: '', body: '', error: false });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  };

  render() {
    return (
      <>
        {this.state.error && <ErrorAlert />}
        <form onSubmit={this.handleSubmit}>
          <h4>Add Comment</h4>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            required
            onChange={this.handleChange}
            value={this.state.username}
          />
          <label htmlFor="body">Comment:</label>
          <textarea
            id="body"
            required
            onChange={this.handleChange}
            value={this.state.body}
          />
          <button type="submit">Submit</button>
        </form>
        <br />
      </>
    );
  }
}

export default CommentAdder;
