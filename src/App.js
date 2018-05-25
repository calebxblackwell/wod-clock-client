import React, { Component } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { alertActions } from './actions/alert.actions';
//import { PrivateRoute } from './components/PrivateRoute';
import { LoginForm } from './components/loginscreen.js';
import { RegisterPage } from './components/registerscreen.js';
import  HomePage  from './components/HomePage.js';
import MainPage from './components/MainPage';
import './App.css';
import { fetchPrograms } from './reducers/program.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state= {

    }
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   const { dispatch } = this.props;

  //}
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.setState({
  //     //isVisible: false
  //   }, () => {
  //     //console.log(this.state.isVisible)
  //   });
  //   return false;
}

  componentDidMount() {
    this.props.dispatch(fetchPrograms())
}

  render() {
    return (
        <Router >
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/main" component={MainPage} />
            </div>
        </Router>
    );
  }//closing bracket for render
} //closing bracket for component

//mapStateToProps specifies which part of the state we want to provide to component
const mapStateToProps = (state) => {
  return {GymProgram: state.GymProgram};
}

export default connect(mapStateToProps)(App);
