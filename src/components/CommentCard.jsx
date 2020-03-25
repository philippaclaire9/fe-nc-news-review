import React, { Component } from 'react';
import Voter from './Voter';
import CommentDeleter from './CommentDeleter';

class CommentCard extends Component {
  state = {
    isDeleted: false
  };

  dealWithDelete = () => {
    this.setState({ isDeleted: true });
  };

  render() {
    const { body, author, votes, comment_id, created_at } = this.props;
    if (this.state.isDeleted) return <p>This comment has been deleted</p>;
    return (
      <section>
        <p>{body}</p>
        <p>Author: {author} </p>
        <Voter votes={votes} comment_id={comment_id} />
        <p>created at: {created_at}</p>
        {author === 'tickle122' && (
          <CommentDeleter
            comment_id={comment_id}
            dealWithDelete={this.dealWithDelete}
          />
        )}
      </section>
    );
  }
}

export default CommentCard;
