import {createStore, applyMiddleware } from 'redux'
//import {trelloReducer} from './reducers';
import rootReducer from './reducers'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk))


export default store
