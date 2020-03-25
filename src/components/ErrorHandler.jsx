import React from 'react';

const ErrorHandler = ({ status, msg }) => {
  return (
    <main>
      <h2>{`Error status ${status}`}</h2>
      <p>Oh dear, something's gone wrong.</p>
      <p>{`Error message: ${msg}`}</p>
    </main>
  );
};

export default ErrorHandler;
