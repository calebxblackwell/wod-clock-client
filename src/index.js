import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './helpers/store';
import  App  from './App';
import MainPage from './components/MainPage'


render(
  <Provider store={store}>
  <MainPage />
  </Provider>,
   document.getElementById('root'));
