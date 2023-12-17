import React, { Component } from 'react';

export default class UserDetails extends Component {
  render() {
    const { avatar, userName, bio, name, jobTitle, Email, onClose } = this.props;

    return (
      <div className="user-details-modal">
        <div className="card" style={{ width: "18rem" }}>
          <img src={avatar} className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">{userName}</h5>
            <p className="card-text">{bio}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{name}</li>
            <li className="list-group-item">{jobTitle}</li>
            <li className="list-group-item">{Email}</li>
          </ul>
          <button onClick={onClose} className="btn btn-primary">
            Close
          </button>
        </div>
      </div>
    );
  }
}
