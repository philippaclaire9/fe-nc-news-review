import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <aside className="user">
      <span role="img" aria-label="user image">
        👤
      </span>
      <p>User: {user}</p>
    </aside>
  );
};

export default UserDetails;
