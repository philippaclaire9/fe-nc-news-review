import React from 'react';

const SortBy = ({ updateQuery }) => {
  const handleChange = event => {
    const { value } = event.target;

    updateQuery({ sort_by: value });
  };

  return (
    <label>
      Sort by:
      <select name="sortBy" id="sortBy" onChange={handleChange}>
        <option value="created_at">Date created</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Votes</option>
      </select>
    </label>
  );
};

export default SortBy;
