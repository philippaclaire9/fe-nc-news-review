import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  updateVotes = vote => {
    api.patchVotes(vote, this.props.article_id, this.props.comment_id);

    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };

  render() {
    const { optimisticVotes } = this.state;
    return (
      <div>
        <button
          disabled={optimisticVotes > 0}
          onClick={event => {
            this.updateVotes(1);
          }}
        >
          <span role="img" aria-label="thumbs up">
            👍
          </span>
        </button>{' '}
        Votes: {this.props.votes + optimisticVotes}
        <button
          disabled={optimisticVotes < 0}
          onClick={event => {
            this.updateVotes(-1);
          }}
        >
          <span role="img" aria-label="thumbs down">
            👎
          </span>
        </button>
      </div>
    );
  }
}

export default Voter;
