import React, { Component } from 'react';

class UserDetails extends Component {
  //does userdetails need state???
  render() {
    return (
      <aside className="user">
        <span role="img" aria-label="user image">
          👤
        </span>
        <p>User: grumpy19</p>
      </aside>
    );
  }
}

export default UserDetails;
