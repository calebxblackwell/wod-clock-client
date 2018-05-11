import {combineReducers} from 'redux'
import trelloReducer from './stopwatch'
import program from './program'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  trelloReducer,
  program,
  form: formReducer,
  auth: authReducer
})



export default rootReducer
