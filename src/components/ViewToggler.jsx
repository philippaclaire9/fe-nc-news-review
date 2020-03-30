import React, { Component } from 'react';
import StyledButton from './StyledButton';

class ViewToggler extends Component {
  state = {
    isVisible: true
  };

  handleClick = () => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };
  render() {
    return (
      <>
        <StyledButton onClick={this.handleClick}>
          {' '}
          {this.state.isVisible ? 'Hide comments' : 'Show comments'}
        </StyledButton>
        {this.state.isVisible && this.props.children}
      </>
    );
  }
}

export default ViewToggler;
