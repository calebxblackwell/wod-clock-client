import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chrono from './components/chrono.js'
import LoginForm from './components/loginscreen.js'
import Input from './components/input.js'
import './App.css';
import { fetchPrograms } from './actions'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      isVisible: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isVisible: false
    }, function() {
      console.log(this.state.isVisible)
    });
    return false;
  }

componentDidMount() {
  this.props.dispatch(fetchPrograms())
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">WOD CLOCK</h1>
        </header>
        <div className="LoginScreen">
          <h2> Welcome to WOD Clock! This is an app designed to make your Crossfit
          workouts easier by providing your workout of the day information right
          next to the stopwatch clock. No more white boards and watching the wall
          clock for you!Please feel free to login to your gym's Wodify below or
          use [info for test login] if you don't have a Crossfit Gym.
          </h2>
        </div>
        
        <LoginForm />

        <p className="App-login">
            Placeholder for API info for Wodify login screen

        </p>
        <p className="App-workout">
            WOD: {this.props.workout}
        </p>
        <Chrono  />
      </div>
    );
  }//closing bracket for render
} //closing bracket for component
const mapStateToProps = (state) => ({
  workout: state.program.workout
})
export default connect(mapStateToProps)(App);
