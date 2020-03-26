import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentAdder from './CommentAdder';
import ViewToggler from './ViewToggler';
import CommentCard from './CommentCard';

class CommentList extends Component {
  state = {
    comments: [],
    error: null
  };
  componentDidMount() {
    api
      .fetchComments(this.props)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }
  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  render() {
    if (this.state.error) return <p>Sorry, comments not available</p>;
    return (
      <section>
        <CommentAdder
          addComment={this.addComment}
          article_id={this.props.article_id}
          user={this.props.user}
        />

        <ViewToggler>
          {this.state.comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                {...comment}
                user={this.props.user}
              />
            );
          })}
        </ViewToggler>
      </section>
    );
  }
}

export default CommentList;
