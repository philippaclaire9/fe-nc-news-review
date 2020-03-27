import React from 'react';

const OrderBy = ({ updateQuery }) => {
  const handleChange = event => {
    const { value } = event.target;

    updateQuery('order', value);
  };
  return (
    <form>
      <span>Order:</span>
      <input
        type="radio"
        value="asc"
        id="asc"
        name="order"
        onChange={handleChange}
      />
      <label htmlFor="asc">
        Ascending{' '}
        <span role="img" aria-label="up arrow">
          ⬆
        </span>{' '}
      </label>
      <input
        type="radio"
        value="desc"
        id="desc"
        name="order"
        onChange={handleChange}
      />
      <label htmlFor="desc">
        Descending{' '}
        <span role="img" aria-label="down arrow">
          ⬇
        </span>{' '}
      </label>
    </form>
  );
};

export default OrderBy;
