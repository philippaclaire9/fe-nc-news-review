import React, { Component } from 'react';
import * as api from '../utils/api';
import '../article.css';
import StyledVoteButton from './StyledVoteButton';

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
        <StyledVoteButton
          disabled={optimisticVotes > 0}
          onClick={event => {
            this.updateVotes(1);
          }}
        >
          <span role="img" aria-label="thumbs up">
            👍
          </span>
        </StyledVoteButton>

        <p className="votes">Votes: {this.props.votes + optimisticVotes} </p>
        <StyledVoteButton
          disabled={optimisticVotes < 0}
          onClick={event => {
            this.updateVotes(-1);
          }}
        >
          <span role="img" aria-label="thumbs down">
            👎
          </span>
        </StyledVoteButton>
      </div>
    );
  }
}

export default Voter;
