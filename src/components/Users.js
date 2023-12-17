import React, { Component } from 'react';
import UserItems from './UserItems';
import UserDetails from './UserDetails';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      selectedUserId: null,
      isUserDetailsVisible: false, // Add a state for visibility
    };
  }

  async componentDidMount() {
    let api = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
    let data = await fetch(api);
    let users = await data.json();

    // Update the component state with the fetched users
    this.setState({ users });
  }

  handleUserClick = (userId) => {
    this.setState({ selectedUserId: userId, isUserDetailsVisible: true });
  };

  closeUserDetails = () => {
    this.setState({ selectedUserId: null, isUserDetailsVisible: false });
  };

  render() {
    const { users, selectedUserId, isUserDetailsVisible } = this.state;

    return (
      <div className='user'>
        <h1>User List</h1>
        {users.map(user => (
          <UserItems
            key={user.id}
            name={user.profile.firstName + ' ' + user.profile.lastName}
            avatar={user.avatar}
            onClick={() => this.handleUserClick(user.id)}
          />
        ))}

        {isUserDetailsVisible && (
          <UserDetails
            userId={selectedUserId}
            name={users.find(user => user.id === selectedUserId).profile.firstName + ' ' + users.find(user => user.id === selectedUserId).profile.lastName}
            avatar={users.find(user => user.id === selectedUserId).avatar}
            bio={users.find(user => user.id === selectedUserId).Bio}
            jobTitle={users.find(user => user.id === selectedUserId).jobTitle}
            userName={users.find(user => user.id === selectedUserId).profile.username}
            Email={users.find(user => user.id === selectedUserId).profile.email}
            onClose={this.closeUserDetails} // Pass a callback to close UserDetails
          />
        )}

      </div>
    );
  }
}
