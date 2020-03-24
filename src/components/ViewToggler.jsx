import React, { Component } from 'react';

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
        <button onClick={this.handleClick}>
          {this.state.isVisible ? 'Hide comments' : 'Show comments'}
        </button>
        {this.state.isVisible && this.props.children}
      </>
    );
  }
}

export default ViewToggler;
