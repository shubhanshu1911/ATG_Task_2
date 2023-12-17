import React, { Component } from 'react'
import NavBar from './NavBar'
import Users from './Users'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Users />
      </div>
    )
  }
}
