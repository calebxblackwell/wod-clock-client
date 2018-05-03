import React, { Component } from 'react';
//this screen is the first screen that pops up when you click on the App
//after logging in to the app, this screen dissapears.
class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="LoginScreen">
        <h2> Welcome to WOD Clock! This is an app designed to make your Crossfit
        workouts easier by providing your workout of the day information right
        next to the stopwatch clock. No more white boards and watching the wall
        clock for you!Please feel free to login to your gym's Wodify below or
        use [info for test login] if you don't have a Crossfit Gym.
        </h2>
        <form onSubmit= { this.props.onSubmit }>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
                <button> Sign In</button>
        </form>
              <a href='#'>Lost your password ?</a>
      </div>
    )
  }
}

  export default LoginScreen
