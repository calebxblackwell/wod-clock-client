import React, { Component } from 'react';
import Input from './input.js'
//this screen is the first screen that pops up when you click on the App
//after logging in to the app, this screen dissapears.
class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }

  setUsername(username) {
    this.setState({username: username})
  }

  setPassword(password) {
    this.setState({password: password})
  }

  clickHandler() {
    // for now, this just triggers a popup window, just as a smoke test for the click event.
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render() {
    return (
      <div>
        <Input id ="username" labelName="Username: " inputType="text" parentFunction={this.setUsername}  />
        <Input id ="password" labelName="Password: " inputType="password" parentFunction={this.setPassword} />
        <button onClick={this.clickHandler}>{this.props.buttonName}</button>
      </div>
    )
  }
}

  export default LoginForm
