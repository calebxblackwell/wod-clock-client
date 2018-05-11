import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AUTHENTICATED } from '/actions/auth.js';
import {Authentication} from './components/require_auth';
import Navbar from './components/navbar.js';
//paths for authentication endpoints. / for login, /secret for what they can
//see when they're logged in.
//react-router-dom allows defining routing.


const user = localStorage.getItem('user');

if(user) {
  store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/signin" component={noRequireAuth(Signin)} />
        <Route path="/signup" component={noRequireAuth(Signup)} />
        <Route path="/signout" component={requireAuth(Signout)} />
        <Route path="/secret" component={requireAuth(SecretPage)} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
