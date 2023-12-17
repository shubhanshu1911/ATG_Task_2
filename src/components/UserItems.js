import React, { Component } from 'react';
import person from './images/per1.png';

export default class UserItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageError: false, // Add state to track image loading errors
    };
  }

  handleImageError = () => {
    // Set the state to indicate image loading error
    this.setState({ imageError: true });
  };

  render() {
    const { name, avatar, onClick } = this.props;
    const { imageError } = this.state;

    return (
      <div style={{ cursor: 'pointer' }} onClick={onClick}>
        <div className="card">
          <div className="card-body">
            <img
              src={imageError ? person : avatar || person}
              alt="per-img"
              width="70"
              height="50"
              onError={this.handleImageError} 
            />
            {name}
          </div>
        </div>
      </div>
    );
  }
}
