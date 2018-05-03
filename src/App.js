import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chrono from './components/chrono.js'
import LoginScreen from './components/loginscreen.js'
import './App.css';
import { fetchPrograms } from './actions'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      isVisible: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemount = this.handleRemount.bind(this);
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
  handleRemount(e) {
    this.setState({
      isVisible: true
    }, function() {
      console.log(this.state.isVisible)
    });
    e.preventDefault();
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
        <LoginScreen />
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
