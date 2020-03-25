import React, { PureComponent } from 'react';

class CommentAdder extends PureComponent {
  state = {
    username: '',
    body: ''
  };

  handleChange = event => {
    const { value } = event.target;
    const { id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {};

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h4>Add Comment</h4>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="body">Comment:</label>
          <textarea id="body" required onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <br />
      </>
    );
  }
}

export default CommentAdder;
