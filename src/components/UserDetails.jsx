import React from 'react';
import StyledUser from './StyledUser';

const UserDetails = ({ user }) => {
  return (
    <StyledUser className="user">
      <span role="img" aria-label="user image">
        👤
      </span>
      <p>User: {user}</p>
    </StyledUser>
  );
};

export default UserDetails;
