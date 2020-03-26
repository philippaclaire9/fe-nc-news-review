import React, { PureComponent } from 'react';
import * as api from '../utils/api';
import ErrorAlert from './ErrorAlert';

class CommentAdder extends PureComponent {
  state = {
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
    const { body } = this.state;

    api
      .postComment(this.props.user, body, this.props.article_id)
      .then(comment => {
        this.props.addComment(comment);
        this.setState({ body: '', error: false });
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

          <label htmlFor="body">Comment: </label>
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
