import React from 'react';

const ErrorAlert = ({ changeError }) => {
  return (
    <section className="error_alert">
      <p>Username not found. Please check credentials and try again</p>
    </section>
  );
};

export default ErrorAlert;
