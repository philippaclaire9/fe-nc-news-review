import React, { PureComponent } from 'react';
import * as api from '../utils/api';

import ErrorHandler from './ErrorHandler';

class CommentAdder extends PureComponent {
  state = {
    body: '',
    error: false,
    isLoadingComment: false
  };

  handleChange = event => {
    const { value } = event.target;
    const { id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    this.setState({ isLoadingComment: true });

    api
      .postComment(this.props.user, body, this.props.article_id)
      .then(comment => {
        this.props.addComment(comment);
        this.setState({ body: '', error: false, isLoadingComment: false });
      })
      .catch(err => {
        const { status } = err.response;
        const { msg } = err.response.data;
        this.setState({ error: { status, msg } });
      });
  };

  render() {
    if (this.state.isLoadingComment) return <p>Comment loading...</p>;
    return (
      <>
        {this.state.error && <ErrorHandler {...this.state.error} />}

        <form onSubmit={this.handleSubmit}>
          <h4>Add Comment</h4>

          <label htmlFor="body">Comment: </label>
          <br />
          <textarea
            id="body"
            required
            onChange={this.handleChange}
            value={this.state.body}
            rows="5"
            cols="20"
            placeholder="Write your comment here..."
          />
          <button type="submit">Submit</button>
        </form>
        <br />
      </>
    );
  }
}

export default CommentAdder;
