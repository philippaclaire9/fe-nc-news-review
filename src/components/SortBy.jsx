import React, { Component } from 'react';

class SortBy extends Component {
  render() {
    return (
      <form>
        <label htmlFor="">
          Sort by
          <input type="text" name="sortBy" />
        </label>
      </form>
    );
  }
}

export default SortBy;
