import React from 'react';
import '../Loader.css';

const Loader = () => {
  return (
    <main className="background">
      <div className="lds-hourglass">Hang on a mo, just loading...</div>;
    </main>
  );
};

export default Loader;
