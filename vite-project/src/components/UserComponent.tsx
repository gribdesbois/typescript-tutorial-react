/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import UserInterface from '../UserInterface'

export class UserComponent extends Component<UserInterface, {}> {
  constructor(props: UserInterface) {
    super(props)
  }

  render() {
    return (<div>
      <h1>User Component</h1>
      Hello, <b>{this.props.name}</b>
      <br/>
      You are <b>{this.props.age} years old</b>
      <br />
      You live at: <b>{this.props.address}</b>
      You were born: <b>{this.props.dob.toDateString()}</b>
    </div>)
  }
}

export default UserComponent
