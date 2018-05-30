import React, { Component } from 'react'
//import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginForm } from './components/loginscreen.js';
import { RegisterPage } from './components/registerscreen.js';
import  HomePage  from './components/HomePage.js';
import MainPage from './components/MainPage';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
    };
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
  }
}
export default App;
